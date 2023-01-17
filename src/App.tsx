import { useState } from 'react'
import './App.css'
import { 
  Route, 
  Routes,
  BrowserRouter as Router 
} from "react-router-dom";

import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'

import Nav from './components/Nav'
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}
