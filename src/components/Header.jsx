import '../styles/header.css';

const Header = (props) => {

  const { searchValue, change, handleClick } = props;

  return (
    <header className="header">
      <div className="search-wrapper"><input className="search-field" placeholder="Search" type="search" value={searchValue} onChange={(evt) => change(evt.value)} /></div>
      <div className="btn-dark" onClick={() => handleClick()}>Search</div>
    </header>
  );
};

export default Header;