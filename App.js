// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import DSA from "./pages/DSA";
import SQLcontent from "./pages/SQLcontent";
import TopInterview from "./pages/TopInterview";
import CodeEditor from "./pages/CodeEditor";
import Code from "./pages/Code";

// ✅ CORRECT PATH: Assuming Navbar.js is in src/components/
import Navbar from "./components/Navbar";

import Profile from "./pages/Profile";

// ✅ CORRECT PATH: Assuming Login.js is in src/pages/
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/CodeEditor" element={<CodeEditor />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/DSAcontent" element={<DSA />} />
        <Route path="/SQLcontent" element={<SQLcontent />} />
        <Route path="/top-interview" element={<TopInterview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} /> {/* The login route */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;