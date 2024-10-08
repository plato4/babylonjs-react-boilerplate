import { Game } from "../engine/src/game";
import { MyGameManager } from "./components/gamemanager";

export const createGame = (canvas: HTMLCanvasElement): Game => {
  return new Game(canvas, MyGameManager);
};
