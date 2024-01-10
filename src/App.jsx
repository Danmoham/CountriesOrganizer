import { AllCountries } from "./components/AllCountries";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";
import { SearchPage } from "./components/SearchPage";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/Home" element={<AllCountries />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
