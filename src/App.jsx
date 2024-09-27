import ContentBox from "./components/Content box";
import SplineCoffee from "./components/Spline-coffee";
import "./App.css";

function App() {
  return (
    <div className="w-screen max-h-screen">
      <div className="bg-gray-900 max-w-screen-2xl h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 px-16">
          <ContentBox />
          <SplineCoffee />
        </div>
      </div>
    </div>
  );
}

export default App;
