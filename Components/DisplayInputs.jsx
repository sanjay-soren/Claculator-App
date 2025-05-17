import styles from "./DisplayInputs.module.css";
function DisplayInputs({ displayValue }) {
  return (
    <>
      <input
        className={styles.DisInput}
        type="text"
        value={displayValue}
        readOnly
      />
    </>
  );
}
export default DisplayInputs;
