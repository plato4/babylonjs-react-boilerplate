import "./menu.css";

import React from "react";
import { useGameContext } from "../app/App";

const Menu: React.FC = () => {
	const { game } = useGameContext();

	return (
		<div className="bit-container menu">
			<div>Menu</div>
		</div>
	);
};

export default Menu;
