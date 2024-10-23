import Header from "../component/header";
import Footer from "../component/footer";
import Main from "./main/page";
import About from "./about/page";
import Mainfocus from "./main-focus/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <About />
      <Mainfocus />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
    