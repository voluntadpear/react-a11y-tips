import React from 'react'

export default function Gallery({ prefix }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 row-gap-8">
			{Array.from({ length: 8 })
				.map((_, i) => `/img/${prefix}${i + 1}.jpg`)
				.map((img, i) => (
					<img
						src={img}
						key={i}
						className="w-48 h-48 object-cover rounded shadow-lg hover:shadow-xl transform transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-150 hover:z-10"
						loading="lazy"
						width="192"
						height="192"
					/>
				))}
		</div>
	)
}
