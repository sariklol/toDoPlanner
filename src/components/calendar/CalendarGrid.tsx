import { useState } from "react";
import { mockTasks } from "../../data/mockTasks";
import StatusBadge from "../shared/StatusBadge";

const formatDateISO = (year: number, month: number, day: number): string => {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
};

const CalendarGrid = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
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
        setSelectedDay(null)
        setCurrentDate(new Date(year, month - 1, 1))
    }

    const handleNextMonth = () => {
        setSelectedDay(null)
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

    const tasksForSelectedDay = selectedDay
      ? mockTasks.filter((task) => task.date === formatDateISO(year, month, selectedDay))
      : [];

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
                    const isSelected = day !== null && day === selectedDay

                    return (
                        <div 
                          key={index} 
                          onClick={() => day !== null && setSelectedDay(day)}
                          className={`text-center py-3 text-main-text border border-subtle-text/10 h-24 flex items-center justify-center transition-colors ${
                            day !== null ? "cursor-pointer hover:bg-subtle-text/5" : ""
                          } ${isSelected ? "bg-subtle-text/10" : ""}`}
                        >
                            {day !== null ? (
                                <span className={todayMatch ? "bg-neon-cyan text-black font-bold rounded-full w-8 h-8 flex items-center justify-center" : ""}>
                                    {day}
                                </span>
                            ) : null}
                        </div>
                    )
                })}
            </div>

            {/* STEP 7: Conditional Task Popover */}
            {selectedDay && (
              <div className="mt-4 bg-dark-bg rounded-lg p-4 border border-subtle-text/10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-main-text font-medium text-sm">
                    {monthName} {selectedDay}, {year} — {tasksForSelectedDay.length} task(s)
                  </h3>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-subtle-text hover:text-main-text transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {tasksForSelectedDay.length === 0 ? (
                  <p className="text-subtle-text text-xs">No tasks for this day.</p>
                ) : (
                  <div className="space-y-2">
                    {tasksForSelectedDay.map((task) => (
                      <div
                        key={task.id}
                        className="flex justify-between items-center py-2 border-t border-subtle-text/10"
                      >
                        <span className="text-main-text text-sm">{task.title}</span>
                        <StatusBadge status={task.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
        </div>
    )
}

export default CalendarGrid