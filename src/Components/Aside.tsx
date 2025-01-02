import { CiHome, CiSettings, CiFileOn, CiClock2, CiCircleList, CiGrid41 } from 'react-icons/ci'
import { LuFileCheck } from 'react-icons/lu'
import { IoPieChartOutline } from 'react-icons/io5'
import { BsBarChart } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function Aside() {
  const navLinks = [
    { to: '#', icon: CiSettings, label: 'Basic Settings' },
    { to: '/ProductManagerPage', icon: CiCircleList, label: 'Question Manager' },
    { to: '#', icon: CiGrid41, label: 'Question Settings' },
    { to: '#', icon: CiHome, label: 'Test Start Page' },
    { to: '#', icon: CiClock2, label: 'Time Settings' },
    { to: '#', icon: CiFileOn, label: 'Grading and Summary' },
    { sectionTitle: 'Test progress and results', extraClass: 'mt-5' },
    { to: '#', icon: BsBarChart, label: 'Test Results', extraClass: 'mt-4' },
    { to: '#', icon: LuFileCheck, label: 'Test Sheets and review' },
    { to: '/', icon: IoPieChartOutline, label: 'Statistics' },
  ]

  return (
    <aside className="hidden md:fixed font-sans select-none w-64 h-full bg-white p-4 shadow text-gray-500 text-lg">
      <h2 className="font-bold mb-5 text-lg">Test Configuration</h2>
      {navLinks.map((link, index) =>
        link.sectionTitle ? (
          <h2 key={index} className={`font-bold mb-5 text-lg ${link.extraClass || ''}`}>{link.sectionTitle}</h2>
        ) : (
          <NavLink
            key={index}
            to={link.to as string}
            className={({ isActive }) =>
              `block rounded hover:bg-green-100 ${isActive && link.to !== '#' ? 'bg-green-100 p-2' : 'py-2 px-1'}`
            }
            onClick={(e) => link.to === '#' && e.preventDefault()}
          >
            {link.icon && <link.icon className="inline mr-3" />}
            <span>{link.label}</span>
          </NavLink>
        )
      )}
    </aside>
  )
}

export default Aside
