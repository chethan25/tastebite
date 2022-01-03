import Loader from 'react-loader-spinner';

import HeaderInfo from './HeaderInfo';
import SectionInfo from './SectionInfo';
import MediaInfo from './MediaInfo';
import Footer from '../home/Footer';

const Details = ({
  mealDetails,
  isMealDetailsLoading,
  handleOnLoadRecipeImage,
}) => {
  return isMealDetailsLoading ? (
    <div className="details-tail-spin-loader-container">
      <Loader type="TailSpin" />
    </div>
  ) : (
    <>
      <HeaderInfo
        mealDetails={mealDetails}
        isMealDetailsLoading={isMealDetailsLoading}
        handleOnLoadRecipeImage={handleOnLoadRecipeImage}
      />
      <SectionInfo mealDetails={mealDetails} />
      <MediaInfo mealDetails={mealDetails} />
      <Footer />
    </>
  );
};

export default Details;
