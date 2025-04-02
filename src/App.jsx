import './App.css'
import {CalendarProvider, useCalendar} from "./contexts/CalendarContext.jsx";

function App() {
    const {getNewMonth} = useCalendar()

    const month = getNewMonth(2025, 4)
    return (
    <>
        <p style={styles.text}>{month.title}</p>
        <p style={styles.text}>{month.uuid}</p>
        {month.days.map(week => (
            <div key={month.days.indexOf(week)}>
                <p>New week</p>
                {week.map(day => (
                    <div key={day.uuid}>{day.date}</div>
                ))}
            </div>
        ))}
    </>
  )
}

const styles = {
    text: {
        color: "var(--accent1)",
        fontFamily: "var(--font-primary)",
        fontSize: "var(--font-m)",
    }
}

export default App
