interface StatCardProps {
    count: number;
    label: string;
}

const StatCard = ({ count, label }: StatCardProps) => {
    return (
        <div className="bg-card-bg rounded-md p-3 w-40 flex items-center flex-col hover:shadow-md shadow-badge-bg duration-300">
            <p className="text-6xl font-bold text-statCardCol font-display">{count}</p>
            <p className="text-2xl text-subtle-text font-display">{label}</p>
        </div>
    )
}

export default StatCard
