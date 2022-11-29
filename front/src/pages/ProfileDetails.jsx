import { FaThumbsUp } from "react-icons/fa";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
export function ProfileDetails() {

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  var sum = 0;
  var temp = false;
  const imgUrl = "https://www.prep2021chih.org.mx/wp-content/uploads/2022/10/Focus-Groups.webp";
  const API = "http://localhost:8080/api/profileDetails";
  var count = 0

  const id = auth.currentUser.uid;

  const handleClick = async () => {
    console.log("presionando boton")
    navigate("/addGroup")
  }

  useEffect(() => {

    axios.post(API,{
      id: id
    }).then((response) => {
      });

    axios.get(API)
    .then(resp=>{

      if(resp.data != null){

        setUser(resp.data)
        console.log(resp.data)

      }
      
    })
    
  },[]);



  if (!user) {
    return null;
  }

  return (
    
    
    <div className={styles.movieDetails}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        
        src={imgUrl}
        alt={user.name}
      />

      <div className={styles.col}>
      <div>
        <h1>Perfil:</h1>
      </div>
      <br></br>
        <p>
          <strong>Nombre:</strong>
          <br />
          {user.name}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <br />
          {user.email}
        </p>
        <p>
          <strong>Username:</strong>
          <br />
          {user.username}
        </p>

        <button type="button" onClick={() => handleClick()}>
          <BiBookAdd size={40} color="#6badf0"/>
        </button>
      </div>

    </div>
  );
}