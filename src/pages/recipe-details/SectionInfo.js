import './section-info.css';

const SectionInfo = ({ mealDetails }) => {
  // Get meal instructions
  // Remove whitespace and empty strings
  // Join 2 recipe instructions
  let mealInstructions;
  if (mealDetails.strInstructions === null) {
    mealInstructions = null;
  } else if (typeof mealDetails.strInstructions !== 'undefined') {
    mealInstructions = mealDetails.strInstructions
      .split('.')
      .map((mealInstruction) => mealInstruction.trim())
      .filter((mealInstruction) => mealInstruction !== '')
      .reduce(
        (acc, val, idx) =>
          idx % 2 === 0
            ? acc
              ? `${acc}. ${val}`
              : `${val}`
            : `${acc}@ ${val}`,
        ''
      )
      .replaceAll(';', ',')
      .split('@');
  }

  // Get meal ingredients
  const mealIngredients = [];
  for (let i = 1; i <= 20; i++) {
    if (mealDetails[`strIngredient${i}`]) {
      mealIngredients.push(
        `${mealDetails[`strMeasure${i}`]} ${mealDetails[`strIngredient${i}`]}`
      );
    }
  }

  return (
    <>
      <section id="section-info">
        <div className="instructions-info-container">
          <h2 className="instructions-info-title">How to Make it</h2>
          <div className="instructions-info">
            {!mealInstructions
              ? ''
              : mealInstructions.map((mealInstruction, index) => (
                  <div key={index} className="instruction-container">
                    <h4 className="meal-instructions-step-title">
                      {++index}. STEP
                    </h4>
                    <p className="meal-instructions-step-text">
                      {mealInstruction}.
                    </p>
                  </div>
                ))}
          </div>
        </div>
        <div className="ingredients-info-container">
          <h2 className="ingredients-info-title">Ingredients</h2>
          <ul className="ingredients-list">
            {mealIngredients.map((mealIngredient, index) => (
              <li className="ingredient-list-item" key={index}>
                {mealIngredient.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
