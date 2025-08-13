import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ModulePage from './pages/ModulePage'
import LessonPage from './pages/LessonPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modules/:slug" element={<ModulePage />} />
        <Route path="/modules/:moduleSlug/lessons/:lessonSlug" element={<LessonPage />} />
      </Routes>
    </div>
  )
}

export default App
