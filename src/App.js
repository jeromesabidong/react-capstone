import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './sections/Footer';
import MainContent from './sections/MainContent';
import Nav from './sections/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full flex flex-col items-center h-screen justify-between'>
        <Nav />
        {/* <MainContent /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
