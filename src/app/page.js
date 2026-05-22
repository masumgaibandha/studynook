export const metadata = {
  title: "StudyNook | Home",
};
import Banner from "@/components/Banner";
import FeaturedRooms from "@/components/FeaturedRooms";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
    <Banner/>
    <FeaturedRooms/>
    <WhyChooseUs/>
    <HowItWorks/>
    </div>
  );
}
