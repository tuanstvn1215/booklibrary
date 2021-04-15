import config from './config'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './components/theme.css'

import './reset.css'
import Index from './pages/Index'
import Test from './pages/Test'
import ReactTooltip from 'react-tooltip'
export default function App() {
    return (
        <Router>
            <link
                rel='stylesheet'
                href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
                integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
                crossOrigin='anonymous'
            />

            <Switch>
                <Route exac path={config.link.home}>
                    <Index />
                </Route>
                <Route exac path={config.link.cart}>
                    <Test />
                </Route>
            </Switch>
            <ReactTooltip />
        </Router>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
