// 
export const getRandomNumber = (number) => Math.floor(Math.random() * number);

// 
export const getRandomColor = () => {
  const COLORS = [
    "#20dab7",
    "#750956",
    "#f49691",
    "#12452e",
    "#0d4177",
    "#0b8680",
    "#07c891",
    "#276e02",
    "#0051aa",
    "#146884",
  ];
  let color = COLORS[getRandomNumber(COLORS.length)];
  return color;
};

