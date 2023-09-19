import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPages';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="nosotros" element={<NosotrosPage></NosotrosPage>}></Route>
          <Route path="novedades" element={<NovedadesPage></NovedadesPage>}></Route>
          <Route path="contacto" element={<ContactoPage></ContactoPage>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
