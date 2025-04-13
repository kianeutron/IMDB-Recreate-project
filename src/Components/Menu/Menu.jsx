const Menu = () => {
    return ( 
       <div className="menubox">
        <div className="imdblogo"></div>
        <div className="menumenu">
            <p className="menutext">Menu</p>
            <div className="menuicon"></div>
        </div>
        <input className="searchbar" type="text" placeholder="Search IMDb" />
        <div className="linesearch"></div>
        <p className="alltextsearch">All</p>
        <div className="arrow1"></div>
        <div className="magnif"></div>
        <div className="imdbprobox">
            <p className="p1imdbprobox">IMDb</p>
            <p className="p2imdbprobox">Pro</p>
        </div>
        <div className="invertlinemenu"></div>
        <div className="savedicon"></div>
        <div className="plus"></div>
        <p className="watchlisttext">Watchlist</p>
        <p className="signintext">Sign In</p>
        <div className="enbox">
            <p className="entext">EN</p>
            <div className="enarrowicon"></div>
            <button className="useapp">Use app</button>
        </div>
       </div>
     );
}
 
export default Menu;