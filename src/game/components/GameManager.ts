import Component from "../Component";
import { Game } from "../Game";
import { Rotate } from "./Rotate";
import * as BABYLON from "babylonjs";

export class GameManager extends Component {
	public game: Game;
	constructor(gameObject: BABYLON.Node, game: Game) {
		super(gameObject, "gamemanager");
		this.game = game;
		this.boxScene();
	}

	public boxScene() {
		const box = BABYLON.MeshBuilder.CreateBox(
			"default_box",
			{ width: 0.1, height: 0.1, depth: 0.1 },
			this.gameObject.getScene()
		);

		const camera = this.gameObject.getScene().getCameraByName("default_camera");

		if (camera) camera.attachControl(this.game.canvas, true);
		const light = new BABYLON.HemisphericLight(
			"default_light",
			new BABYLON.Vector3(1, 1, 0),
			this.game.scene
		);
		new Rotate(box, "Rotate");
	}
}
