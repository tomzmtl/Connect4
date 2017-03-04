export default null;


export const randomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * ((maxInt - minInt) + 1)) + minInt;
};


export const maxInArray = array => array.reduce((max, value) => (value > max ? value : max), 0);
