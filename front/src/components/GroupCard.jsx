import styles from "./GroupCard.module.css";
import { CgPokemon } from "react-icons/cg";
import 'firebase/firestore';
import { auth } from "../firebase-config";
import stylesButton from "./JoinGroup.module.css";
import { Link } from "react-router-dom";

export function GroupCard({ group }) {
  //const db = getDatabase();

  const imgUrl = "https://www.prep2021chih.org.mx/wp-content/uploads/2022/10/Focus-Groups.webp";

  return (
    <li className={styles.movieCard}>
      <div>
         <br />
        <strong>{group.name}</strong> <br />
      </div>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        alt={group.name}
        src={imgUrl}
      />
      <div>
      {group.schedule.map((schedule) => schedule.day).join(", ")}
      <br />
      {group.schedule.map((schedule) => schedule.startHour).join(", ")}
        - 
      {group.schedule.map((schedule) => schedule.endHour).join(", ")}
      </div>
    </li>
  );
}
