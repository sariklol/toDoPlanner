import { useState } from "react";
import type { Status } from "../../types";

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const statuses: Status[] = ['Done', 'In progress', 'Failed', 'Postponed'];

const AddTaskModal = ({ isOpen, onClose }: AddTaskModalProps) => {
    const [selectedStatus, setSelectedStatus] = useState<Status>('In progress');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-card-bg rounded-lg p-6 w-full max-w-md border border-subtle-text/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-subtle-text/10 pb-3">
                    <h2 className="text-main-text text-lg font-semibold font-display">
                        Add a Task
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-subtle-text hover:text-main-text transition-colors text-xl font-bold cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-subtle-text text-xs mb-1">Task Name</label>
                        <input
                            type="text"
                            placeholder="Add a name for the task"
                            className="w-full bg-dark-bg border border-subtle-text/20 rounded p-2 text-main-text text-sm focus:outline-none focus:border-neon-cyan"
                        />
                    </div>

                    <div>
                        <label className="block text-subtle-text text-xs mb-1">Date</label>
                        <input
                            type="date"
                            className="w-full bg-dark-bg border border-subtle-text/20 rounded p-2 text-main-text text-sm focus:outline-none focus:border-neon-cyan"
                        />
                    </div>

                    <div>
                        <label className="block text-subtle-text text-xs mb-2">Status</label>
                        <div className="flex flex-wrap gap-2">
                            {statuses.map((status) => (
                                <button
                                    key={status}
                                    type="button"
                                    onClick={() => setSelectedStatus(status)}
                                    className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${selectedStatus === status
                                        ? 'bg-neon-cyan text-dark-bg font-medium'
                                        : 'bg-dark-bg text-subtle-text hover:text-main-text'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-subtle-text text-xs mb-1">Description</label>
                        <textarea
                            rows={3}
                            placeholder="Add task details..."
                            className="w-full bg-dark-bg border border-subtle-text/20 rounded p-2 text-main-text text-sm focus:outline-none focus:border-neon-cyan resize-none"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-subtle-text/10">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded text-sm text-subtle-text hover:text-main-text transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 rounded text-sm bg-neon-cyan text-dark-bg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        + Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;