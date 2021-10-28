import './App.css';
import TopBar from "./components/TopBar"
import WhatsHappening from "./components/WhatsHappening"
import Feed from "./components/Feed"

function App() {
  return (
    <div className="App">
      <TopBar/>
      <WhatsHappening/>
      <Feed/>
    </div>
  );
}

export default App;
