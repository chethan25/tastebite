import PastaIcon from '../../assets/icons/pasta.png';
import VeganIcon from '../../assets/icons/vegan.png';
import SeafoodIcon from '../../assets/icons/seafood.svg';
import StarterIcon from '../../assets/icons/starter.png';
import ChickenIcon from '../../assets/icons/chicken.svg';
import DessertIcon from '../../assets/icons/dessert.png';
import BreakfastIcon from '../../assets/icons/breakfast.svg';
import VegetarianIcon from '../../assets/icons/vegetarian.svg';

import './popular-categories.css';

const PopularCategories = () => {
  return (
    <>
      <section id="categories-section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories">
          <div className="category breakfast">
            <img
              className="categories-icon"
              src={BreakfastIcon}
              alt="breakfast"
            ></img>
            <h4 className="categoreis-title">Breakfast</h4>
            <div>
              <p className="categories-count">7 Recipes</p>
            </div>
          </div>
          <div className="category vegetarian">
            <img
              className="categories-icon"
              src={VegetarianIcon}
              alt="vegetarian"
            ></img>
            <h4 className="categoreis-title">Vegetarian</h4>
            <div>
              <p className="categories-count">32 Recipes</p>
            </div>
          </div>
          <div className="category seafood">
            <img
              className="categories-icon"
              src={SeafoodIcon}
              alt="seafood"
            ></img>
            <h4 className="categoreis-title">Seafood</h4>
            <div>
              <p className="categories-count">27 Recipes</p>
            </div>
          </div>
          <div className="category starter">
            <img
              className="categories-icon"
              src={StarterIcon}
              alt="starter"
            ></img>
            <h4 className="categoreis-title">Starter</h4>
            <div>
              <p className="categories-count">4 Recipes</p>
            </div>
          </div>
          <div className="category chicken">
            <img
              className="categories-icon"
              src={ChickenIcon}
              alt="chicken"
            ></img>
            <h4 className="categoreis-title">Chicken</h4>
            <div>
              <p className="categories-count">35 Recipes</p>
            </div>
          </div>
          <div className="category dessert">
            <img
              className="categories-icon"
              src={DessertIcon}
              alt="dessert"
            ></img>
            <h4 className="categoreis-title">Dessert</h4>
            <div>
              <p className="categories-count">64 Recipes</p>
            </div>
          </div>
          <div className="category pasta">
            <img className="categories-icon" src={PastaIcon} alt="pasta"></img>
            <h4 className="categoreis-title">Pasta</h4>
            <div>
              <p className="categories-count">8 Recipes</p>
            </div>
          </div>
          <div className="category vegan">
            <img className="categories-icon" src={VeganIcon} alt="vegan"></img>
            <h4 className="categoreis-title">Vegan</h4>
            <div>
              <p className="categories-count">3 Recipes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCategories;
