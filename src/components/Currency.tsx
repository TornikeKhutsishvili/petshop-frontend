import styles from "../styles/currency.module.css";

const Currency = () => {
  return (
    <>
      <div className={styles.currencySelector}>
        <select name="" id="" title="select">
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="JPY">JPY (¥)</option>
          <option value="AUD">AUD (A$)</option>
        </select>
      </div>
    </>
  );
};

export default Currency;
