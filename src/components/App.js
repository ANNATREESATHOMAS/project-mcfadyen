import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div className="containerFluid" style={{ overflow: "hidden" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
