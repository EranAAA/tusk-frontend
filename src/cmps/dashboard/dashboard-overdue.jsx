import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const DashboardOverdue = ({ tasks }) => {
  const overdues = tasks.filter(
    (task) => task.dueDate && Date.now() - task.dueDate < 0
  )

  const percentOfComplete = parseInt((overdues.length / tasks.length) * 100)

  return (
    <div className="dashboard-overdue dashboard-side-item">
      <div className='text-container'>
        <h1 className="title">Overdue</h1>
        <h2 className="info">{overdues.length} Tasks</h2>
      </div>
      <div className='chart-container'><CircularProgressbar value={percentOfComplete} text={`${percentOfComplete}%`} styles={buildStyles({ pathColor: '#b04632', textColor: '#b04632', })} /></div>

    </div>
  )
}
