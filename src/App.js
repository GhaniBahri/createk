
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PackageInfo from './components/PackageInfo';

function App() {
  const [english, setEnglish]= useState(false)
  return (
    <main className="App">
      <NavBar  english={english} setEng={setEnglish}/>
      <PackageInfo/>
      <Footer/>
    </main>
  );
}

export default App;
