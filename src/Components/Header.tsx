import {FaArrowLeft, FaPlay} from 'react-icons/fa'
import {GrCircleInformation} from 'react-icons/gr'
import {GoEye} from 'react-icons/go'
function Header(){
  return(
    <header className="font-sans w-full select-none z-10 bg-white p-4 text-gray-500 flex justify-between items-center shadow text-lg">
      <div>
        <FaArrowLeft className="inline mr-2" /> <span className="mr-20">Assessment</span>
        <span className="mr-5 font-bold">Primary 1.</span>
        <span className="mr-5 font-bold">Mid Term Test .</span>
        <span className="mr-5 font-bold">Agricultural Science</span>
      </div>
      <div>
       <span className="mr-5"> <GrCircleInformation className="inline mr-2" />Test Info</span>
       <span className="mr-5"><GoEye className="inline mr-2" />Test Preview</span>
       <button className="bg-green-500 text-sm p-3 rounded inline text-white"><FaPlay className="inline mr-3 text-lg" />Activate Test</button>
     </div>
    </header>
   )
}

export default Header