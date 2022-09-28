import Mock from '../../__mocks__/mock'
import Greeting from '../../components/Greeting'
import DailyActivityChart from '../../components/DailyActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import GoalChart from '../../components/GoalChart'
import NutrientCard from '../../components/NutrientCard'
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
          <NutrientCard
            data={mock.USER_MAIN_DATA[0].keyData.calorieCount}
            name="Calories"
            className="nutrient__icon--calories"
            icon={iconCalories}
          />
          <NutrientCard
            data={mock.USER_MAIN_DATA[0].keyData.proteinCount}
            name="Proteines"
            className="nutrient__icon--proteins"
            icon={iconProteins}
          />
          <NutrientCard
            data={mock.USER_MAIN_DATA[0].keyData.carbohydrateCount}
            name="Glucides"
            className="nutrient__icon--carbohydrates"
            icon={iconCarbohydrates}
          />
          <NutrientCard
            data={mock.USER_MAIN_DATA[0].keyData.lipidCount}
            name="Lipides"
            className="nutrient__icon--lipids"
            icon={iconLipids}
          />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
