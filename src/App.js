import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RoverListing from './pages/RoverListing'
import Layout from './components/Layout'
import RoverDetails from './pages/RoverDetails'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" Component={RoverListing} />
                    <Route path="/rover/details/:rover" Component={RoverDetails} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
