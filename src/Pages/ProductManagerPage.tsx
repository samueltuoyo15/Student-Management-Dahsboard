import Header from '../Components/Header'
import Aside from '../Components/Aside'
import {CiCircleList} from 'react-icons/ci'
function ProductManagerPage(){
  return(
    <>
    <Header />
    <Aside />
   <section className="font-sans select-none w-8/12 z-10 p-6 text-gray-500 text-lg w-full">
    <div>
    <CiCircleList className="inline text-3xl" /> <span className="font-bold text-2xl">Test Info</span>
    </div>
    <div className="block bg-white p-4 w-auto rounded flex justify-between items-center">
    <div><input type="checkbox" className="text-lg mr-3" /><span className="mr-3">QUESTIONS</span><span className="font-bold">33/60</span></div>
    <div>Reorder Questions</div>
   </div>
 </section>

    </>
   )
}

export default ProductManagerPage