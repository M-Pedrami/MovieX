import Button from "./Button";
import Summary from "./Summary";
import SummaryList from "./SummaryList";

const WatchedMoviesBox = ({
  isOpen2,
  setIsOpen2,
  watched,
 
}) => {
  return (
    <div className="box">
      <Button onClick={setIsOpen2}>{isOpen2 ? "–" : "+"}</Button>
      {isOpen2 && (
        <>
          <Summary
            watched={watched}
           
          />

          <SummaryList watched={watched} />
        </>
      )}
    </div>
  );
};
export default WatchedMoviesBox;
