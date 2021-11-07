import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const value = useContext(ThemeContext);
  return (
    <p className={value.theme}>Lorem ipsum dolor sit amet, consectetur adip</p>
  );
}

export default Paragraph;
