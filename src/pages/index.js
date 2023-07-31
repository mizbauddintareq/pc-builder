import Banner from "../components/UI/Banner";
import FeaturedCategory from "../components/UI/FeaturedCategory";
import FeaturedProducts from "../components/UI/FeaturedProducts";
import RootLayout from "../components/layouts/RootLayout";

const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <FeaturedProducts products={products} />
      <FeaturedCategory />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// FeaturedProducts
export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-pi.vercel.app/products");
  const data = await res.json();

  const shuffledProducts = data?.data.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 6);

  return {
    props: {
      products: randomProducts,
      // data: data.data,
    },
  };
};
