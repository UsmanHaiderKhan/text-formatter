import NavBar from "./components/Navbar";
import { TextForm } from "./components/TextForm";


function App() {
  return (
    <div>
      <NavBar title="TextUtility"/>
       <div className="container mt-3">
         <TextForm mainHeading="Enter Text to Analyze" />
       </div>
   </div>

  );
}

export default App;
