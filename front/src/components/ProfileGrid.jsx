import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useAuth} from '../context/authContext'
import { useLocation } from "react-router-dom";
import styles from "./GroupGrid.module.css";
import axios from 'axios'
import { auth } from "../firebase-config";
import { ProfileCard } from "./ProfileCard";
export function ProfileGrid() {
  //let movies = [];
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const API = "http://localhost:8080/api/myGroups"

  const [group, setGroup] = useState([]);
  const {user} = useAuth()
  const loadData = () => {

    axios.get(API)
    .then(resp=>{
        console.log(resp.data.ownerId)

            setGroup(resp.data)
    })  

  }

  useEffect(loadData, [])
  return (
    <ul className={styles.movieGrid}>
      {group.map((group) => (
        <ProfileCard key={group.id} group={group} />
      ))}
    </ul>
  );
}