import home from "../src/Images/hero.gif";
import Common from "./Common";
export default function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={home}
        visit="/service"
        btname="Get started"
      />
    </>
  );
}
