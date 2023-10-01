import Component from "../../engine/Component";
import { GameManager } from "../../game/components/GameManager";
import { useGameContext } from "../app/App";
import "./ui.css";

import React from "react";

const Ui: React.FC = () => {
  const { setGame, game } = useGameContext();
  return (
    <div className="ui">
      <div className="bit-container menu">
        <div
          className="bit-button"
          onClick={() => {
            if (game) {
              const node = game.activeScene.getNodeByName(
                "default_gamemanager"
              );
              if (node)
                Component.getComponents<GameManager>(node)
                  .pop()
                  ?.toggleRotation();
            }
          }}
        >
          Click To Toggle Rotation
        </div>
      </div>
    </div>
  );
};

export default Ui;
