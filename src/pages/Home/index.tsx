import { useState } from 'react'
import { classNames } from '~/utils'
import './sideBar.scss'
import { IoIosArrowForward } from 'react-icons/io'
import { RiDashboard2Line } from 'react-icons/ri'
import { GrPlan } from 'react-icons/gr'

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} bg-[rgb(38,90,56)]`}>
      <button
        className=' absolute right-[-15px] bg-[rgb(230,230,230)] top-[28%] rounded-full w-[32px] h-[32px] group duration-500 hover:bg-white hover:duration-500'
        onClick={handleToggleSidebar}
      >
        <IoIosArrowForward
          className={classNames('p-0 mx-auto group-hover:text-lime-500 ', isOpen ? 'rotate-180' : '')}
        />
      </button>
      <nav className='sidebar__nav'>
        <ul className='text-white'>
          <li className={classNames('gap-2 ', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
          </li>
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : 'opacity-100 duration-300')}>overview</span>
          </li>
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>{' '}
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>{' '}
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>{' '}
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>{' '}
          <li className={classNames('gap-2', isOpen ? 'p-0' : 'px-[25px]')}>
            <span className={classNames('', isOpen ? 'mx-auto' : '')}>logo</span>
            <span className={classNames('', isOpen ? 'hidden' : '')}>overview</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HomeScreen
