import Initilizer from "../messageBroker/initilizer";

export default async () => {
  Initilizer.getInstance().initilize();
};
