import "./App.css";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import FirstClass from "./components/FirstClass";
import ClientsAboutUs from "./components/ClientsAboutUs";
import OtherInsights from "./components/OtherInsights";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App" >
      <Home />
      <WhatWeDo />
      <FirstClass />
      <ClientsAboutUs />
      <OtherInsights />
      <Footer />
    </div>
  );
}

export default App;
