import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
