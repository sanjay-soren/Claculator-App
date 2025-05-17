import styles from "./Button.module.css";
function Button({ onButtonClick }) {
  return (
    <>
      <div className="btn-Containor">
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("AC")}
        >
          AC
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("C")}
        >
          C
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("%")}
        >
          %
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("/")}
        >
          /
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("1")}
        >
          1
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("2")}
        >
          2
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("3")}
        >
          3
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("*")}
        >
          x
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("4")}
        >
          4
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("5")}
        >
          5
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("6")}
        >
          6
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("-")}
        >
          -
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("7")}
        >
          7
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("8")}
        >
          8
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("9")}
        >
          9
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("+")}
        >
          +
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("0")}
        >
          0
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick("00")}
        >
          00
        </button>
        <button
          type="button"
          className={`${styles["btnNum"]} btn btn-light`}
          onClick={() => onButtonClick(".")}
        >
          .
        </button>
        <button
          type="button"
          className={`${styles["operator"]} btn btn-light`}
          onClick={() => onButtonClick("=")}
        >
          =
        </button>
      </div>
    </>
  );
}
export default Button;
