import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QuestionBoard } from './components/QuestionBoard/QuestionBoard'
import Header from './components/Header/Header'
import { TrafficLight } from './components/TrafficLight/TrafficLight'
import { Accordion } from './components/Accordion/Accordion'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/questionBoard" />} />
          <Route index path='questionBoard' element={<QuestionBoard />} />
          <Route path='trafficLight' element={<TrafficLight />} />
          <Route path='accordion' element={<Accordion />} />
          {/* <Route path='pageNotFound' element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
