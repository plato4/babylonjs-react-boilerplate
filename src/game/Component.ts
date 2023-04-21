import * as BABYLON from "babylonjs";

export default class Component {
	public readonly gameObject: BABYLON.Node;
	private readonly componentReference: string;

	constructor(gameobject: BABYLON.Node, componentReference: string) {
		this.gameObject = gameobject;
		this.componentReference = componentReference;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(this.gameObject as any)[this.componentReference] = this;
		const startObservable = this.gameObject
			.getScene()
			.onBeforeRenderObservable.addOnce(() => this.tryOnStart());
		const updateObservable = this.gameObject
			.getScene()
			.onBeforeRenderObservable.add(() => this.tryOnUpdate());
		this.gameObject.onDisposeObservable.add(() => {
			const scene = this.gameObject.getScene();
			scene.onBeforeRenderObservable.remove(updateObservable);
			scene.onBeforeRenderObservable.remove(startObservable);
			this.tryCall(this.onDestroy);
			delete (this.gameObject as any)[this.componentReference];
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public onStart(): void {}

	private tryOnStart(): void {
		this.tryCall(this.onStart);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public onUpdate(): void {}

	private tryOnUpdate(): void {
		this.tryCall(this.onUpdate);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public onDestroy(): void {}

	public destroy(): void {
		this.gameObject.dispose();
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	private tryCall(f: () => void) {
		try {
			f.bind(this)();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.log(
				"(" +
					this.gameObject.name +
					":" +
					this.componentReference +
					") Error: " +
					e.stack
			);
		}
	}
}
