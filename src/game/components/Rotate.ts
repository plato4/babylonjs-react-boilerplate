import { TransformNode, Vector3 } from "babylonjs";
import Component from "../Component";

export class Rotate extends Component {
	public onUpdate() {
		if (this.gameObject instanceof TransformNode) {
			this.gameObject.rotate(
				Vector3.One(),
				this.gameObject.getScene().deltaTime * 0.001
			);
			console.log("Rotate Component");
		}
	}
}
