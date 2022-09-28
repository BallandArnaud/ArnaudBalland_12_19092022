import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import './index.css'

/**
 * Create a custom tooltip
 * @param {bool} active - a boolean denoting if a tooltip should be displayed when a user mouses over the chart on desktop
 * @param {array} payload - the data the tooltip will be displaying from the chart
 * @param {number} progression - the current progression of the goal
 * @returns CustomTooltip returns a custom tooltip
 */
const CustomizedLegend = ({ progression }) => {
  return (
    <div className="goalChart__legend">
      <p>
        <span className="goalChart__percentage">{`${progression * 100}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )
}

function GoalChart({ data }) {
  const progression = data.todayScore
  const remainsToBeDone = 1 - progression
  const dataGoal = [
    { name: 'progression', value: progression, color: '#FF0000' },
    { name: 'remainsToBeDone', value: remainsToBeDone, color: '#000000' },
  ]
  // console.log('dataGoal :', dataGoal)
  const COLORS = ['#FF0000', 'transparent']
  const radiusOfTheCircle = 75

  return (
    <div
      className="goalChart"
      style={{
        backgroundColor: '#FBFBFB',
        position: 'relative',
        width: 260,
        height: 260,
        borderRadius: 5,
      }}
    >
      <div className="goalChart__title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          margin={{
            left: 5,
            top: 5,
            right: 5,
            bottom: 5,
          }}
        >
          <circle cx="50%" cy="50%" r={radiusOfTheCircle} fill="#FFFFFF" />
          <Pie
            data={dataGoal}
            dataKey={dataGoal.value}
            fill="#FF0000"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius={radiusOfTheCircle}
            outerRadius={radiusOfTheCircle + 10}
            cornerRadius="100%"
          >
            {dataGoal.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            content={<CustomizedLegend progression={progression} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

GoalChart.propTypes = {
  data: PropTypes.object,
}

CustomizedLegend.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  progression: PropTypes.number,
}

export default GoalChart
