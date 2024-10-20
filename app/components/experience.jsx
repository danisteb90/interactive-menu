import React from "react";
// import { IslasScene } from "./IslasScene";
import { editable as e } from "@theatre/r3f";
import { IslasScene2 } from "./IslasScene2";

export const Experience = () => {
	return (
		<>
			<ambientLight intensity={1.5} />
			<e.group theatreKey="IslasScene">
				<IslasScene2 />
			</e.group>
		</>
	);
};
