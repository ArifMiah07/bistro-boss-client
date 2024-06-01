const FoodCard = ({item}) => {


    const {price, image, recipe, name} = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="relative"
            src={image}
            alt={name}
          />
        </figure>
          <p className="absolute top-0 right-0  bg-black py-4 px-8 text-white font-bold w-fit ">${price}</p>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
