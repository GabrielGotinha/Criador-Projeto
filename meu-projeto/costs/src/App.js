import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import NewProject from './componentes/pages/NewProject'
import Container from './componentes/layout/Container'
import Navbar from './componentes/layout/Navbar'
import Footer from './componentes/layout/Footer'
import Projects from './componentes/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/newproject' element={<NewProject/>}/> 
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
