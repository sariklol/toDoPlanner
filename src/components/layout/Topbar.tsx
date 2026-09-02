import setSettings from '../../assets/images/settings.svg'
import setBell from '../../assets/images/bell.svg'

export interface TopbarProps {
  title: string;
}

const Topbar = ({ title }: TopbarProps) => {

  return (
    <div className="flex items-center justify-between py-3 bg-card-bg shadow-shadlol w-300 px-8">
      <a href="#" className="text-neon-cyan [text-shadow:0_0_10px_currentColor,0_0_20px_currentColor] font-display text-2xl">{title}</a>

      <div className="flex items-center gap-6">
        <a href="#" className=' bg-badge-bg rounded-md p-1 shadow hover:shadow-hoverShad hover:bg-neon-cyan transition-colors'><img src={setSettings} alt="icon" className='w-6 h-6' /></a>
        <a href="#" className='bg-badge-bg rounded-md p-1 shadow hover:shadow-hoverShad hover:bg-neon-cyan transition-colors'><img src={setBell} alt="icon" className='w-6 h-6' /></a>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-start">
            <h2 className='font-display text-main-text'>Hi, Sarik</h2>
            <span className='font-display text-subtle-text font-thin cursor-pointer hover:text-red-600 transition-[0.3s]'>Logout</span>
          </div>
          {/* <img src="#" alt="Pfp" className='w-12 h-12 flex items-center justify-center bg-neon-cyan rounded-full' /> */}
          <div className="w-12 h-12 flex items-center justify-center bg-neon-cyan rounded-full text-dark-bg font-bold">
            S
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
