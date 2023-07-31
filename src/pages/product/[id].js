const ProductDetails = ({ data }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={data?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{data?.product_name}</h3>
        <p>{data?.category}</p>
        <p>{data?.status}</p>
        <p>{data?.price}</p>
        <p>{data?.average_rating}</p>
        <p>{data?.description}</p>
        <p>{data?.individual_rating}</p>
        {/* <p>{data?.key_features}</p> */}
        {/* <p>{data?.reviews}</p> */}
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-server-pi.vercel.app/products`);
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: {
      id: product?._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-server-pi.vercel.app/products/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
