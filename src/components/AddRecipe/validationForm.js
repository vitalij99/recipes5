import { Notify } from 'notiflix';

const onValidationForm = array => {
  if (!array.thumb) {
    Notify.failure('Download Recipe Cover');
  } else if (array.name === '') {
    Notify.failure('Missing recipe name');
  } else if (array.description === '') {
    Notify.failure('Missing recipe description');
  } else if (array.category === '') {
    Notify.failure('Please select at least one category');
  } else if (array.cookingTime === '') {
    Notify.failure('Specify cooking time');
  } else if (array.ingredients.length === 0) {
    Notify.failure('At least one ingredient required');
  } else if (array.ingredients.some(object => object.amount === 0)) {
    Notify.failure('Provide valid ingredient amounts');
  } else if (array.instructions.length === 0) {
    Notify.failure('Fill in the field preparation');
  } else {
    return array;
  }
};

export default onValidationForm;
