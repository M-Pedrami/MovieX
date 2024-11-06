import Button from "./Button"
import SummaryList from "./SummaryList"

const ListBox = ({isOpen1,setIsOpen1, movies}) => {
  return (
    <div className="box">
    <Button onClick={setIsOpen1}>{isOpen1 ? "-" : "+"}</Button>
    {isOpen1 && (
      <SummaryList watched={movies} />
    )}
  </div>
  )
}
export default ListBox