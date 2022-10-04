import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'

const translatedKindText = {
  1: 'cardio',
  2: 'energie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité',
}

// Format Perfomance - remplace kind:1 -> kind: 'cardio'
const formatPerfomance = (data) => {
  return data.data.map((d) => ({
    ...d,
    kind: translatedKindText[d.kind],
  }))
}

/**
 * PerformanceChart display a radar chart based on user performances
 * @param {object} data - The data of the user performances
 * @returns PerformanceChart returns a radar chart based on user performances
 */
function PerformanceChart({ data }) {
  const formattedData = formatPerfomance(data)

  return (
    <div
      className="performanceChart"
      style={{
        backgroundColor: '#282D30',
        position: 'relative',
        width: 260,
        height: 260,
        borderRadius: 5,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formattedData}
          fill="#FFFFFF"
          outerRadius={80}
          startAngle={30}
          endAngle={-330}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          <PolarRadiusAxis
            domain={[0, 'dataMax + 20']}
            axisLine={false}
            tick={false}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="none"
            fill="#FF0101"
            fillOpacity={0.7}
            animationEasing={'ease-out'}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.object,
}

export default PerformanceChart
