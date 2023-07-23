import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.grid}>
      <ProgressBar
        height="120"
        width="120"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="rgba(11, 63, 235, 0.4)"
        barColor="rgb(197, 3, 155)"
      />
    </div>
  );
};

export default Loader;
