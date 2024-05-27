import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg" 
import './featured.css'

const Featured = () => {
    return (
        <div>
            <section className="featured-item bg-fixed ">
                <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out-'}
                ></SectionTitle>
                <div  className="text-white md:flex justify-between items-center gap-6  py-24 px-32 ">
                    <div>
                    <img src={featuredImg} alt="" />
                    </div>
                    <div>
                        <h1>March 20, 2023</h1>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;