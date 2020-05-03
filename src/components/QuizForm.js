import React from 'react'

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

export default function ({ onSubmit }) {
	const [currentEntry, setCurrentEntry] = React.useState(defaultEntry)
	const favoriteAnimalInput = React.useRef(null)

	React.useEffect(() => {
		if (currentEntry === defaultEntry && favoriteAnimalInput.current) {
			favoriteAnimalInput.current.focus()
		}
	}, [currentEntry])

	return (
		<form className="lg:grid lg:grid-cols-2 lg:col-span-2">
			<div className="mt-4 flex items-center">
				<label className="w-1/2 md:w-1/3" htmlFor="animal-input">
					Animal favorito:{' '}
				</label>
				<input
					type="text"
					id="animal-input"
					className="border-2 border-gray-600 bg-gray-100 rounded pl-3 py-1 w-1/2 md:w-48 lg:w-auto"
					value={currentEntry.animal}
					onChange={(e) => {
						const { value } = e.target
						setCurrentEntry((entry) => ({ ...entry, animal: value }))
					}}
					required
					ref={favoriteAnimalInput}
				/>
			</div>
			<div className="mt-4 flex items-center">
				<label className="w-1/2 md:w-1/3" htmlFor="color-input">
					Color favorito:{' '}
				</label>
				<div className="relative w-1/2 md:w-auto">
					<select
						className="appearance-none w-full bg-gray-100 border-2 border-gray-600 pl-3 py-1 md:w-48 lg:w-32"
						id="color-input"
						value={currentEntry.color}
						onChange={(e) => {
							const { value } = e.target
							setCurrentEntry((entry) => ({ ...entry, color: value }))
						}}
						required
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
			<fieldset className="mt-8 lg:col-span-2">
				<legend className="w-1/2 md:w-1/3 lg:w-1/6 float-left">Actividades favoritas: </legend>
				<div className="flex flex-wrap w-1/2 md:w-auto">
					<div>
						<input
							type="checkbox"
							id="walking-check"
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
						<label className="mx-2" htmlFor="walking-check">
							Caminar
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="running-check"
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
						<label className="mx-2" htmlFor="running-check">
							Correr
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="swimming-check"
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
						<label className="mx-2" htmlFor="swimming-check">
							Nadar
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="weight-check"
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
						<label className="mx-2" htmlFor="weight-check">
							Hacer pesas
						</label>
					</div>
				</div>
			</fieldset>
			<div className="lg:col-span-2">
				<button
					type="button"
					className="bg-teal-300 border-2 border-teal-600 px-4 py-2 rounded hover:bg-teal-400 md:mt-12"
					onClick={() => {
						onSubmit(currentEntry)
						setCurrentEntry(defaultEntry)
					}}
				>
					Enviar
				</button>
			</div>
		</form>
	)
}
