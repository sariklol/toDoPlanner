import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/list-checks.svg'

const Sidebar = () => {
    return (
        <div className="bg-card-bg w-64 h-screen px-6 py-3">
            <div className="flex items-center gap-4 mb-4">
                <img src={logo} alt="logo" className='w-12 bg-badge-bg rounded-md' />
                <div className="flex flex-col gap-1">
                    <h2 className="font-display text-main-text">ToDoPlanner</h2>
                    <h3 className="font-display text-subtle-text">Web-app</h3>
                </div>
            </div>

            <NavLink to={'/'} className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:[text-shadow:0_0_10px_currentColor,0_0_20px_currentColor] ${isActive ? 'bg-teal-accent/20 text-neon-cyan' : 'text-subtle-text'}`
            }>
                Dashboard
            </NavLink>
            <NavLink to={'/calendar'} className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:[text-shadow:0_0_10px_currentColor,0_0_20px_currentColor] ${isActive ? 'bg-teal-accent/20 text-neon-cyan' : 'text-subtle-text'}`
            }>
                Calendar
            </NavLink>
            <NavLink to={'/plan'} className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:[text-shadow:0_0_10px_currentColor,0_0_20px_currentColor] ${isActive ? 'bg-teal-accent/20 text-neon-cyan' : 'text-subtle-text'}`
            }>
                Plan of Day
            </NavLink>
        </div>
    )
}

export default Sidebar
