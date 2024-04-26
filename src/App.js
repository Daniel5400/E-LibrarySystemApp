import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import DashboardHomepage from './Dashboard/Screen/DashboardHomepage';
import Books from './Dashboard/Screen/Books';
import Settings from './Dashboard/Screen/Settings';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Borrowing from './Dashboard/Screen/Borrowing';
import Categories from './Dashboard/Screen/Categories';
import Librarians from './Dashboard/Screen/Librarian';
import Publishers from './Dashboard/Screen/Publishers';
import Users from './Dashboard/Screen/Users';




function App() {
  return (
    <div className="App">
      
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/dashboard" element={<DashboardHomepage/>} />
      <Route path="/books" element={<Books/>} />
      <Route path="/borrowing" element={<Borrowing/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/librarian" element={<Librarians/>} />
      <Route path="/publishers" element={<Publishers/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
      
    </div>
  );
}

export default App;
