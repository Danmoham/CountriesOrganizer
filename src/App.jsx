import { AllCountries } from "./components/AllCountries";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";
import { SingleCountry } from "./components/SingleCountry";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/Home" element={<AllCountries />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/country/:my_country" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
