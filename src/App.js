import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Courses from "./component/Courses/Courses";
import Faq from "./component/Faq/Faq";

function App() {
  return (
    <div>
      <Header />
      <Courses />
      <Faq />
    </div>
  );
}

export default App;
