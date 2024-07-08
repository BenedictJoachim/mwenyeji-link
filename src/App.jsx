import { Routes, Route } from "react-router-dom"
import { BusinessDirectory, BusinessProfile, CommunityForums, EventCalendar, Home, UserDashboard } from "./pages"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directory" element={<BusinessDirectory />} />
      <Route path="/business/:id" element={<BusinessProfile />} />
      <Route path="/events" element={<EventCalendar />} />
      <Route path="/forums" element={<CommunityForums />} />
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
  )
}

export default App
