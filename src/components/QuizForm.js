import React from 'react'

export default function ({ onSubmit }) {
	const defaultEntry = {
		animal: '',
		color: 'red',
		activities: {
			walking: false,
			running: false,
			swimming: false,
			weightlifting: false,
		},
	}

	const [currentEntry, setCurrentEntry] = React.useState(defaultEntry)

	return (
		<>
			<div className="mt-4 flex items-center">
				<span className="w-1/2 md:w-1/3">Animal favorito: </span>
				<input
					type="text"
					className="border-2 border-gray-600 bg-gray-100 rounded pl-3 py-1 w-1/2 md:w-48 lg:w-auto"
					value={currentEntry.animal}
					onChange={(e) => {
						const { value } = e.target
						setCurrentEntry((entry) => ({ ...entry, animal: value }))
					}}
				/>
			</div>
			<div className="mt-4 flex items-center">
				<span className="w-1/2 md:w-1/3">Color favorito: </span>
				<div className="relative w-1/2 md:w-auto">
					<select
						className="appearance-none w-full bg-gray-100 border-2 border-gray-600 pl-3 py-1 md:w-48 lg:w-32"
						value={currentEntry.color}
						onChange={(e) => {
							const { value } = e.target
							setCurrentEntry((entry) => ({ ...entry, color: value }))
						}}
					>
						<option value="blue">Azul</option>
						<option value="red">Rojo</option>
						<option value="green">Verde</option>
						<option value="yellow">Amarillo</option>
						<option value="black">Negro</option>
						<option value="white">Blanco</option>
						<option value="brown">Marrón</option>
						<option value="orange">Naranja</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</div>
			<div className="mt-8 flex lg:col-span-2">
				<span className="w-1/2 md:w-1/3 lg:w-1/6">Actividades favoritas: </span>
				<div className="flex flex-wrap w-1/2 md:w-auto">
					<div>
						<input
							type="checkbox"
							value="walking"
							checked={currentEntry.activities.walking}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									activities: { ...entry.activities, walking: checked },
								}))
							}}
						/>
						<span className="mx-2">Caminar </span>
					</div>
					<div>
						<input
							type="checkbox"
							value="running"
							checked={currentEntry.activities.running}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									activities: { ...entry.activities, running: checked },
								}))
							}}
						/>
						<span className="mx-2">Correr </span>
					</div>
					<div>
						<input
							type="checkbox"
							value="swimming"
							checked={currentEntry.activities.swimming}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									activities: { ...entry.activities, swimming: checked },
								}))
							}}
						/>
						<span className="mx-2">Nadar </span>
					</div>
					<div>
						<input
							type="checkbox"
							value="weightlifting"
							checked={currentEntry.activities.weightlifting}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									activities: { ...entry.activities, weightlifting: checked },
								}))
							}}
						/>
						<span className="mx-2">Hacer pesas </span>
					</div>
				</div>
			</div>
			<div className="lg:col-span-2">
				<button
					className="bg-teal-400 border-2 border-teal-600 px-4 py-2 rounded hover:bg-teal-600 md:mt-12"
					onClick={() => {
						onSubmit(currentEntry)
						setCurrentEntry(defaultEntry)
					}}
				>
					Enviar
				</button>
			</div>
		</>
	)
}
