import loading from '../../img/loading.svg'
import styles from './Loader.module.css'

function Loading() {
    return (
        <div className={styles.loadercontainer}>
            <img src={loading} alt="Loading" className={styles.loader}/>
        </div>
    )
}

export default Loading