import Home from "../_components/Home";
import ClientOnlyMap from "../_components/map/ClientOnlyMap";
import TextSection from "../_components/TextSection";

export default function MainPage() {
  return (
    <>
      <Home />

      <TextSection
        header="About us"
        text="We’re a group of food lovers, environmentalists, and tech geeks united to stop good food from hitting landfills."
        text2="We’re a team of 4 students from Vefskólinn,, combining coding, design, and activism to make our school (and planet) greener."
        text3="Join us—whether you’re a business or shopper, every meal saved matters."
      />
      <TextSection
        header="Fun Facts"
        text="1/3 of all food produced worldwide (≈1.3 billion tons) is wasted every year — enough to feed 3 billion people"
        text2="Food waste emits 8-10% of global greenhouse gases — if it were a country, it’d be the 3rd-largest emitter after China and the U.S."
        text3="Best before dates are not expiration dates — most foods are safe to eat weeks or months after "
      />
      <ClientOnlyMap />
    </>
  );
}
