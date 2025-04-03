const CalendarHeader = ({month}) => {
    return (
        <thead style={styles.text}>
        {month.title}
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