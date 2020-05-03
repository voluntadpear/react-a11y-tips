export const translationMap = {
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

export const activitiesString = (entry) =>
	Object.entries(entry.activities)
		.filter(([key, value]) => value)
		.map(([key]) => translationMap[key])
		.join(', ')

export const entryToReader = (entry) =>
	`registro con animal favorito: ${entry.animal}, color favorito: ${
		translationMap[entry.color]
	}, y ${activitiesString(entry)} como actividades favoritas.`
