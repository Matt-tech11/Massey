import styles from "./PageNotFound.module.css" 
import { IoCloudOfflineSharp } from 'react-icons/io5';
export default function PageNotFound (){
    return (
        <div className={styles.text}>Page Not Found <IoCloudOfflineSharp />
        </div>
        
    )
}