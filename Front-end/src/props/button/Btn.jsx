import { Link as Anchor } from "react-router-dom";

import './BtnStyle.css'

const Btn = ({ title, to, sice, modStyle }) => {
  return (
    <Anchor to={to} className={`btn_nocountry ${sice} ${modStyle}`}>{title}</Anchor>
  )
}

export default Btn;