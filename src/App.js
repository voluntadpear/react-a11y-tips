import React from 'react'
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Home from './pages/Home'
import Carpinchos from './pages/Carpinchos'
import Perritos from './pages/Perritos'

function App() {
	const [assertiveMsg, setAssertiveMsg] = React.useState('')
	const [politeMsg, setPoliteMsg] = React.useState('')

	React.useLayoutEffect(() => {
		const assertiveEl = document.querySelector('.assertive-region')
		if (assertiveEl) {
			assertiveEl.textContent = assertiveMsg
		}
	}, [assertiveMsg])

	React.useLayoutEffect(() => {
		const politeEl = document.querySelector('.polite-region')
		if (politeEl) {
			politeEl.textContent = politeMsg
		}
	}, [politeMsg])

	return (
		<div className="bg-gray-100 min-h-screen px-4 py-4 md:pb-16">
			<BrowserRouter>
				<header className=" lg:max-w-screen-lg mx-auto md:mt-8">
					<nav className="flex space-x-8 md:space-x-24 font-serif">
					<SmartLink to="/" matchExact={true}>
						<svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
							<path d="M16 256L256 64l96 72v-32h48v72l96 80h-48v192H328V288h-96v160H64V256z">
								<title>Inicio</title>
							</path>
						</svg>
					</SmartLink>
					<SmartLink to="/carpinchos">Carpinchos</SmartLink>
					<SmartLink to="/perritos">Perritos</SmartLink>
					</nav>
				</header>
				<main>
					<Switch>
						<Route path="/carpinchos">
							<Carpinchos />
						</Route>
						<Route path="/perritos">
							<Perritos />
						</Route>
						<Route path="/">
							<Home onAssertiveMsg={setAssertiveMsg} onPoliteMsg={setPoliteMsg} />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	)
}

function SmartLink(props) {
	const match = useRouteMatch({ path: props.to, exact: props.matchExact })

	return (
		<Link
			to={props.to}
			className={`${props.className || 'hover:text-gray-700 hover:underline'} ${match ? 'text-teal-700' : ''}`}
		>
			{props.children}
		</Link>
	)
}

export default App
