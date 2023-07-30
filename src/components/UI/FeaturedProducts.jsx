const FeaturedProducts = ({ products }) => {
  const shuffledProducts = products.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 6);

  return (
    <div className="grid grid-cols-3 gap-4">
      {randomProducts?.map((product, idx) => (
        <div key={idx} className="card  shadow-xl">
          <figure>
            <img src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
