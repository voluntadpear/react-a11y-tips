import React from 'react'

import Gallery from '../components/Gallery'

export default function Carpinchos() {
	React.useEffect(() => {
		document.title = 'Carpinchos'
	}, [])
	const altMap = new Map([
		[1, 'Carpincho en una sala con un collar colorido'],
		[2, 'Cuatro carpinchos muy juntos'],
		[3, 'Grupo de carpinchos dándose un baño'],
		[4, 'Un carpincho en una piscina parado sobre una tabla con una bolsa de madera cortada puesta en la cabeza'],
		[5, 'Un carpincho al borde de una piscina comiendo un choclo'],
		[6, 'Un carpincho adulto junto a un carpincho bebé dándose un baño rodeados de flores y frutas'],
		[7, 'Un carpincho acariciándose tiernamente con un gato'],
		[
			8,
			'Un carpincho descansando sobre la tierra rodeado de tortugas mientras que unos pájaros están posados encima',
		],
	])
	return (
		<section className="mt-8 md:mt-16 lg:max-w-screen-lg mx-auto">
			<h1 className="sr-only">Carpinchos</h1>
			<Gallery prefix="capy" altMap={altMap} />
		</section>
	)
}
