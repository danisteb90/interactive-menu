"use client";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./experience";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";

// import r3fExtension from "@theatre/r3f/dist/extension";
// import studio from "@theatre/studio";

import { editable as e } from "@theatre/r3f";

// import projectState from "../assets/InteractiveMenu.json";
// import projectState from "../assets/InteractiveMenu2.json";
import projectState from "../assets/InteractiveMenu3.json";

// studio.initialize();
// studio.extend(r3fExtension);
// studio.ui.hide();

const project = getProject("InteractiveMenu", {
	state: projectState,
});
const mainSheet = project.sheet("Mainv3");

const transitions = {
	Home: [0, 4],
	Isla1: [4, 8], //Cuando los frames no son enteros se debe poner de la sig forma [6, 12 + 16 / 30]
	InicioIsla1: [8, 12],
	Isla2: [12, 16],
	InicioIsla2: [16, 20],
	Isla3: [20, 24],
	InicioIsla3: [24, 28],
	Isla4: [28, 32],
	InicioIsla4: [32, 36],
	// End: [33, 44],
};

export const InteractiveMenu = () => {
	const [currentScreen, setCurrentScreen] = useState("Intro");
	const [targetScreen, setTargetScreen] = useState("Home");

	const cameraTagetRef = useRef();
	const isSetup = useRef(false);

	useEffect(() => {
		project.ready.then(() => {
			if (currentScreen === targetScreen) {
				return;
			}
			if (isSetup.current && currentScreen === "Intro") {
				// En desarrollo Strict Mode triggerea ek useEffect 2 veces asi que generamos esta referencia para evitar eso
				return;
			}
			isSetup.current = true;
			const transition = transitions[targetScreen];
			if (!transition) {
				return;
			}
			mainSheet.sequence
				.play({
					range: transition,
				})
				.then(() => setCurrentScreen(targetScreen));
		});
	}, [targetScreen]);

	return (
		<section className="w-full h-screen">
			<UI
				currentScreen={currentScreen}
				onChangeScreen={setTargetScreen}
				isAnimating={currentScreen !== targetScreen}
			/>
			<Canvas
				camera={{
					position: [0, 0, 50],
					fov: 30,
					near: 1,
					far: 1000,
				}}
				gl={{
					preserveDrawingBuffer: true,
				}}
			>
				<SheetProvider sheet={mainSheet}>
					<PerspectiveCamera
						position={[0, 0, 50]}
						fov={30}
						near={1}
						far={1000}
						makeDefault
						theatreKey="Camera"
						lookAt={cameraTagetRef}
					/>
					<e.mesh
						theatreKey="Camera Target"
						visible="editor"
						ref={cameraTagetRef}
					>
						<octahedronGeometry args={[0.1, 0]} />
						<meshPhongMaterial color="yellow" />
					</e.mesh>
					<Experience />
				</SheetProvider>
			</Canvas>
		</section>
	);
};
