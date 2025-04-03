import './App.css'
import Calendar from "./components/calendar/Calendar.jsx";

function App() {

    return (
        <div style={styles.container}>
            <Calendar/>
        </div>
  )
}

const styles = {
    text: {
        color: "var(--accent1)",
        fontFamily: "var(--font-primary)",
        fontSize: "var(--font-m)",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}

export default App
