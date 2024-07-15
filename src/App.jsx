import { Routes, Route } from "react-router-dom";
import { ForumProvider } from "./context/ForumContext";
import { BusinessDirectory, BusinessProfile, CommunityForums, EventCalendar, Home, UserDashboard, SearchPage, NewThread } from "./pages"
import { Footer, Header } from "./components"


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ForumProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<BusinessDirectory />} />
          <Route path="/business/:id" element={<BusinessProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/forums" element={<CommunityForums />} />
          <Route path="/new-thread" element={<NewThread />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
        </ForumProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App

