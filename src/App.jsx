import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages-
import Home from "./pages/Home"
import SingleBreed from "./pages/SingleBreed"
import AllBreeds from "./pages/AllBreeds"

// components-
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/breed/:breedId" element={<SingleBreed />} />
        <Route exact path="/breeds" element={<AllBreeds />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
