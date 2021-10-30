export const checkIndexOutOfBound = (questions, nIdx) => questions.length === nIdx
export const checkIsEqual = (str1, str2) => makeLowerCase(trimString(str1)) === makeLowerCase(trimString(str2))

const makeLowerCase = (str = '') => str.toLowerCase();
const trimString = (str = '') => str.trim()