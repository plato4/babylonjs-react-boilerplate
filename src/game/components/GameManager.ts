/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";
import { Game } from "../../engine/Game";
import { Rotate } from "./Rotate";
import { createPrefabAsync } from "../../engine/Prefab";
import { prefabCube } from "../prefabs/prefabCube";

export class GameManager extends Component {
  public game: Game;
  public static cube?: BABYLON.TransformNode;
  constructor(game: Game, node: BABYLON.Node) {
    super(node);
    this.game = game;
  }

  public static toggleRotation(): void {
    if (GameManager.cube) {
      Component.getComponentsInChildren<Rotate>(GameManager.cube).forEach((r) =>
        r.toggle()
      );
    }
  }

  public onStart(): void {
    createPrefabAsync(this.node, prefabCube).then(
      (n) => (GameManager.cube = n)
    );
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
