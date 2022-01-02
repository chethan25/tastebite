import Loader from 'react-loader-spinner';

import HeaderInfo from './HeaderInfo';
import SectionInfo from './SectionInfo';
import MediaInfo from './MediaInfo';

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
    </>
  );
};

export default Details;
