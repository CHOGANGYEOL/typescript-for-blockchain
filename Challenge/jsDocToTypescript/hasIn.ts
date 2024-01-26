interface IHasIn {
  <T>(object: { [key: string]: T }, key: string): boolean;
}

const hasIn: IHasIn = (object, key) => {
  return object != null && key in Object(object);
};

export default hasIn;
