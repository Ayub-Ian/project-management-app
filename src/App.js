import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./features/misc/PageNotFound";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import Projects from "./features/projects/components/Projects";
import ProjectDetail from "./features/projects/components/ProjectDetail";
import Header from "./components/layout/Header";

function App() {

   
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))


  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="login" element={<LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="projects" element={<Projects loggedIn={loggedIn} />} />
        <Route path="project/details/:id" element={<ProjectDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
