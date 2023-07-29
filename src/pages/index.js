import Banner from "@/components/UI/Banner";
import RootLayout from "@/components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
