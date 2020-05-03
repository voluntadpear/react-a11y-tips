import React from 'react'

const translationMap = {
	red: 'Rojo',
	green: 'Verde',
	yellow: 'Amarillo',
	blue: 'Azul',
	black: 'Negro',
	white: 'Blanco',
	brown: 'Marrón',
	orange: 'Naranja',
	walking: 'Caminar',
	running: 'Correr',
	swimming: 'Nadar',
	weightlifting: 'Hacer pesas',
}

export default function QuizTable({ entries, onRemove }) {
	return (
		<table className="w-full mt-4 table-fixed">
			<thead>
				<tr>
					<th className="text-left w-2/6 pl-2 md:pl-4">Animal</th>
					<th className="text-left w-1/6">Color</th>
					<th className="text-center w-2/6">Actividades</th>
				</tr>
			</thead>
			<tbody>
				{entries.map((entry, i) => (
					<tr key={i} className={`text-gray-800 ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'}`}>
						<td className="py-3 text-left w-2/6 truncate pl-2 md:pl-4">{entry.animal}</td>
						<td className="py-3 text-left w-1/6 truncate">{translationMap[entry.color]}</td>
						<td className="py-3 text-center w-2/6 truncate">
							{Object.entries(entry.activities)
								.filter(([key, value]) => value)
								.map(([key]) => translationMap[key])
								.join(', ')}
						</td>
						<td className="py-3 w-1/6 text-center">
							<a
								href="#"
								onClick={() => {
									onRemove(i)
								}}
								className="text-gray-600 hover:text-gray-800"
							>
								<svg viewBox="0 0 16 16" className="w-6 h-6">
									<path
										d="M6 2v1H2v1h1v10h10V4h1V3h-4V2H6zm1 1h2v1h3v9H4V4h3V3zM6 6v5h1V6H6zm3 0v5h1V6H9z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
