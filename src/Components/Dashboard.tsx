import Main from '../main';
import {IoPieChartOutline} from 'react-icons/io5'
function Dashboard(){
  return(
    <main className="select-none h-full z-10 bg-gray-100 p-4 text-black text-lg">
      <IoPieChartOutline className="text-2xl font-bold inline ml-2 mr-2" /> 
      <span className="font-bold text-2xl">Class Performance Statistics</span>
      <div className="grid grid-cols-3 gap-5">
        <div className="w-48 shadow p-3 bg-white"></div>
      </div>
    </main>
   )
}

export default Dashboard