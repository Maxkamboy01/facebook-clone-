import "./components/style.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SidebarTop from "./components/SidebarTop";
import SidebarBottom from "./components/SidebarBottom";
import Center from "./components/Center";
import RightSideBar from "./components/RightSideBar";
function App() {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <div className="main-wrapper container">
        <div className="side-bar">
          <SidebarTop />
          <SidebarBottom />
        </div>
        <Center />
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
