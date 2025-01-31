import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Viaggi</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
