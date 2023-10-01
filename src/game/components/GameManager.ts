/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";
import { Game } from "../../engine/Game";
import { Rotate } from "./Rotate";

export class GameManager extends Component {
  public game: Game;
  public static box?: BABYLON.TransformNode;
  constructor(game: Game, node: BABYLON.Node) {
    super(node);
    this.game = game;
  }

  public static toggleRotation(): void {
    if (GameManager.box) {
      Component.getComponents<Rotate>(GameManager.box).pop()?.toggle();
    }
  }

  public onStart(): void {
    GameManager.box = BABYLON.MeshBuilder.CreateBox(
      "default_box",
      { width: 1, height: 1, depth: 1 },
      this.node.getScene()
    );
    GameManager.box.position.z = 10;
    new Rotate(GameManager.box);
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
