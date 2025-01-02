import { useEffect, useState } from 'react'
import { IoPieChartOutline } from 'react-icons/io5'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '@ramonak/react-progress-bar'

function Dashboard() {
  const progressData = [
    { label: "Attended", labelTwo: "30/30", targetValue: 100, color: 'lightgreen' },
    { label: "Above Avg.", labelTwo: "22/30", targetValue: 75, color: 'lightgreen' },
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
    <main className="font-sans select-none fixed md:left-60 z-10 p-4 text-gray-500 text-lg">
      <IoPieChartOutline className="text-2xl font-bold inline ml-2 mr-2" />
      <span className="font-bold text-2xl">Class Performance Statistics</span>
      <div className="grid p-4 grid-cols-3 gap-5">
        {progressData.map((item, index) => (
          <div key={item.label} className="shadow p-3 relative bg-white rounded flex justify-evenly">
            <span className="text-gray-700 mr-10">{item.label}</span>
            <div style={{ width: "200px", height: "200px" }}>
              <CircularProgressbar
                value={progressValues[index]} 
                text={`${progressValues[index]}%`} 
                styles={{
                  path: { stroke: item.color },
                  text: { fill: 'gray' }
                }}    />
            </div>
            <span className="absolute bottom-20 right-20">{item.labelTwo}</span>
          </div>
        ))}
        <div className="shadow col-span-full p-3 bg-white rounded">
          <span className="font-bold text-lg text-gray-700">Score per question (9)</span>
          <div className="grid grid-cols-2 gap-5 p-4">
            {[
              { completed: 50, bgColor: "gold", label2: "50%", label3: "15 / 30"},
              { completed: 69, bgColor: "pink", label2: "100%", label3: "15 /30" },
              { completed: 25, bgColor: "#ffb4b3", label2: "25%", label3: "8 / 30" },
              { completed: 50, bgColor: "lightblue", label2: "50%", label3: "15 / 30"},
              { completed: 50, bgColor: "lightgreen", label2: "50", label3: "15 / 30"},
              { completed: 15, bgColor: "lightgreen", label2: "50", label3: "15 / 30"},
              { completed: 10, bgColor: "lightgreen", label2: "10", label3: "3 / 30" },
              { completed: 15, bgColor: "lightgreen", label2: "50", label3: "15 / 30" },
              { completed: 50, bgColor: "#eaaeae", label2: "50", label3: "15 / 30" }
            ].map((bar, index) => (
              <div className="relative flex items-center" key={index}>
                <div className="w-3 h-10 mr-2" style={{backgroundColor: bar.bgColor}}></div>
                <span className="absolute top-2 left-6">Flowering Plants</span>
                 <span className="absolute top-2 right-32">{bar.label2}</span>
                  <span className="absolute top-2 right-16 text-gray-300">{bar.label3}</span>
                 <ProgressBar
                  transitionDuration="2s"
                  customLabel=" "
                  animateOnRender
                  completed={bar.completed}
                  maxCompleted={100}
                  width="400px"
                  baseBgColor="whitesmoke"
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
