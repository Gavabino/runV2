import DayView from "./DayView.jsx";
import moment from "moment";

const CalendarRow = ({week}) => {
    const currentDay = moment().format("MM/DD/YYYY");
    return (
        <tr style={styles.container}>
            {week.map((day) => (
                <DayView day={day} key={day.uuid} currentDay={currentDay === day.date} />
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
