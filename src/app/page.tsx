import ResponsiveContext from "./components/ResponsiveContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Eighth from "./Pages/Eighth";
import Fifth from "./Pages/Fifth";
import Fourth from "./Pages/Fourth";
import One from "./Pages/One";
import Seventh from "./Pages/Seventh";
import Sixth from "./Pages/Sixth";
import Third from "./Pages/Third";
import Two from "./Pages/Two";

export default function Home() {
  return (
    <div>
      <One />
      <Two />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth/>
      <ScrollToTopButton />
    </div>
  );
}
