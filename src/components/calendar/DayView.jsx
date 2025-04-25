import AddButton from "./AddButton.jsx";
import {useState} from "react";

const DayView = ({day, currentDay}) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <td style={day.calendarDay ? styles.container : styles.emptyContainer}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p style={currentDay ? styles.dateCurrent : styles.date}>{day.dayNumber}</p>
            {(isHovered && day.calendarDay) && (<AddButton/>)}
        </td>
    )
}

const styles = {
    container: {
        width: '15vw',
        height: '12vw',
        border: '2px solid var(--grey)',
        position: 'relative',
    },
    date: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: 'var(--spacing-xxs)',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-m)',
        color: 'var(--accent2)'
    },
    dateCurrent: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: 'var(--spacing-xxs)',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-m)',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'var(--accent3)'
    },
    emptyContainer: {
        width: '15vw',
        height: '12vw',
        border: '2px solid var(--grey)',
        background: 'repeating-linear-gradient(45deg, var(--grey), var(--grey) 0px 5px, var(--light-grey) 5px 10px)',
    }
}

export default DayView