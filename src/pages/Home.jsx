import Banner from "../components/Banner/Banner";
import BannerReverse from "../components/Banner/BannerReverse";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Newsletter from "../components/NewsLetter/Newsletter";
import ProudProducts from "../components/Product/ProudProducts";
import TrendingSlider from "../components/Trending/TrendingSlider";
import Banner1 from "../img/Banner/1.jpg";
import Banner2 from "../img/Banner/2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Enjoy the Aroma of Coffee"
        text="Savor the Rich Flavors of Coffee with LEGI Products."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Enjoy the Aroma of Coffee"
        text="Experience the Perfect Blend of Coffee with LEGI Products."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
