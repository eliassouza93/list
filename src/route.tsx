import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header'
 



export function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>
        </Router>
    )
}