import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import EmbajadorPage from './pages/EmbajadorPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/embajador' element={<EmbajadorPage></EmbajadorPage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
