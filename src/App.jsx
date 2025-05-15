import styles from"./App.module.css";
import Button from "../Components/Button";
import DisplayInputs from "../Components/DisplayInputs";

function App() {
  return (
    <>
    <center>
      <div className={styles.calcontainor}>
          <DisplayInputs/>
          <Button/>
    </div>
    </center>
    </>
  )
}

export default App
