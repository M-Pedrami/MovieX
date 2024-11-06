import Brand from "./Brand";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Navbar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Brand />
      <Search />
      <SearchResults movies={movies} />
    </nav>
  );
};
export default Navbar;
