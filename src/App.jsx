import ContentBox from "./components/Content box";
import SplineCoffee from "./components/Spline-coffee";
import "./App.css";

function App() {
  return (
    <div className="w-screen max-h-screen overflow-x-hidden">
      <div className="bg-gray-900 max-w-screen-2xl flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 py-10 px-8 sm:px-16">
          <ContentBox />
          <SplineCoffee />
        </div>
      </div>
    </div>
  );
}

export default App;
