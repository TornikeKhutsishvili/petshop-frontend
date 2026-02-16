import type { AppDispatch } from "../store";
import {
  currencySelector,
  setCurrency,
  type CurrencyType,
} from "../store/currency/currency.slice";
import styles from "../styles/currency.module.css";
import { useDispatch, useSelector } from "react-redux";

const Currency = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector(currencySelector);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value as CurrencyType));
  };

  return (
    <>
      <div className={styles.currencySelector}>
        <select
          name=""
          id=""
          title="select"
          onChange={handleChange}
          value={currency}
        >
          <option value="usd">USD ($)</option>
          <option value="eur">EUR (€)</option>
          <option value="gbp">GBP (£)</option>
          <option value="jpy">JPY (¥)</option>
          <option value="aud">AUD (A$)</option>
        </select>
      </div>
    </>
  );
};

export default Currency;
