import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Calendar from "./pages/Calendar"
import PlanOfDay from "./pages/PlanOfDay"
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/plan" element={<PlanOfDay />} />
      </Route>
    </Routes>
  )
}

export default App



// todo - features:
// todo - darkMode;
// todo - internationalization