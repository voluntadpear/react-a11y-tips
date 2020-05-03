import React from 'react'

import QuizForm from '../components/QuizForm'
import QuizTable from '../components/QuizTable'
import { entryToReader } from '../entryUtils'

export default function Home({ onAssertiveMsg, onPoliteMsg }) {
	const [entries, setEntries] = React.useState([])

	return (
		<div className="lg:max-w-screen-lg mx-auto mt-8 md:mt-16 text-gray-800">
			<h1 className="sr-only">Página de Demo</h1>
			<section className="lg:grid lg:grid-cols-2">
				<h2 className="text-2xl md:text-3xl lg:col-span-2 font-serif mb-8">Encuesta</h2>
				<QuizForm
					onSubmit={(entry) => {
						setEntries((entries) => [...entries, entry])
						onPoliteMsg(`${entryToReader(entry)} agregado`)
					}}
				/>
			</section>
			<section>
				<h2 className="text-2xl md:text-3xl mt-8 lg:mt-16 font-serif mb-8">Resultados</h2>
				{entries.length > 0 ? (
					<QuizTable
						entries={entries}
						onRemove={(index) => {
							const entryToRemove = entries[index]
							onAssertiveMsg(`${entryToReader(entryToRemove)} eliminado`)
							setEntries((entries) => entries.filter((entry, i) => i !== index))
						}}
					/>
				) : (
					<p className="mt-4 text-md text-gray-800">Complete la encuesta para mostrar resultados</p>
				)}
			</section>
		</div>
	)
}
