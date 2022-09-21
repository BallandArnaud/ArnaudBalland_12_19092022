import Greeting from '../../components/Greeting'
import './index.css'

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <Greeting
          firstname="Thomas"
          motivationalSpeech="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      </div>
    </main>
  )
}

export default Dashboard
