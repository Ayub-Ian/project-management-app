import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./features/misc/PageNotFound";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import Projects from "./features/projects/components/Projects";
import ProjectDetail from "./features/projects/components/ProjectDetail";

function App() {

   
  const [currentUser, setCurrentUser] = useState(null)

  const updateUser = (user) => {
    setCurrentUser(user)
  }



  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginForm updateUser={updateUser} />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="projects" element={<Projects user={currentUser} />} />
        <Route path="project/details/:id" element={<ProjectDetail user={currentUser} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
