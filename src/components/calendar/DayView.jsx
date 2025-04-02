const DayView = ({day}) => {
    return (
        <td style={day.calendarDay ? styles.container : styles.emptyContainer}>

        </td>
    )
}

const styles = {
    container: {
        width: '15vw',
        height: '12vw',
        border: '2px solid black',
    },
    emptyContainer: {
        width: '15vw',
        height: '12vw',
        border: '2px solid black',
        background: 'repeating-linear-gradient(45deg, var(--grey), var(--grey) 0px 5px, var(--light-grey) 5px 10px)',
    }
}

export default DayView