import * as BABYLON from "babylonjs";

export default class Component {
	public readonly node: BABYLON.Node;
	private readonly name: string;

	constructor(name: string, node: BABYLON.Node) {
		this.node = node;
		this.name = name;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(this.node as any)[this.name] = this;
		const startObservable = this.node
			.getScene()
			.onBeforeRenderObservable.addOnce(() => this.tryOnStart());
		const updateObservable = this.node
			.getScene()
			.onBeforeRenderObservable.add(() => this.tryOnUpdate());
		this.node.onDisposeObservable.add(() => {
			const scene = this.node.getScene();
			scene.onBeforeRenderObservable.remove(updateObservable);
			scene.onBeforeRenderObservable.remove(startObservable);
			this.tryCall(this.onDestroy);
			delete (this.node as any)[this.name];
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
		this.node.dispose();
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	private tryCall(f: () => void) {
		try {
			f.bind(this)();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.log(
				"(" + this.node.name + ":" + this.name + ") Error: " + e.stack
			);
		}
	}
}
