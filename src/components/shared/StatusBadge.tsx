import type { Status } from "../../types";

interface StatusBadgeProps {
    status: Status;
}

const statusStyles: Record<Status, string> = {
    'Done': 'bg-neon-cyan/20 text-neon-cyan',
    'In progress': 'bg-teal-accent/20 text-teal-accent',
    'Failed': 'bg-subtle-text/10 text-subtle-text',
    'Postponed': 'bg-subtle-text/10 text-subtle-text',
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
    return (
        <span className={`rounded-full px-2 py-1 text-xs font-medium font-display ${statusStyles[status]}`}>
            {status}
        </span>
    )
}

export default StatusBadge