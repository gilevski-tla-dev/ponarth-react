import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DelayedButton.module.css'
interface DelayedButtonProps {
    to: string;
    delay: number;
    children: React.ReactNode;
    className?: string;
}

const DelayedButton: React.FC<DelayedButtonProps> = ({ to, delay, children, className }) => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (isClicked) {
            timer = setTimeout(() => {
                navigate(to);
            }, delay);
        }
        return () => clearTimeout(timer);
    }, [isClicked, delay, navigate, to]);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <button onClick={handleClick} disabled={isClicked} className={className}>
           <button className={styles.learn_more}>
              <span className={styles.circle} aria-hidden="true">
                <span className={`${styles.icon} ${styles.arrow}`}></span>
              </span>
              <span className={styles.button_text_two}>{children}</span>
            </button>
            
        </button>
    );
};
export default DelayedButton