import { Routes, Route } from 'react-router'
import { HomePage } from './webpage/pages/HomePage.jsx'
export function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

