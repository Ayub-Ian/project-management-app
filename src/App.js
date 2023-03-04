import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./features/misc/PageNotFound";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import ProjectList from "./features/projects/components/ProjectList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="projects" element={<ProjectList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
