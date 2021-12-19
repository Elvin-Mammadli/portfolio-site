import './menu.scss';
import Menus from './menu-lists';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <Menus name='Portfolio' onClick={{ menuOpen, setMenuOpen }} />
        <Menus name='Works' onClick={{ menuOpen, setMenuOpen }} />
        <Menus name='Testimonials' onClick={{ menuOpen, setMenuOpen }} />
        <Menus name='Contact' onClick={{ menuOpen, setMenuOpen }} />
      </ul>
    </div>
  );
}

export default Menu;