import Main from '../main';
import {IoPieChartOutline} from 'react-icons/io5'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from "@ramonak/react-progress-bar"

function Dashboard(){
  return(
    <main className="font-sans select-none fixed left-60 z-10 p-4 text-gray-500 text-lg">
      <IoPieChartOutline className="text-2xl font-bold inline ml-2 mr-2" /> 
      <span className="font-bold text-2xl">Class Performance Statistics</span>
      <div className="grid p-4 grid-cols-3 gap-5">
        <div className="shadow p-3 bg-white rounded flex justify-evenly">
         <span className="text-gray-700 mr-10">Attended</span>
        <div style={{ width: 200, height: 200}}>
       <CircularProgressbar value={100} text="100%" styles={{path: {stroke: 'lightgreen',}, text: {fill: 'gray' },}}/>
       </div>
        </div>
         <div className="shadow p-3 bg-white rounded flex justify-evenly">
         <span className="text-gray-700 mr-10">Above Avg.</span>
        <div style={{ width: 200, height: 200}}>
       <CircularProgressbar value={75} text="75%" styles={{path: {stroke: 'lightgreen',}, text: {fill: 'gray' },}}/>
       </div>
        </div>
         <div className="shadow p-3 bg-white rounded flex justify-evenly">
         <span className="text-gray-700 mr-10">Average Score</span>
        <div style={{ width: 200, height: 200}}>
       <CircularProgressbar value={50} text="50%" styles={{path: {stroke: 'yellow',}, text: {fill: 'gray' },}}/>
       </div>
        </div>
         <div className="shadow col-span-full p-3 bg-white rounded">
         <span className="font-bold text-lg text-gray-700">Score per question (9)</span>
         <div className="grid grid-cols-2 gap-5 p-4">
        <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
        <ProgressBar transitionDuration="2" customLabel=" " animateOnRender completed={50} maxCompleted={100} width={400} bgColor="gold" labelAlignment="right" height={40}labelColor="black" borderRadius={5}/>
         </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
          <ProgressBar completed={100} customLabel=" " value="false" transitionDuration="2" animateOnRender maxCompleted={110} width={400} bgColor="pink" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
        </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
        <ProgressBar transitionDuration="2" customLabel=" " animateOnRender completed={25} maxCompleted={100} width={400} bgColor="#ffb4b3" labelAlignment="right" height={40}labelColor="black" borderRadius={5}/>
         </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
          <ProgressBar completed={50} customLabel=" " value="false" transitionDuration="2" animateOnRender maxCompleted={100} width={400} bgColor="lightblue" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
        </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
        <ProgressBar transitionDuration="2" customLabel=" " animateOnRender completed={50} maxCompleted={200} width={400} bgColor="lightgreen" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
         </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
          <ProgressBar completed={15} customLabel=" " value="false" transitionDuration="2" animateOnRender maxCompleted={200} width={400} bgColor="lightgreen" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
        </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
        <ProgressBar transitionDuration="2" customLabel=" " animateOnRender completed={10} maxCompleted={100} width={400} bgColor="lightgreen" labelAlignment="right" height={40}labelColor="black" borderRadius={5}/>
         </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
          <ProgressBar completed={15} customLabel=" " value="false" transitionDuration="2" animateOnRender maxCompleted={100} width={400} bgColor="lightgreen" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
        </div>
         <div className="relative">
         <span className="absolute top-2 left-3">Flowering Plants</span>
        <ProgressBar transitionDuration="2" customLabel=" " animateOnRender completed={50} maxCompleted={100} width={400} bgColor="#eaaeae" labelAlignment="right" height={40} labelColor="black" borderRadius={5}/>
         </div>
        </div>
      </div>
      </div>
    </main>
   )
}

export default Dashboard


  