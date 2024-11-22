import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Movies from './components/Movies';
import Edit from './components/Edit';

// app controls and navigation
function App() {
  return (
    <Router>
      <NavigationBar /* navbar with routing *//>
      <Routes>
        <Route path="/" element={<Content /> /* The Content page */} />
        <Route path="/read" element={<Read />/* The Read page */} />
        <Route path="/create" element={<Create />/* The Create page */} />
        <Route path='/edit/:id' element={<Edit /> /* The Edit Movies page */} />
      </Routes>
    </Router>
  );
}

export default App;