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
  const redirectToRegistration = () => {
    window.location.href = 'https://ad-astra-school.kwiga.com/courses/english-with-eddie';
  };

  return (
    <div className="App">
      <Header redirectToRegistration={redirectToRegistration}/>
      <Course redirectToRegistration={redirectToRegistration}/>
      <Banner />
      <Target />
      <About redirectToRegistration={redirectToRegistration}/>
      <Description />
      <Lessons />
      <Result redirectToRegistration={redirectToRegistration}/>
      <Author />
      <Diplomas />
      <Footer redirectToRegistration={redirectToRegistration}/>
    </div>
  );
}

export default App;
