import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import PopularCrypto from './components/PopularCrypto/PopularCrypto';

/*apiKey = 092226BA-3413-4425-BF6C-D9A218614CE8*/

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <PopularCrypto />
      <Footer />
    </div>
  );
}

export default App;
