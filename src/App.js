import React from 'react'
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Home from './pages/Home'
import Carpinchos from './pages/Carpinchos'
import Perritos from './pages/Perritos'

function App() {
	return (
		<div className="bg-gray-100 min-h-screen px-4 py-4 md:pb-16">
			<BrowserRouter>
				<div className="flex lg:max-w-screen-lg mx-auto md:mt-8 space-x-8 md:space-x-24 font-serif">
					<SmartLink to="/" matchExact={true}>
						<svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
							<path d="M16 256L256 64l96 72v-32h48v72l96 80h-48v192H328V288h-96v160H64V256z" />
						</svg>
					</SmartLink>
					<SmartLink to="/carpinchos">Carpinchos</SmartLink>
					<SmartLink to="/perritos">Perritos</SmartLink>
				</div>

				<Switch>
					<Route path="/carpinchos">
						<Carpinchos />
					</Route>
					<Route path="/perritos">
						<Perritos />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

function SmartLink(props) {
	const match = useRouteMatch({ path: props.to, exact: props.matchExact })

	return (
		<Link
			to={props.to}
			className={`${props.className || 'hover:text-gray-500 hover:underline'} ${match ? 'text-teal-400' : ''}`}
		>
			{props.children}
		</Link>
	)
}

export default App
