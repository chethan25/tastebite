import './styles.css';
import Header from './components/Header.js';
import PopularCategories from './components/PopularCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import RandomRecipe from './components/RandomRecipe';

function App() {
  return (
    <>
      <Header />
      <PopularCategories />
      <RandomRecipe />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
