export default class ApiService {
  async getUserData() {
    const userInformations = await fetch('http://localhost:3000/user/12/').then(
      (r) => r.json()
    )
    return userInformations.data
  }

  async getUserActivity() {
    const userActivity = await fetch(
      'http://localhost:3000/user/12/activity'
    ).then((r) => r.json())
    return userActivity.data
  }

  async getUserAverageSessions() {
    const userAverage = await fetch(
      'http://localhost:3000/user/12/average-sessions'
    ).then((r) => r.json())
    return userAverage.data
  }

  async getUserPerformance() {
    const userPerformance = await fetch(
      'http://localhost:3000/user/12/performance'
    ).then((r) => r.json())
    return userPerformance.data
  }
}
