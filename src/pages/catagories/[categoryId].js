const CategoryPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is cata</h1>
    </div>
  );
};

export default CategoryPage;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/catagories`);
  const data = await res.json();
  console.log(data);
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
    `http://localhost:5000/catagories/${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
