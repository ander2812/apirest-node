import styles from "./GroupCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import { auth, db, collections } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import stylesButton from "./JoinGroup.module.css"
import { Link } from "react-router-dom";

export function MyGroupCard({ group }) {

  const handleClick = async () => {

  };

  const imgUrl = "https://www.prep2021chih.org.mx/wp-content/uploads/2022/10/Focus-Groups.webp";

  return (

    <li className={styles.movieCard}>
      <Link to={"/group/" + group.id}>
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
        </div>j
      </Link>
    </li>

  );

  
}