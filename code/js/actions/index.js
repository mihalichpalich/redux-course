//создатель действия
export const select = (car) => {
  console.log(`Now car is: ${car.name}`);

  return {
    type: "CAR_SELECTED",
    payload: car
  }
};