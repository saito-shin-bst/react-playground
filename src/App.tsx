import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900">
			<div className="flex gap-8 mb-8">
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img
						src={viteLogo}
						className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo}
						className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa]"
						alt="React logo"
					/>
				</a>
			</div>
			<h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
				Vite + React
			</h1>
			<div className="text-center mb-8">
				<button
					type="button"
					onClick={() => setCount((count) => count + 1)}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
				>
					count is {count}
				</button>
				<p className="text-gray-300">
					Edit{" "}
					<code className="bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and
					save to test HMR
				</p>
			</div>
			<p className="text-gray-400 hover:text-gray-300 transition-colors">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
