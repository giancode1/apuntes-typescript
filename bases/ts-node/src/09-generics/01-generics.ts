export const printObject = (argument: any) => {
  console.log(argument);
};

export function genericFunction<T>(argument: T): T {
  //T: tipo generico, hay mas letras
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
  return argument;
};
