import './App.css'

function App() {

    return (
        <div style={styles.container}>

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
