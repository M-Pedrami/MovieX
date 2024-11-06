import ListBox from "./ListBox";
import WatchedMoviesBox from "./WatchedMoviesBox";

const Main = ({
  isOpen1,
  setIsOpen1,
  movies,
  isOpen2,
  setIsOpen2,
  watched,
 
}) => {
  return (
    <main className="main">
      <ListBox isOpen1={isOpen1} setIsOpen1={setIsOpen1} movies={movies} />
      <WatchedMoviesBox
        isOpen2={isOpen2}
        setIsOpen2={setIsOpen2}
        watched={watched}
        
      />
    </main>
  );
};
export default Main;
