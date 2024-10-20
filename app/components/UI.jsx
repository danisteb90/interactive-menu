export const UI = ({ currentScreen, onChangeScreen, isAnimating }) => {
	return (
		<>
			<main
				className={`${
					currentScreen === "Isla1" ||
					currentScreen === "Isla2" ||
					currentScreen === "Isla3" ||
					currentScreen === "Isla4"
						? "fixed inset-0 z-1"
						: "fixed inset-0 z-10"
				}`}
			>
				<section
					className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 
				${
					(currentScreen === "Home" ||
						currentScreen === "InicioIsla1" ||
						currentScreen === "InicioIsla2" ||
						currentScreen === "InicioIsla3" ||
						currentScreen === "InicioIsla4") &&
					!isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
				>
					<div className="fixed top-[200px] left-[50%] translate-x-[-50%] flex flex-col gap-4 items-center justify-center mb-4">
						<h1 className="text-5xl text-white opacity-90">
							Bienvenidos a Escuela de Libertad
						</h1>
						<p>
							lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
						<div className="flex gap-6">
							<button
								onClick={() => onChangeScreen("Isla1")}
								className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
							>
								Visita la Isla 1
							</button>
							<button
								onClick={() => onChangeScreen("Isla2")}
								className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
							>
								Visita la Isla 2
							</button>
							<button
								onClick={() => onChangeScreen("Isla3")}
								className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
							>
								Visita la Isla 3
							</button>
							<button
								onClick={() => onChangeScreen("Isla4")}
								className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
							>
								Visita la Isla 4
							</button>
						</div>
					</div>
				</section>
			</main>
			<section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla1" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Isla 1
					</h2>
					<p className="text-white mt-2 pointer-events-none">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("InicioIsla1")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Regresar al inicio
					</button>
				</div>
			</section>
			<section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla2" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Isla 2
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("InicioIsla2")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Regresar al inicio
					</button>
				</div>
			</section>
			<section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla3" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Isla 3
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("InicioIsla3")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Regresar al inicio
					</button>
				</div>
			</section>
			<section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla4" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Isla 4
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("InicioIsla4")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Regresar al inicio
					</button>
				</div>
			</section>
			{/* <section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla1" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
				<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Gracias por visitar
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
				</div>
			</section> */}
		</>
	);
};
