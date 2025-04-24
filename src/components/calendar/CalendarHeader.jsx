import {useCalendar} from "../../contexts/CalendarContext.js";
import styles from "./CalendarHeader.module.css";

const CalendarHeader = ({month}) => {
    const {increaseMonth, decreaseMonth} = useCalendar()

    return (
        <caption style={internalStyles.container}>
        <div style={internalStyles.flexContainer}>
                <button className={styles.button} onClick={() => decreaseMonth()}>&lt;</button>
                <p style={internalStyles.text}>{month.title}</p>
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
        padding: "var(--spacing-xxs)"
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}

export default CalendarHeader