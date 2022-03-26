import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Courses from "./component/Courses/Courses";
import Faq from "./component/Faq/Faq";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Courses />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
