import './index.css'
import iconYoga from '../../assets/svg/icon-yoga.svg'
import iconSwim from '../../assets/svg/icon-swim.svg'
import iconBicycle from '../../assets/svg/icon-bicycle.svg'
import iconDumbbel from '../../assets/svg/icon-dumbbel.svg'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__icons">
        <div className="sidebar__icon">
          <img src={iconYoga} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconSwim} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconBicycle} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconDumbbel} alt="" />
        </div>
      </div>
      <p className="sidebar__copyright">Copyright, SportSee 2020</p>
    </div>
  )
}

export default Sidebar
