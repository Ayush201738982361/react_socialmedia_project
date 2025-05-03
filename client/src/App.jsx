import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <CreatePost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
