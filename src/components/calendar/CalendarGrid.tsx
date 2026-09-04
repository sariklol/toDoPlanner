import { useState } from "react";

const CalendarGrid = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const today = new Date()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayWeekday = new Date(year, month, 1).getDay()
    const padding = Array.from({ length: firstDayWeekday }, () => null)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const calendarCells: (number | null)[] = [...padding, ...days]
    const weekdayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1))
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1))
    }

    const isToday = (day: number) => {
        return (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        )
    }

    const monthName = currentDate.toLocaleString('default', { month: 'long' })

    return (
        <div className="bg-card-bg rounded-md p-4 mt-18 mx-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="text-main-text font-display text-lg">
                    {monthName} {year}
                </h2>
                <div className="flex gap-2">
                    <button
                        className="p-2 text-subtle-text hover:text-main-text transition-colors cursor-pointer"
                        onClick={handlePrevMonth}
                    >
                        &lt;
                    </button>
                    <button
                        className="p-2 text-subtle-text hover:text-main-text transition-colors cursor-pointer"
                        onClick={handleNextMonth}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {/* Labels */}
            <div className="grid grid-cols-7 text-subtle-text text-xs mb-2">
                {weekdayLabels.map((label) => (
                    <div key={label} className="text-center py-2">
                        {label}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7">
                {calendarCells.map((day: number | null, index: number) => {
                    const todayMatch = day !== null && isToday(day)

                    return (
                        <div key={index} className="text-center py-3 text-main-text border border-subtle-text/10 h-24 flex items-center justify-center">
                            {day !== null ? (
                                <span className={todayMatch ? "bg-neon-cyan text-black font-bold rounded-full w-8 h-8 flex items-center justify-center" : ""}>
                                    {day}
                                </span>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarGrid