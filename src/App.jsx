import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageEditor from "./components/ImageEditor";

const App = () => {
  return (
    <div className="container-full d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <ImageEditor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
