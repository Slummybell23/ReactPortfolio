import './index.css'
import {Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <div>


        <Routes>
            <Route path="/" element={<MainPage />} />
            {/*<Route path="about" element={<About />} />*/}
        </Routes>





    </div>

  )
}

export default App
