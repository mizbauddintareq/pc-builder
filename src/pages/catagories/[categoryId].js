import Link from "next/link";

const CategoryPage = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((product, idx) => (
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

export default CategoryPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-server-pi.vercel.app/catagories`);
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: {
      categoryId: product.category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-server-pi.vercel.app/catagories/${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
