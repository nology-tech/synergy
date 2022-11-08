import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import ContactListPage from "./components/ContactListPage/ContactListPage";




const App = () => {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/contacts" element={<ContactListPage />}/>
          </Routes>
        </Router>

      </div>

  );
};

export default App;
