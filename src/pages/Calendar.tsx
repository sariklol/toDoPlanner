import CalendarGrid from "../components/calendar/CalendarGrid";
import Topbar from "../components/layout/Topbar";

const Calendar = () => {
  return (
    <div>
      <Topbar title="Calendar" />

      <CalendarGrid />
    </div>
  )
}

export default Calendar
