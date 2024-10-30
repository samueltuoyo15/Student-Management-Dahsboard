import { IoPieChartOutline } from 'react-icons/io5'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '@ramonak/react-progress-bar'

function Dashboard() {
  const scoreData = [
    { label: 'Flowering Plants', completed: 50, maxCompleted: 100, bgColor: 'gold' },
    { label: 'Flowering Plants', completed: 100, maxCompleted: 110, bgColor: 'pink' },
    { label: 'Flowering Plants', completed: 25, maxCompleted: 100, bgColor: '#ffb4b3' },
    { label: 'Flowering Plants', completed: 50, maxCompleted: 100, bgColor: 'lightblue' },
    { label: 'Flowering Plants', completed: 50, maxCompleted: 200, bgColor: 'lightgreen' },
    { label: 'Flowering Plants', completed: 15, maxCompleted: 200, bgColor: 'lightgreen' },
    { label: 'Flowering Plants', completed: 10, maxCompleted: 100, bgColor: 'lightgreen' },
    { label: 'Flowering Plants', completed: 15, maxCompleted: 100, bgColor: 'lightgreen' },
    { label: 'Flowering Plants', completed: 50, maxCompleted: 100, bgColor: '#eaaeae' },
  ]

  return (
    <main className="font-sans select-none fixed left-60 z-10 p-4 text-gray-500 text-lg">
      <IoPieChartOutline className="text-2xl font-bold inline ml-2 mr-2" /> 
      <span className="font-bold text-2xl">Class Performance Statistics</span>
      
      <div className="grid p-4 grid-cols-3 gap-5">
        {/** Circular Progress Bars */}
        {[
          { label: 'Attended', value: 100, color: 'lightgreen' },
          { label: 'Above Avg.', value: 75, color: 'lightgreen' },
          { label: 'Average Score', value: 50, color: 'yellow' },
        ].map((item, index) => (
          <div key={index} className="shadow p-3 bg-white rounded flex justify-evenly">
            <span className="text-gray-700 mr-10">{item.label}</span>
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={item.value} text={`${item.value}%`} styles={{ path: { stroke: item.color }, text: { fill: 'gray' } }} />
            </div>
          </div>
        ))}

        {/** Progress Bars Section */}
        <div className="shadow col-span-full p-3 bg-white rounded">
          <span className="font-bold text-lg text-gray-700">Score per question (9)</span>
          <div className="grid grid-cols-2 gap-5 p-4">
            {scoreData.map((data, index) => (
              <div key={index} className="relative">
                <span className="absolute top-2 left-3">{data.label}</span>
                <ProgressBar
                  transitionDuration="2"
                  customLabel=" "
                  animateOnRender
                  completed={data.completed}
                  maxCompleted={data.maxCompleted}
                  width="400"
                  bgColor={data.bgColor}
                  labelAlignment="right"
                  height="40"
                  labelColor="black"
                  borderRadius="5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
