import { Routes, Route } from "react-router-dom"

import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  return (
    <div className="flex-center w-screen h-screen overflow-hidden bg-muted">
      <div className="relative w-[425px] h-[900px] bg-white">
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/chart/:id" element={<DetailPage />} />
          <Route path="/community/:id" element={<DetailPage />} />
          <Route path="/event/:id" element={<DetailPage />} />
          <Route path="/news/:id" element={<DetailPage />} />
          <Route path="/notice/:id" element={<DetailPage />} />
          <Route path="/store/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
