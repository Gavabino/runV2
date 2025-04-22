import {useCalendar} from "../../contexts/CalendarContext.jsx";
import styles from "./CalendarHeader.module.css";

const CalendarHeader = ({month}) => {
    const {increaseMonth, decreaseMonth} = useCalendar()

    return (
        <caption style={internalStyles.container}>
        <div style={internalStyles.text}>
                <button className={styles.button} onClick={() => decreaseMonth()}>&lt;</button>
                {month.title}
                <button className={styles.button} onClick={() => increaseMonth()}>&gt;</button>
        </div>
        </caption>
    )
}

const internalStyles = {
    container: {
       textAlign: "left"
    },
    text: {
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-xl)',
        color: 'var(--accent1)',
    },
}

export default CalendarHeader