import './App.css'
import UserPanel from "./components/UserPanel.tsx";
import {Route, Routes} from "react-router";
import {LoginForm} from "./components/LoginForm.tsx";

function App() {

  return (
    <>
      <div>
        <h1>System do zapisów na zajęcia</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/welcome" element={<UserPanel />} />
        </Routes>
      </div>
      </>
  )
}

export default App
