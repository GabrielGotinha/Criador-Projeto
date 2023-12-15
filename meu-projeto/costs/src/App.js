import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Company from './componentes/pages/Company'
import Contact from './componentes/pages/Contact'
import NewProject from './componentes/pages/NewProject'
import Container from './componentes/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'>NewProject</Link>
      </div>
      <Container customClass="min-height">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/newproject' element={<NewProject/>}/> 
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
