// import "./assets/style/reset.css";
import "./assets/style/index.scss";
import Header from "./Components/Header";
import Course from "./Components/Course";
import Banner from "./Components/Banner";
import Target from "./Components/Target";
import About from "./Components/About";
import Description from "./Components/Description";
import Lessons from "./Components/Lessons";
import Result from "./Components/Result";
import Author from "./Components/Author";
import Diplomas from "./Components/Diplomas";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Course />
      <Banner />
      <Target />
      <About />
      <Description />
      <Lessons />
      <Result />
      <Author />
      <Diplomas />
      <Footer />
    </div>
  );
}

export default App;
