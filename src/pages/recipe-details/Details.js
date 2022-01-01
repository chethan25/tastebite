import HeaderInfo from './HeaderInfo';

const Details = ({
  mealDetails,
  isMealDetailsLoading,
  handleOnLoadRecipeImage,
}) => {
  return (
    <>
      <HeaderInfo
        mealDetails={mealDetails}
        isMealDetailsLoading={isMealDetailsLoading}
        handleOnLoadRecipeImage={handleOnLoadRecipeImage}
      />
    </>
  );
};

export default Details;
