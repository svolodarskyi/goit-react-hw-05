import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import Container from '../Container/Container';

const Header = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.link);
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.wrapper}>
            <nav>
              <ul className={css.nav}>
                <li>
                  <NavLink to="/" className={addActive}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movies" className={addActive}>
                    Movies
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
