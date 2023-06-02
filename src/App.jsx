import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Introduction from './pages/Introduction'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Events from './pages/Events'
import Awurudu from './pages/events/Awurudu'
import Outings from './pages/events/Outings'
import Dansala from './pages/events/Dansala'
import AboutUs from './pages/AboutUs'

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="event" element={<Events/>}>
            <Route index element={<Awurudu />} />
            <Route path="awurudu" element={<Awurudu/>}/>
            <Route path="outings" element={<Outings/>}/>
            <Route path="dansala" element={<Dansala/>}/>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes >
    </BrowserRouter>
  )
}

export default App
