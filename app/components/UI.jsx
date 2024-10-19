export const UI = ({ currentScreen, onChangeScreen, isAnimating }) => {
	return (
		<main className="fixed inset-0 z-10">
			<section
				className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
					currentScreen === "Home" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="flex flex-col gap-4 items-center justify-center mb-4">
					<h1 className="text-5xl text-white opacity-90 font-ex">
						Bienvenidos a Escuela de Libertad
					</h1>
					<p>
						lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</div>
				<button
					onClick={() => onChangeScreen("Isla1")}
					className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
				>
					Visita la Isla 1
				</button>
			</section>
			<section
				className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
					currentScreen === "Isla1" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
						Isla 1
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("Isla2")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Visita Isla 2
					</button>
				</div>
			</section>
			<section
				className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
					currentScreen === "Isla2" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
						Isla 2
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("Isla3")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Visita Isla 3
					</button>
				</div>
			</section>
			<section
				className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
					currentScreen === "Isla3" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
						Isla 3
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("Isla4")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Visita Isla 4
					</button>
				</div>
			</section>
			<section
				className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
					currentScreen === "Isla4" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
						Isla 4
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<button
						onClick={() => onChangeScreen("End")}
						className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
					>
						Volver al Inicio
					</button>
				</div>
			</section>
			<section
				className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
					currentScreen === "End" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
					<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
						Gracias por visitar
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
				</div>
			</section>
		</main>
	);
};
