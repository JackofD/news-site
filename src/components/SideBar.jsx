import '../styles/sidebar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="contents">
        <header><h2>Publisher</h2></header>
        <section>
          <ul>
            <li>Publisher 1</li>
            <li>Publisher 2</li>
            <li>Publisher 3</li>
            <li>Publisher 4</li>
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default SideBar;