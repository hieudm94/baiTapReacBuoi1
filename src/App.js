import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import CarouselComponent from './Components/CarouselComponent/CarouselComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <CarouselComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
