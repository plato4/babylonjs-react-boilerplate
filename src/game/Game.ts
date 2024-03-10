import { Game } from "../engine/Game";
import { MyGameManager } from "./components/GameManager";

export const createGame = async (canvas: HTMLCanvasElement): Promise<Game> => {
  const game = new Game(canvas);
  await game.initAsync();
  game.begin(MyGameManager);
  return game;
};
