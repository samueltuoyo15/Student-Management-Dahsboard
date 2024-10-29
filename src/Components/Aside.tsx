import {CiHome, CiSettings, CiFileOn, CiClock2, CiCircleList, CiGrid41} from 'react-icons/ci'
import {LuFileCheck} from 'react-icons/lu'
import {IoPieChartOutline} from 'react-icons/io5'
import {BsBarChart} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
function Aside(){
  return(
    <aside className="select-none fixed top-26 left-0 h-full w-62 bg-white p-4 shadow text-gray-500 text-lg">
     <h2 className="font-bold mb-5 text-lg">Test Configuration</h2>
      <NavLink className="block mb-8">
        <CiSettings className="inline mr-3" />
        <span>Basic Settings</span>
      </NavLink>
       <NavLink to="/ProductManagerPage" className="block mb-8">
        <CiCircleList className="inline mr-3" />
        <span>Question Manager</span>
      </NavLink>
        <NavLink className="block mb-8">
        <CiGrid41 className="inline mr-3 " />
        <span>Question Settings</span>
      </NavLink>
       <NavLink className="block mb-8">
        <CiHome className="inline mr-3" />
        <span>Test Start Page</span>
      </NavLink>
       <NavLink className="block mb-8">
        <CiClock2 className="inline mr-3" />
        <span>Time Settings</span>
      </NavLink>
        <NavLink className="block mb-8">
        <CiFileOn className="inline mr-3" />
        <span>Grading and Summary</span>
      </NavLink>
      <h2 className="font-bold mb-5 text-lg">Test progress and results </h2>
       <NavLink className="block mb-8 mt-4">
        <BsBarChart className="inline mr-3" />
        <span>Test Results</span>
      </NavLink>
       <NavLink className="block mb-8">
        <LuFileCheck className="inline mr-3" />
        <span>Test Sheets and review</span>
      </NavLink>
        <NavLink to="/" className="block mb-8 bg-green-100 py-2 px-1 rounded">
        <IoPieChartOutline className="inline mr-3" />
        <span>Statistics</span>
      </NavLink>
    </aside>
   )
}

export default Aside