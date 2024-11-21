
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <div id="app" style={styles.app}>
      <Navbar />
      <ProductPage />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Montserrat",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    // Uncomment or adjust these styles as needed:
    // textAlign: "center",
    // color: "#2c3e50",
    // marginTop: "60px",
  },
};

export default App;
