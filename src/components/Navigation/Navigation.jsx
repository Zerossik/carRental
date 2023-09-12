import { NavLink } from 'react-router-dom';

const Navigaion = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigaion;