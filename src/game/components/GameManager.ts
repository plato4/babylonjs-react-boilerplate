/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";
import { Game } from "../../engine/Game";
import { Rotate } from "./Rotate";

export class GameManager extends Component {
  public game: Game;
  constructor(game: Game, node: BABYLON.Node) {
    super(node);
    this.game = game;
  }

  public onStart(): void {
    const box = BABYLON.MeshBuilder.CreateBox(
      "default_box",
      { width: 1, height: 1, depth: 1 },
      this.node.getScene()
    );
    box.position.z = 10;
    new Rotate(box);

    const component = Component.getComponents<Rotate>(box);
    console.log(component);
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
