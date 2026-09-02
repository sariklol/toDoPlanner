import StatCard from "../components/dashboard/StatCard"
import TaskTable from "../components/dashboard/TaskTable"
import Topbar from "../components/layout/Topbar"
import { mockTasks } from "../data/mockTasks"

const Dashboard = () => {

  return (
    <>
      <Topbar title='Dashboard'/>

      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between p-6">
          <StatCard count={3} label="Done" />
          <StatCard count={2} label="In progress" />
          <StatCard count={1} label="Failed" />
          <StatCard count={2} label="Postponed" />
        </div>

        <div className="p-6 flex flex-col gap-6 shadow-2xl shadow-badge-bg rounded-3xl">
          <TaskTable tasks={mockTasks} />
        </div>
      </div>
    </>
  )
}

export default Dashboard