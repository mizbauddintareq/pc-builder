import Link from "next/link";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.map((product, idx) => (
        <div key={idx} className="card  shadow-xl">
          <figure>
            <img src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.product_name}</h2>

            <p>{product?.category}</p>
            <p>{product?.status}</p>
            <p>{product?.price}</p>
            <p>{product?.average_rating}</p>

            <div className="card-actions justify-end">
              <Link href={`/product/${product?._id}`}>
                <button className="btn btn-primary">readmore</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
