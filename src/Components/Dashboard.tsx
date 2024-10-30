import { useEffect, useState } from 'react'
import { IoPieChartOutline } from 'react-icons/io5'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '@ramonak/react-progress-bar'

function Dashboard() {
  const progressData = [
    { label: "Attended", targetValue: 100, color: 'lightgreen' },
    { label: "Above Avg.", targetValue: 75, color: 'lightgreen' },
    { label: "Average Score", targetValue: 50, color: 'yellow' }
  ]

  const [progressValues, setProgressValues] = useState(progressData.map(() => 0))

  useEffect(() => {
    const intervals = progressData.map((item, index) => {
      let value = 0
      return setInterval(() => {
        value += 1
        setProgressValues(prevValues => {
          const newValues = [...prevValues]
          newValues[index] = value
          return newValues
        })
        if (value >= item.targetValue) clearInterval(intervals[index])
      }, 10)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  return (
    <main className="font-sans select-none fixed left-60 z-10 p-4 text-gray-500 text-lg">
      <IoPieChartOutline className="text-2xl font-bold inline ml-2 mr-2" />
      <span className="font-bold text-2xl">Class Performance Statistics</span>
      <div className="grid p-4 grid-cols-3 gap-5">
        {progressData.map((item, index) => (
          <div key={item.label} className="shadow p-3 bg-white rounded flex justify-evenly">
            <span className="text-gray-700 mr-10">{item.label}</span>
            <div style={{ width: "200px", height: "200px" }}>
              <CircularProgressbar 
                value={progressValues[index]} 
                text={`${progressValues[index]}%`} 
                styles={{
                  path: { stroke: item.color },
                  text: { fill: 'gray' }
                }} 
              />
            </div>
          </div>
        ))}
        <div className="shadow col-span-full p-3 bg-white rounded">
          <span className="font-bold text-lg text-gray-700">Score per question (9)</span>
          <div className="grid grid-cols-2 gap-5 p-4">
            {[
              { completed: 50, bgColor: "gold" },
              { completed: 100, bgColor: "pink" },
              { completed: 25, bgColor: "#ffb4b3" },
              { completed: 50, bgColor: "lightblue" },
              { completed: 50, bgColor: "lightgreen" },
              { completed: 15, bgColor: "lightgreen" },
              { completed: 10, bgColor: "lightgreen" },
              { completed: 15, bgColor: "lightgreen" },
              { completed: 50, bgColor: "#eaaeae" }
            ].map((bar, index) => (
              <div className="relative" key={index}>
                <span className="absolute top-2 left-3">Flowering Plants</span>
                <ProgressBar
                  transitionDuration="2s"
                  customLabel=" "
                  animateOnRender
                  completed={bar.completed}
                  maxCompleted={100}
                  width="400px"
                  bgColor={bar.bgColor}
                  labelAlignment="right"
                  height="40px"
                  labelColor="black"
                  borderRadius="5px"
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
