import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QuestionBoard } from './components/QuestionBoard/QuestionBoard'
import { Home } from './components/Home/Home'
import Header from './components/Header/Header'
import { TrafficLight } from './components/TrafficLight/TrafficLight'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='questionBoard' element={<QuestionBoard />} />
          <Route path='trafficLight' element={<TrafficLight />} />
          {/* <Route path='pageNotFound' element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
