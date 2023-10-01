import { GameManager } from "../../game/components/GameManager";
import "./ui.css";

import React from "react";

const Ui: React.FC = () => {
  return (
    <div className="ui">
      <div className="bit-container menu">
        <div
          className="bit-button"
          onClick={() => GameManager.toggleRotation()}
        >
          Click To Toggle Rotation
        </div>
      </div>
    </div>
  );
};

export default Ui;
