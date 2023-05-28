import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Information from './pages/Information'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Information />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes >
    </BrowserRouter>
  )
}

export default App
