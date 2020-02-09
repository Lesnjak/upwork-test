import React from 'react'
import ReactDOM from 'react-dom'
// import { Spinner } from './components/shared/spinner'
import { UploadPage } from './pages/upload-page'
import { Demo } from './styles/demo'

console.info(`⚛️ ${React.version}`)

const App = () => (
  <>
    <Demo>
      {/*<Spinner />*/}
      <UploadPage />
    </Demo>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
