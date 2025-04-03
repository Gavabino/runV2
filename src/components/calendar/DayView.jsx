const DayView = ({day}) => {
    return (
        <td style={day.calendarDay ? styles.container : styles.emptyContainer}>
            <p style={styles.date}>{day.dayNumber}</p>
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
    emptyContainer: {
        width: '15vw',
        height: '12vw',
        border: '2px solid var(--grey)',
        background: 'repeating-linear-gradient(45deg, var(--grey), var(--grey) 0px 5px, var(--light-grey) 5px 10px)',
    }
}

export default DayView