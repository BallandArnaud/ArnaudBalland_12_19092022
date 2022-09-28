import Mock from '../../__mocks__/mock'
import Greeting from '../../components/Greeting'
import DailyActivityChart from '../../components/DailyActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import GoalChart from '../../components/GoalChart'
import iconCalories from '../../assets/svg/icon-calories.svg'
import iconProteins from '../../assets/svg/icon-proteins.svg'
import iconCarbohydrates from '../../assets/svg/icon-carbohydrates.svg'
import iconLipids from '../../assets/svg/icon-lipids.svg'
import './index.css'
import mock from '../../__mocks__/mock'

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
        <div className="dashboard__nutrients">
          <div className="dashboard__nutrient">
            <div className="dashboard__nutrientIcon dashboard__nutrientIcon--calories">
              <img src={iconCalories} alt="" />
            </div>
            <div className="dashboard__nutrientInformations">
              <p className="dashboard__nutrientQuantity">
                {mock.USER_MAIN_DATA[0].keyData.calorieCount}Cal
              </p>
              <p className="dashboard__nutrientName">Calories</p>
            </div>
          </div>
          <div className="dashboard__nutrient">
            <div className="dashboard__nutrientIcon dashboard__nutrientIcon--proteins">
              <img src={iconProteins} alt="" />
            </div>
            <div className="dashboard__nutrientInformations">
              <p className="dashboard__nutrientQuantity">
                {mock.USER_MAIN_DATA[0].keyData.proteinCount}g
              </p>
              <p className="dashboard__nutrientName">Proteines</p>
            </div>
          </div>
          <div className="dashboard__nutrient">
            <div className="dashboard__nutrientIcon dashboard__nutrientIcon--carbohydrates">
              <img src={iconCarbohydrates} alt="" />
            </div>
            <div className="dashboard__nutrientInformations">
              <p className="dashboard__nutrientQuantity">
                {mock.USER_MAIN_DATA[0].keyData.carbohydrateCount}g
              </p>
              <p className="dashboard__nutrientName">Glucides</p>
            </div>
          </div>
          <div className="dashboard__nutrient">
            <div className="dashboard__nutrientIcon dashboard__nutrientIcon--lipids">
              <img src={iconLipids} alt="" />
            </div>
            <div className="dashboard__nutrientInformations">
              <p className="dashboard__nutrientQuantity">
                {mock.USER_MAIN_DATA[0].keyData.lipidCount}g
              </p>
              <p className="dashboard__nutrientName">Lipides</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
