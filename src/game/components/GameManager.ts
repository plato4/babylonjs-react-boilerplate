/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";
import { Game } from "../../engine/Game";
import { Rotate } from "./Rotate";
import { createPrefabAsync } from "../../engine/Prefab";
import { prefabCube } from "../prefabs/prefabCube";
import { GameManager } from "../../engine/GameManager";

export class MyGameManager extends GameManager {
  public cube?: BABYLON.TransformNode;
  constructor(game: Game, node: BABYLON.Node) {
    super(game, node);
  }

  public toggleRotation(): void {
    if (this.cube) {
      Component.getComponentsInChildren<Rotate>(this.cube).forEach((r) =>
        r.toggle()
      );
    }
  }

  public onStart(): void {
    createPrefabAsync(this.node, prefabCube).then((n) => (this.cube = n));
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
