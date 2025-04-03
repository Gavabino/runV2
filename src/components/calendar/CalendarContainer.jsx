import CalendarRow from "./CalendarRow.jsx";

const CalendarContainer = ({month}) => {
    return (
        <tbody style={styles.container}>
        {month.days.map((week) => (
            <CalendarRow key={month.days.indexOf(week)} week={week} />
        ))}
        </tbody>
    )
}

const styles = {
    container: {
        width: "100vw",
    }
}

export default CalendarContainer