import Banner from "@/components/UI/Banner";
import FeaturedProducts from "@/components/UI/featuredProducts";
import RootLayout from "@/components/layouts/RootLayout";

const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <FeaturedProducts products={products} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return {
    props: {
      products: data?.data[0]?.products,
    },
  };
};
