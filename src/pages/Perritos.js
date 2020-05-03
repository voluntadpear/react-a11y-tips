import React from 'react'

import Gallery from '../components/Gallery'

export default function Perritos() {
	React.useEffect(() => {
		document.title = 'Perritos'
	}, [])
	const altMap = new Map([
		[1, 'Un labrador cachorro acostado en el pasto'],
		[2, 'Un pomerania sentado sobre el pasto'],
		[3, 'Un perro mezcla de pitbull con presa canario mirando a la cámara'],
		[4, 'Un perro pastor alemán acostado sobre el pasto'],
		[5, 'Un caniche marrón sentado sobre un sofá'],
		[6, 'Un par de dálmatas mirando a la cámara'],
		[7, 'Un Shiba Inu posando mientras sostiene un control de la consola PlayStation con sus patas delanteras'],
		[8, 'Un chow chow posando para la cámara'],
	])

	return (
		<section className="mt-8 md:mt-16 lg:max-w-screen-lg mx-auto">
			<h1 className="sr-only">Perritos</h1>
			<Gallery prefix="dog" altMap={altMap} />
		</section>
	)
}
