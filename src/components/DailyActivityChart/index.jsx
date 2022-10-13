import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

/**
 * Create a custom tooltip
 * @param {bool} active - a boolean denoting if a tooltip should be displayed when a user mouses over the chart on desktop
 * @param {array} payload - the data the tooltip will be displaying from the chart
 * @returns CustomTooltip returns a custom tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dailyActivityChart__customTooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }
  return null
}

/**
 * Format the date to get the date
 * @param {string} date - a date. Exemple : 2022-10-01
 * @returns formatDay returns only the day
 */
const formatDay = (date) => {
  return new Date(date).getDate()
}

/**
 * DailyActivityChart display a bar chart based on user activity
 * @param {object} data - The data of the user activity
 * @returns DailyActivityChart returns a bar chart based on user activity
 */
function DailyActivityChart({ data }) {
  return (
    <div className="dailyActivityChart">
      <div className="dailyActivityChart__title">Activité quotidienne</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.sessions}
          barSize={7}
          barGap={8}
          margin={{
            left: 40,
            top: 25,
            right: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="" />
          <XAxis
            dataKey="day"
            tickFormatter={formatDay}
            tickLine={false}
            tickMargin={16}
            tick={{
              stroke: '#9B9EAC',
              fontSize: 14,
              fontWeight: 500,
            }}
          />
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            height={80}
            verticalAlign="top"
            align="right"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

DailyActivityChart.propTypes = {
  data: PropTypes.object,
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

export default DailyActivityChart
