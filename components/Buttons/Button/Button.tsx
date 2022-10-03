import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  title: string;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, width, loading, padding, noIcon, onClick }) => {
  return (
    <button
      className={`${styles.button} ease group ${width ? width : 'w-auto'} ${padding}`}
      onClick={onClick}
    >
      <span className={`${styles.buttonBottomShadow} ease-out group-hover:translate-x-0`}></span>
      <span className={`${styles.buttonTopShadow} ease-out group-hover:translate-x-0`}></span>

      <span className={styles.buttonIconContainer}>
        {noIcon && (
          <svg
            className={styles.buttonIcon}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 10V3L4 14h7v7l9-11h-7z'
            ></path>
          </svg>
        )}
        {loading ? 'Loading...' : title}
      </span>
    </button>
  );
};
export default Button;
