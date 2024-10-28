import {CiHome, CiSettings, CiFileOn, CiClock2, CiCircleList, CiGrid41} from 'react-icons/ci'
import {LuFileCheck} from 'react-icons/lu'
import {IoPieChartOutline} from 'react-icons/io5'
import {BsBarChart} from 'react-icons/bs'
function Aside(){
  return(
    <aside className="select-none float-left top-26 left-0 h-full w-70 bg-white p-4 text-black shadow text-lg">
     <h2 className="font-bold mb-5 text-lg">Test Configuration</h2>
      <div className="mb-8">
        <CiSettings className="inline mr-3" />
        <span>Basic Settings</span>
      </div>
       <div className="mb-8">
        <CiCircleList className="inline mr-3" />
        <span>Question Manager</span>
      </div>
        <div className="mb-8">
        <CiGrid41 className="inline mr-3 " />
        <span>Question Settings</span>
      </div>
       <div className="mb-8">
        <CiHome className="inline mr-3" />
        <span>Test Start Page</span>
      </div>
       <div className="mb-8">
        <CiClock2 className="inline mr-3" />
        <span>Time Settings</span>
      </div>
        <div className="mb-8">
        <CiFileOn className="inline mr-3" />
        <span>Grading and Summary</span>
      </div>
      <h2 className="font-bold mb-5 text-lg">Test progress and results </h2>
       <div className="mb-8 mt-4">
        <BsBarChart className="inline mr-3" />
        <span>Test Results</span>
      </div>
       <div className="mb-8">
        <LuFileCheck className="inline mr-3" />
        <span>Test Sheets and review</span>
      </div>
        <div className="mb-8 bg-green-300 py-2 px-1 rounded">
        <IoPieChartOutline className="inline mr-3" />
        <span>Statistics</span>
      </div>
    </aside>
   )
}

export default Aside