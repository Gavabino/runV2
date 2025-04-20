const CalendarHeader = ({month}) => {
    return (
        <thead style={styles.text}>
        <tr>
            <td>
                <button></button>
                {month.title}
                <button></button>
            </td>
        </tr>
        </thead>
    )
}

const styles = {
    text: {
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-xl)',
        color: 'var(--accent1)',
    }
}

export default CalendarHeader