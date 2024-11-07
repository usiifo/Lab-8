import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import URLShrinking from './components/URLShrinking.js';
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="container">
      <Header />
      <URLShrinking/>
      <Footer year={2024} />
    </div>
  );
}

export default App;
