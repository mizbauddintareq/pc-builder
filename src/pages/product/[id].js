const ProductDetails = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is product details page</h1>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/products`);
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
  const res = await fetch(`http://localhost:5000/products/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
