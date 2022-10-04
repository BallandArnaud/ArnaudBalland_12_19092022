import mock from '../../__mocks__/mock'

export default class MockService {
  async getUserData() {
    const userData = mock.USER_MAIN_DATA[0]
    return userData
  }

  async getUserActivity() {
    const userActivity = mock.USER_ACTIVITY[0]
    return userActivity
  }

  async getUserAverageSessions() {
    const userAverage = mock.USER_AVERAGE_SESSIONS[0]
    return userAverage
  }

  async getUserPerformance() {
    const userPerformance = mock.USER_PERFORMANCE[0]
    return userPerformance
  }
}
