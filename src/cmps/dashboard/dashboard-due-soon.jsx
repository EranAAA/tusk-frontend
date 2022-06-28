import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


export const DashboardDueSoon = ({ tasks }) => {
  const dueSoons = tasks.filter(
    (task) => task.dueDate && Date.now() - task.dueDate < 1000 * 60 * 60 * 24
  )

  const percentOfComplete = parseInt((dueSoons.length / tasks.length) * 100)


  return (
    <div className="dashboard-due-soon dashboard-side-item">
      <div className='text-container'>
        <h1 className="title">Due soon</h1>
        <h2 className="info">{dueSoons.length} Tasks</h2>
      </div>
      <div className='chart-container'><CircularProgressbar value={percentOfComplete} text={`${percentOfComplete}%`} styles={buildStyles({ pathColor: '#FAC213', textColor: '#FAC213', })} /></div>
    </div>
  )
}
