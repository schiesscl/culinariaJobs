import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './shared/nav/NavBar';
import UserHome from './pages/UserHome';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard/Dashboard';
import UserReview from './pages/UserReview'; // Importar la página UserReview

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/app/userHome" component={UserHome} />
                <Route path="/app/userProfile/:id" component={UserProfile} />
                <Route path="/app/dashboard" component={Dashboard} />
                <Route path="/app/userReview" component={UserReview} /> {/* Definir la ruta */}
                <Route path="*" element={<h1>Nada que mostrar</h1>} /> {/* Ruta para manejar rutas no definidas */}
            </Switch>
        </Router>
    );
}

export default App;
