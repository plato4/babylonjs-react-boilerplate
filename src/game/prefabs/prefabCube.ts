import * as BABYLON from "babylonjs";
import { IPrefab } from "../../engine/Prefab";
import { modelBlock } from "../models/modelBlock";
import { Rotate } from "../components/Rotate";

export const prefabCube: IPrefab = {
  name: "cube",
  position: new BABYLON.Vector3(-4, 0, 10),
  children: [
    {
      name: "cube",
      model: modelBlock,
      position: new BABYLON.Vector3(2, 0, 0),
      postBuild: (n) => new Rotate(n),
      children: [
        {
          name: "cube",
          model: modelBlock,
          position: new BABYLON.Vector3(2, 0, 0),
          postBuild: (n) => new Rotate(n),
        },
      ],
    },
  ],
};
