// import logo from './assets/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RobustBinaryProvider } from "./context/Context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <RobustBinaryProvider className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </RobustBinaryProvider>
  );
}

export default App;