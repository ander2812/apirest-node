import styles from "./GroupCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import { auth, db, collections } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import stylesButton from "./JoinGroup.module.css"
import { Link } from "react-router-dom";

export function MyGroupCard({ group }) {

  const handleClick = async () => {

  };

  return (
    <li className={styles.movieCard}>

      <div>
      <strong>Curso</strong>
        {group.name} 
        <br />
        <strong>Fecha de creacion</strong>
        {group.creationDate}
        <br />
        <strong>Ubicacion</strong>
        {group.description}
        <br />
        <div>
        <strong>Horario</strong>
      {group.schedule.map((schedule) => schedule.day).join(", ")}
      <br />
      {group.schedule.map((schedule) => schedule.startHour).join(", ")}
        - 
      {group.schedule.map((schedule) => schedule.endHour).join(", ")}
      </div>
        <strong>Eliminar</strong> <br />
        <button type="button" onClick={() => handleClick()}>
          <AiFillDelete size={40} color="#6badf0" />
        </button>
      </div>
    </li>
  );

  
}