const Menus = ({ name, onClick }) => {
  return (
    <li onClick={() => onClick.setMenuOpen(false)}>
      <a href={`#${name.toLowerCase()}`}>{name}</a>
    </li>
  );
}

export default Menus;