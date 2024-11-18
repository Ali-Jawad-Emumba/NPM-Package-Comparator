import styles from './NavBar.module.css'
import homeIcon from '../../assets/Home Icon.svg'

export default function NavBar(){
    return (
        <nav className={styles.navbar}>
           
            <img src={homeIcon} alt="" />
            <h1>NPM Package Comparator</h1>
            <p>Compare & Recommend the best NPM package</p>
            
        </nav>
    )
}