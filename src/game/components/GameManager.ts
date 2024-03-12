/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import Component from "../../engine/Component";
import { Game } from "../../engine/Game";
import { Rotate } from "./Rotate";
import { createPrefabAsync } from "../../engine/Prefab";
import { GameManager } from "../../engine/GameManager";
import { prefabs } from "../Prefabs";
import { HavokPhysicsWithBindings } from "@babylonjs/havok";

export class MyGameManager extends GameManager {
  public game: Game;
  public cube?: BABYLON.TransformNode;
  public havokInstance?: HavokPhysicsWithBindings;
  public havokPlugin?: BABYLON.HavokPlugin;

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
    Game.createHavok(this.node.getScene(), BABYLON.Vector3.Zero()).then((v) => {
      this.havokInstance = v.havokInstance;
      this.havokPlugin = v.havokPlugin;
    });
    createPrefabAsync(this.node, prefabs.cube).then((n) => (this.cube = n));
  }
  public onUpdate(): void {}
  public onDestroy(): void {}
}
