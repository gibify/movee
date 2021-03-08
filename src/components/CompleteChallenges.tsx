import { useContext } from 'react';
import { FiAward } from 'react-icons/fi';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    
    return (
        <div className={styles.completeChallengesContainer}>
            <span>
                < FiAward/>
                Desafios completos
                </span>
            <span>{challengesCompleted}</span>
        </div>
    );
}