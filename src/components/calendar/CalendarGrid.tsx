
const CalendarGrid = () => {
    const year = 2026
    const month = 6

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayWeekday = new Date(year, month, 1).getDate()
    const padding = Array.from({ length: firstDayWeekday }, () => null)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const calendarCells = [...padding, ...days]
    const weekdayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


    return (
        <div className="bg-card-bg rounded-md p-4">
            <div className="grid grid-cols-7 text-subtle-text text-xs mb-2">
                {weekdayLabels.map((label) => (
                    <div key={label} className="text-center py-2">{label}</div>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {calendarCells.map((day, index) => (
                    <div key={index} className="text-center py-3 text-main-text">
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarGrid
