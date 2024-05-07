import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Hero from "./pages/Hero";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Hero />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
