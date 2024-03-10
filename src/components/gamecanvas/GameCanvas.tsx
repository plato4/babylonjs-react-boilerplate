import React, { useEffect, useRef } from "react";
import { useGameContext } from "../app/App";
import { createGame } from "../../game/Game";
import { Game } from "../../engine/Game";

const GameCanvas: React.FC = () => {
  const { setGame } = useGameContext();
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvas.current) return;
    let _game: Game;
    createGame(canvas.current).then((g) => {
      setGame(g);
      _game = g;
    });
    return (): void => {
      _game?.dispose();
    };
  }, [setGame]);
  return <canvas ref={canvas} style={{ width: "100%", height: "100%" }} />;
};

export default GameCanvas;
