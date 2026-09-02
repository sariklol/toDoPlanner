export type Status = 'Done' | 'In progress' | 'Failed' | 'Postponed'


export interface Task {
    id: string;
    title: string;
    status: Status;
    date: string;
    description: string;
} 