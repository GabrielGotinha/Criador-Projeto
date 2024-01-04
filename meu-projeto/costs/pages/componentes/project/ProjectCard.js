import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard ({id, name, budget, category, handleRemove}){
    return(
        <div className={styles.projectcard}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.categorytext}>
            <span className = {`${styles[category?.toLowerCase() || '']}`}></span> {category}
            </p>
            <div className={styles.projectcardactions}>
                <Link to="/">
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard