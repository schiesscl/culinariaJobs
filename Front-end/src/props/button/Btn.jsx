import { Link as Anchor } from "react-router-dom";

import './BtnStyle.css'

const Btn = ({ title, to, style, onClick }) => {
  return (
    <Anchor className={style} onClick={onClick} to={to}>{title}</Anchor>
  )
}

export default Btn;