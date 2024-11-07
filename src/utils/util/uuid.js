import Snowflake from 'snowflake-id';

const snowflake = new Snowflake.default({
  mid: 42,
  offset: (2019 - 1970) * 31536000 * 1000,
});

export const uuid = () => {
  const randNum = Math.floor(Math.random() * 10000000) + 1;
  const uuidString = snowflake.generate();
  const subString = uuidString.slice(-8);

  return Number(subString) + Number(randNum);
};