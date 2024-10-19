import React from "react";
import { IslasScene } from "./IslasScene";
import { editable as e } from "@theatre/r3f";

export const Experience = () => {
	return (
		<>
			<ambientLight intensity={1.5} />
			<e.group theatreKey="IslasScene">
				<IslasScene />
			</e.group>
		</>
	);
};
