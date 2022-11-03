import "./App.scss";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  )
}

export default App