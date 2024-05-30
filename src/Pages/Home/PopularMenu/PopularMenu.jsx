import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{

        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            
            setMenu(popularItems);
            console.log(popularItems)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className="my-12">
            <section className="">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className="grid lg:grid-cols-2 gap-4">
                    {
                        menu.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                    }
                </div>
                <button className="btn btn-success">view full menu</button>
            </section>
        </div>
    );
};

export default PopularMenu;