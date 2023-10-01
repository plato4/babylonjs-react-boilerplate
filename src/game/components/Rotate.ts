/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";

export class Rotate extends Component {
  public onStart(): void {}
  public onDestroy(): void {}
  public onUpdate() {
    if (this.node instanceof BABYLON.TransformNode) {
      this.node.rotate(
        BABYLON.Vector3.One(),
        this.node.getScene().deltaTime * 0.001
      );
      console.log("Rotate Component");
    }
  }
}
