import Footer from '../home/Footer';
import Header from './Header';
import SearchResults from './SearchResults';

const Recipes = () => {
  return (
    <>
      <Header headerTitle="Recipe Archive" />
      <SearchResults />
      <Footer />
    </>
  );
};

export default Recipes;
