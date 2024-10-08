/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import { Rotate } from "./rotate";
import { prefabs } from "../prefabs";
import { GameManager } from "../../engine/src/gamemanager";
import { Game } from "../../engine/src/game";
import { Component } from "../../engine/src/component";
import { createPrefabAsync } from "../../engine/src/prefab";

export class MyGameManager extends GameManager {
  public game: Game;
  public cube?: BABYLON.TransformNode;

  constructor(game: Game, node: BABYLON.TransformNode) {
    super(game, node);
    this.game = game;
  }

  public toggleRotation(): void {
    if (this.cube) {
      Component.getComponentsInChildren(this.cube, Rotate).forEach((r) =>
        r.toggle()
      );
    }
  }

  public onStart(): void {
    createPrefabAsync(this.node, prefabs.cube).then((n) => (this.cube = n));
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
