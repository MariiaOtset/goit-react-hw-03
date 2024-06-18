import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <div className={css.wrapper}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.wrapper}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
