import { Link, useLocation} from "react-router-dom";

export function Header() {

  const location = useLocation();

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BoolRoad</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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



