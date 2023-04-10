import Item from "./Item";
import chest32men from "../assets/32ChestMen.webp";
import chest43men from "../assets/43ChestMen.webp";
import chest54men from "../assets/54ChestHoodieMen.webp";
import chest32Women from "../assets/32ChestWomen.webp";
import chest43Women from "../assets/43ChestWomen.webp";
import chest54Women from "../assets/54ChestHoodieWomen.webp";
import classes from "./AvailableItem.module.css";


const AvailableWetsMen = [
  {
    id: "a1",
    name: "Men 3/2 Thermal Chest Zip Wetsuit",
    price: 280,
    img: chest32men,
  },
  {
    id: "a2",
    name: "Men 4/3 Thermal Chest Zip Wetsuit",
    price: 320,
    img: chest43men,
  },
  {
    id: "a3",
    name: "Men 5/4 Hooded Chest Zip Wetsuit",
    price: 360,
    img: chest54men,
  },
  {
    id: "b1",
    name: "Women 3/2 Thermal Chest Zip Wetsuit",
    price: 280,
    img: chest32Women,
  },
  {
    id: "b2",
    name: "Women 4/3 Thermal Chest Zip Wetsuit",
    price: 320,
    img: chest43Women,
  },
  {
    id: "b3",
    name: "Women 5/4 Hooded Chest Zip Wetsuit",
    price: 360,
    img: chest54Women,
  },
];

const AvailableItem = () => {

  const itemList = AvailableWetsMen.map((wetsuit) => (
    <Item
      photo={wetsuit.img}
      key={wetsuit.id}
      id={wetsuit.id}
      name={wetsuit.name}
      price={wetsuit.price}
    />
  ));

  return (
    <section className={classes.chart}>
      <ul>{itemList}</ul>
    </section>
  );
};

export default AvailableItem;
