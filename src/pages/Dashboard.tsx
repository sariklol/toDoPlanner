import { useState } from "react";
import StatCard from "../components/dashboard/StatCard"
import TaskTable from "../components/dashboard/TaskTable"
import Topbar from "../components/layout/Topbar"
import AddTaskModal from "../components/shared/AddTaskModal";
import { mockTasks } from "../data/mockTasks"

const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Topbar title='Dashboard' />

      <div className="p-6 flex flex-col gap-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-neon-cyan hover:bg-dark-bg shadow hover:text-neon-cyan hover:[text-shadow:0_0_10px_currentColor,0_0_20px_currentColor] text-dark-bg px-4 py-2 rounded-md font-medium self-end"
        >
          Add task +
        </button>

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

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Dashboard