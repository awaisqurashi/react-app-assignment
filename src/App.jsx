import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import "./app.css"
import Content from './components/Content'

function App() {
  return (
    <>
      <div>
        <div id="header">Welcome to React App</div>
        
      </div>
      <div>
        <Navbar />
        <Content/>
        <Footer />
      </div>
    </>
  );
}

export default App;
