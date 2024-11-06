const Button = ({onClick, children}) => {
  return (
    <button
        className="btn-toggle"
        onClick={() => onClick((open) => !open)}
      >
        {children}
      </button>
  )
}
export default Button