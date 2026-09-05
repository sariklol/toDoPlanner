import { useState } from "react";
import type { Status } from "../types";
import { mockTasks } from "../data/mockTasks";
import StatusBadge from "../components/shared/StatusBadge";
import Topbar from "../components/layout/Topbar";

const filters: (Status | 'All')[] = ['All', 'Done', 'Failed', 'In progress', 'Postponed']

const PlanOfDay = () => {
  const [activeFilter, setActiveFilter] = useState<Status | 'All'>('All')

  const filteredTasks = activeFilter === 'All'
    ? mockTasks
    : mockTasks.filter((task) => task.status === activeFilter)

  return (
    <>
      <Topbar title="Plan of Day" />
      <div className="m-8 flex flex-col gap-6">
        {/* Filter tab */}
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-sm ${activeFilter === filter
                ? 'bg-neon-cyan text-dark-bg'
                : 'bg-card-bg text-subtle-text'
                }`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Task list */}

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-card-bg rounded-lg border border-subtle-text/10 flex items-center justify-between">
              <div>
                <h3 className="text-main-text font-medium">{task.title}</h3>
                <p className="text-subtle-text text-sm">{task.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-subtle-text text-xs">{task.date}</span>

                <StatusBadge status={task.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PlanOfDay
