import { useContext } from "react";
import Navbar from "./components/Navbar";
import DetailsPage from "./components/DetailsPage";
import CountryPage from "./components/CountryPage";
import { Context } from "./Context";
import { Route, Routes } from "react-router-dom";

function App() {
  const { theme, goDetails, country } = useContext(Context);
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="main ">
        {/* <Routes>
          <Route path="/" element={<CountryPage />} />
          <Route
            path={`/country/:${country.name}`}
            element={<DetailsPage country={country} />}
          />
        </Routes> */}
        {!goDetails ? <CountryPage /> : <DetailsPage country={country} />}
      </main>
    </div>
  );
}

export default App;
