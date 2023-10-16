import home from "../src/Images/home.png";
import Common from "./Common";
export default function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={home}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}
