

const MenuItem = ({item}) => {

    const {price, image, recipe, name} = item;
    console.log(item)
    return (
        <div className="flex justify-between gap-8">
            <div>
                <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]  " src={image} alt="" />
            </div>
            <div>
                <h1 className="uppercase text-[20px]">{name}---------------------</h1>
                <h1 className="uppercase  text-[#737373] ">{recipe}</h1>
            </div>
            <div>
                <p className="text-[#BB8506] text-[20px] ">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;