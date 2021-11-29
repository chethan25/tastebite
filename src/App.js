import './styles.css';
import Header from './components/Header.js';
import PopularCategories from './components/PopularCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <PopularCategories />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
