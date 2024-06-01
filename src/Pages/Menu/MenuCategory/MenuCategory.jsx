import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="">
        { title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid lg:grid-cols-2 p-4 gap-12 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
            <button className="btn btn-secondary" >Order Now</button>
      </Link>

    </div>
  );
};

export default MenuCategory;
