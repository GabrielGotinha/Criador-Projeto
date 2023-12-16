import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
        <Container>
        <Link to='/'>
            <img src={logo} alt="Projeto"/>
        </Link>
        <ul className={styles.list}>
            <li class={styles.item}><Link to='/'>Home</Link> </li>
        <li className={styles.item}><Link to='/Projects'>Projects</Link> </li>       
        <li className={styles.item}><Link to='/newproject'>NewProject</Link></li>
        <li className={styles.item}><Link to='/contact'>Contact</Link> </li>
        </ul>
        </Container>
      </nav>
    )
}

export default Navbar