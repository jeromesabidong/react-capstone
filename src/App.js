import './App.css';
import Footer from './sections/Footer';
import Header from './sections/Header';
import MainContent from './sections/MainContent';
import Nav from './sections/Nav';

function App() {
  return (
    <div className='w-full flex flex-col items-center h-screen justify-between'>
      <Nav />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
