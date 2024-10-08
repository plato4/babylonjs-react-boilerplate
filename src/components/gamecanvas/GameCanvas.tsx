import { useRef, useEffect } from "react";
import { createGame } from "../../game/game";
import { useGameContext } from "../app/App";


export const GameCanvas: React.FC = () => {
  const { setGame } = useGameContext();
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvas.current) return;
    const _game = createGame(canvas.current);
    setGame(_game);
    return (): void => {
      _game.dispose();
    };
  }, [setGame]);
  return <canvas ref={canvas} style={{ width: "100%", height: "100%" }} />;
};
