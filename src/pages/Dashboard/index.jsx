import Mock from '../../__mocks__/mock'
import Greeting from '../../components/Greeting'
import DailyActivityChart from '../../components/DailyActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import './index.css'
import PerformanceChart from '../../components/PerformanceChart'
import GoalChart from '../../components/GoalChart'

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <Greeting
          firstname="Thomas"
          motivationalSpeech="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      </div>
      <div className="dashboard__content">
        <div className="dashboard__charts">
          <div className="dashboard__row">
            <DailyActivityChart data={Mock.USER_ACTIVITY[0]} />
          </div>
          <div className="dashboard__row">
            <AverageSessionsChart data={Mock.USER_AVERAGE_SESSIONS[0]} />
            <PerformanceChart data={Mock.USER_PERFORMANCE[0]} />
            <GoalChart data={Mock.USER_MAIN_DATA[0]} />
          </div>
        </div>
        <div className="dashboard__nutrients"></div>
      </div>
    </main>
  )
}

export default Dashboard
