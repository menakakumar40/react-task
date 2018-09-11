export const GetData = async () => {
  try {
    const responces = await fetch("https://api.myjson.com/bins/87lgk");
    const products = await responces.json();

    console.log("GETData", products);
    return products;
  } catch (error) {
    console.log(error);
  }
};
