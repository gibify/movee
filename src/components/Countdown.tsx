import { useContext } from "react";
import { FiPlayCircle, FiXCircle } from 'react-icons/fi';

import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteleft, minuteright] = String(minutes).padStart(2, '0').split('');
    const [secondleft, secondright] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
            <div>
                <span>{minuteleft}</span>
                <span>{minuteright}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondleft}</span>
                <span>{secondright}</span>
            </div>
        </div>

        { hasFinished ? (
            <button 
            disabled 
            className={styles.countdownButton}
            >
            Ciclo encerrado
        </button>
        ) : (
            <>
                { isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                    Abandonar ciclo
                    <FiXCircle size={22} />
                </button>
                ) : (
                <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                    Inicar ciclo
                    <FiPlayCircle size={22} />
                </button>
                )}
            </>
        )}
            
        </div>
    );
}