import {useCalendar} from "../../contexts/CalendarContext.jsx";
import CalendarContainer from "./CalendarContainer.jsx";

const Calendar = () => {
    const {getNewMonth} = useCalendar()

    const month = getNewMonth(2025, 4)
    return (
        <table>
            <CalendarContainer month={month} />
        </table>
    )
}

const styles = {
    table: {
        borderCollapse: 'collapse',
    }
}

export default Calendar