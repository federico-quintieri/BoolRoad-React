export function Footer() {
  // Footer
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top container-fluid navbar-dark bg-dark ">
      <p className="col-md-4 mb-0 text-white">© 2024 Company, Inc</p>

      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-white">
        BoolRoad
      </a>

      <ul className="nav col-md-4 justify-content-end text-white gap-3 ">
        <li className="nav-item text-decoration-none">Home</li>
        <li className="nav-item text-decoration-none ">Features</li>
        <li className="nav-item text-decoration-none">Pricing </li>
        <li className="nav-item  text-decoration-none">FAQs</li>
        <li className="nav-item  text-decoration-none">About</li>
      </ul>
    </footer>
  );
}