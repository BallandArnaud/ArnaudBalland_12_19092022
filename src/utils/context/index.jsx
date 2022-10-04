import { createContext } from 'react'
import PropTypes from 'prop-types'
import MockService from '../services/MockService'
import ApiService from '../services/ApiService'

const source = {
  api: new ApiService(),
  mock: new MockService(),
}

export const SourceContext = createContext()

function SourceProvider({ children }) {
  return (
    <SourceContext.Provider value={{ source: source.api }}>
      {children}
    </SourceContext.Provider>
  )
}

SourceProvider.propTypes = {
  children: PropTypes.object,
}

export default SourceProvider
