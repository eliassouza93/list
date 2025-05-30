import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header";
import { Home } from "./pages";

export function RouteApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
