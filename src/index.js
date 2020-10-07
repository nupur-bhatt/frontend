import React from 'react'
import { render } from 'react-dom'
import Plot from './Plot'

const App = () => <div>
  <Plot/>
</div>

render(<App />, document.getElementById('root'))