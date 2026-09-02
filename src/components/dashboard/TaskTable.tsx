import type { Task } from "../../types"
import StatusBadge from "../shared/StatusBadge";

interface taskTableProps {
    tasks: Task[];
}

const TaskTable = ({ tasks }: taskTableProps) => {

    return (
        <div className="bg-card-bg rounded-3xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 text-subtle-text text-sm">
                <span>Status</span>
                <span>Title</span>
                <span>Publish date</span>
            </div>

            {tasks.map((task) => (
                <div key={task.id} className="flex justify-between px-4 py-3 text-main-text border-t border-subtle-text/10">
                    <StatusBadge status={task.status} />
                    <span>{task.title}</span>
                    <span className="text-subtle-text text-sm">{task.date}</span>
                </div>
            ))}
        </div>
    )
}

export default TaskTable