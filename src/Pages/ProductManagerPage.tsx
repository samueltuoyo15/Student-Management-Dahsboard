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
    <div className="mb-5">
    <CiCircleList className="inline text-3xl" /> <span className="font-bold text-2xl">Test Info</span>
    </div>
   <div className="block bg-white p-4 w-auto rounded flex justify-between items-center">
    <div><input type="checkbox" className="text-lg mr-3" /><span className="mr-3">QUESTIONS</span><span className="font-bold">33/60</span></div>
    <div><FaArrowUp className="inline mr-1" /><FaArrowDown className="inline mr-2" />Reorder Questions <button className="ml-10 bg-green-500 text-sm p-3 rounded inline text-white"><IoMdAdd className="inline text-lg" />Activate Test</button>
    </div>
   </div>
   
    <div className="mt-5 block bg-white p-4 w-auto rounded">
   <div className="flex justify-between items-center">
    <div><input type="checkbox" className="text-lg mr-3" /><span className="mr-3">Q.1</span></div>
    <div>Topic: <span className="font-bold mr-5"> Farm Tools </span> Type <span className="font-bold mr-5"> Single Choice</span> Points <span className="font-bold mr-5">1</span></div>
    </div>
     <p className="mt-6 line-clamp-2 text-sm font-medium ml-6 block prose prose-sm">
      This is a suspense novel about the main character who accidentally gets a notebook with the various tasks and plans of a mysterious figure.
      The main character starts to decipher the contents of the notebook and found out that it contains mysterious codes and riddles.
    </p>
<ul className="mt-6 ml-7 text-sm font-medium">
  <li className="mb-3">
    <input type="radio" name="answer" /> <span>Answer option 1</span>
  </li>
  <li className="mb-3">
    <input type="radio" name="answer" /> <span>Answer option 2</span>
  </li>
  <li className="mb-3">
    <input type="radio" name="answer" /> <span>Answer option 3</span>
  </li>
  <li className="mb-3">
    <input type="radio" name="answer" /> <span>Answer option 4</span>
  </li>
</ul>

    </div>
 </section>

    </>
   )
}

export default ProductManagerPage
