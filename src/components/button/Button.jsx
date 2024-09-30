import "./Button.css";
const Button = ({btns}) => {
  return (
    <>
      <button className="btn">{btns}</button>
    </>
  );
}
export default Button;