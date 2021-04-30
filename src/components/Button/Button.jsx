import PropTypes from "prop-types";
import styles from './Button.module.css';


const Button = ({ onStartTimer, onStopTimer, onResetTimer, onWaitTimer }) => {
    
    return (
        <ul className={styles.list_btn}>
            <li className={styles.item}>
                <button type="button" className={styles.button} onClick={onStartTimer}>
                    Start
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button} onClick={onStopTimer}>
                    Stop
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button} onClick={onResetTimer}>Reset</button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button} onClick={onWaitTimer}>Wait</button>
            </li>
    
        </ul>
    )
};

Button.propTypes = {
  onStartTimer: PropTypes.func.isRequired,
  onStopTimer: PropTypes.func.isRequired,
  onResetTimer: PropTypes.func.isRequired,
  onWaitTimer: PropTypes.func.isRequired,
};

export default Button;