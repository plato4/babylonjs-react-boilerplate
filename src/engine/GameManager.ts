import * as BABYLON from "babylonjs";

import Component from "./Component";
import { Game } from "./Game";

export class GameManager extends Component {
  public game: Game;

  constructor(game: Game, node: BABYLON.Node) {
    super(node);
    this.game = game;
  }
}
