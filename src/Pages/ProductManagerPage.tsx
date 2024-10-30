import Header from '../Components/Header'
import Aside from '../Components/Aside'
import {CiCircleList} from 'react-icons/ci'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import {IoMdAdd} from 'react-icons/io'
function ProductManagerPage(){
  return(
    <>
    <Header />
    <Aside />
   <section className="font-sans select-none z-10 p-6 text-gray-500 text-lg ml-64">
    <div>
    <CiCircleList className="inline text-3xl" /> <span className="font-bold text-2xl">Test Info</span>
    </div>
   <div className="block bg-white p-4 w-auto rounded flex justify-between items-center">
    <div><input type="checkbox" className="text-lg mr-3" /><span className="mr-3">QUESTIONS</span><span className="font-bold">33/60</span></div>
    <div><FaArrowUp className="inline mr-1" /><FaArrowDown className="inline mr-2" />Reorder Questions <button className="ml-10 bg-green-500 text-sm p-3 rounded inline text-white"><IoMdAdd className="inline text-lg" />Activate Test</button>
    </div>
   </div>
   
    <div className="mt-5 block bg-white p-4 w-auto rounded flex justify-between items-center">
    <div><input type="checkbox" className="text-lg mr-3" /><span className="mr-3">QUESTIONS</span><span className="font-bold">33/60</span></div>
    <div>Reorder Questions</div>
   </div>
 </section>

    </>
   )
}

export default ProductManagerPage