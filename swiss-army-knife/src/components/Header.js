import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/gottaswipethemall">Gotta Swipe Them All</Link></li>
          <li><Link to="/ownerreview">Owner Review: Wood Edition</Link></li>
          <li><Link to="/gameoflife">Game of Life</Link></li>
        </ul>

        <Routes>
          <Route path="/" element="Home"/>
          <Route path="/calculator" element="Calculator"/>
          <Route path="/gottaswipethemall" element="Gotta Swipe Them All"/>
          <Route path="/ownerreview" element="Owner Review: Wood Edition"/>
          <Route path="/gameoflife" element="Game of Life"/>
        </Routes>
      </nav>
    </BrowserRouter>
  );
}
