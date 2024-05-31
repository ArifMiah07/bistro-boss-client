import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-12">
      <section className="">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-4">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="btn btn-success">view full menu</button>
      </section>
    </div>
  );
};

export default PopularMenu;
