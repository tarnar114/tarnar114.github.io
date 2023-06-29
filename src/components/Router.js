import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDesc from "../pages/ProjectDesc";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route
        loader={({ params }) => {
          console.log(params); // "hotspur"
        }}
        path="/projects/:projID"
        element={<ProjectDesc />}
      />
    </Routes>
  );
};

export default Router;
