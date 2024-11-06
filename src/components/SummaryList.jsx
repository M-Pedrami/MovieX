import Movie from "./Movie";

const SummaryList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie, index) => (
        <Movie movie={movie} key={index} />
      ))}
    </ul>
  );
};
export default SummaryList;
    