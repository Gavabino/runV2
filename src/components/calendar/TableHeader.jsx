const TableHeader = () => {
    return (
        <thead>
        <tr style={styles.text}>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
        </thead>
    )
}

const styles = {
    text: {
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-m)',
        color: 'var(--accent2)',
    }
}

export default TableHeader