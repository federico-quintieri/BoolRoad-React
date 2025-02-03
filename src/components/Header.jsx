import { Link, useLocation} from "react-router-dom";

export function Header() {

  const location = useLocation();

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
        <div className="container-fluid flex-nowrap">
          <a className="navbar-brand" href="#">BoolRoad</a>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              {location.pathname !== "/" && (
                  <Link className="nav-link" to="/">Mostra tutti i viaggi</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}



