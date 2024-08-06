import Header  from "./Header.js";
import Footer from "./Footer.js";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import Section4 from "./Section4.js";
import Section5 from "./Section1.js";
import Section6 from "./Section6.js";
import Alert from "./Alert.js"
import "./commonResource/css/styles.css"
function App() {
  return (
      <div>
        <Header />
        <Alert />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
  );
}

export default App;
