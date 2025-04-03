import {useCalendar} from "../../contexts/CalendarContext.jsx";
import CalendarContainer from "./CalendarContainer.jsx";
import CalendarHeader from "./CalendarHeader.jsx";
import TableHeader from "./TableHeader.jsx";

const Calendar = () => {
    const {getNewMonth} = useCalendar()

    const month = getNewMonth(2025, 4)
    return (
        <table style={styles.table}>
            <CalendarHeader month={month}/>
            <TableHeader />
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