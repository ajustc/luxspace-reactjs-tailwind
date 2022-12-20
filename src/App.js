import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulations from "./pages/Congratulations";
import NotFound from "./pages/NotFound";

// Redux by context react
import Provider from "./helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/categories/:idc" element={<Details />} />
            <Route
              path="/categories/:idc/products/:idp"
              element={<Details />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/congratulations" element={<Congratulations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
