import DayView from "./DayView.jsx";

const CalendarRow = ({week}) => {
    return (
        <tr style={styles.container}>
            {week.map((day) => (
                <DayView day={day} key={day.uuid} />
            ))}
        </tr>
    )
}

const styles = {
    container: {
        width: "100%",
        height: "25%",
    }
}

export default CalendarRow
