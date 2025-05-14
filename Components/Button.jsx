import styles from"./Button.module.css";
function Button() {
  return (
    <>
      <div className="btn-Containor">
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            AC
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            C
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            %
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            /
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            1
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            2
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            3
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            x
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            4
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            5
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            6
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            -
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            7
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            8
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            9
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            +
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            0
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            00
        </button>
        <button type="button" className={`${styles["btnNum"]} btn btn-light`}>
            .
        </button>
        <button type="button" className={`${styles["operator"]} btn btn-light`}>
            =
        </button>
      </div>
    </>
  );
}
export default Button;
