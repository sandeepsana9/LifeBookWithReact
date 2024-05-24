import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

// react js
import NavigationReact from "./pages/react/Navigation";
import IntroductionReact from "./pages/react/Introduction";

// css
import NavigationCss from "./pages/css/Navigation";
import IntroductionCss from "./pages/css/Introduction";
import DisplayCss from "./pages/css/Display";
import CreateReactApp from "./pages/react/CreateReactApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reactjs/" element={<NavigationReact />} >
            <Route path="introduction" element={<IntroductionReact />} />
            <Route path="create-react-app" element={<CreateReactApp />} />
          </Route>
          <Route path="css/" element={<NavigationCss />} >
            <Route path="introduction" element={<IntroductionCss />} />
            <Route path="display" element={<DisplayCss />} />
          </Route>






          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
