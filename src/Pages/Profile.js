import React, {useState,useEffect} from 'react';
import {useAuth} from '../AuthProvider.js';
import { db } from "../Firebase"
import Navbar from '../components/Navbar.js';
import profile from '../images/profile.png'
import '../styles/profile.css'

function Profile() {
const { currentUser } = useAuth();
const [userDoc, setDoc] =useState()

useEffect(() => {
 
    var docRef = db.collection("users").doc(currentUser.uid);
  console.log(currentUser)
  docRef.get().then((doc) => {
      if (doc.exists) {
          setDoc(doc.data())
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
},[])

function showme(){
  console.log(userDoc)
}
    return (
      <div id="profile-container">
        <div><Navbar/></div>
      <div id="profile">
        <div id="profile-info">
          <div id="pic"><img onClick={showme} id="pfp" alt="" src={profile}/></div>
          <div id="stats-container">
            <div id="username"><h1>{!userDoc ? undefined:userDoc.username}</h1></div>
          <div id="stats">
            
                 <p className="stat">{!userDoc ? undefined:userDoc.posts.length} Publicações</p>
                 <p className="stat">{!userDoc ? undefined:userDoc.followers.length} Seguidores</p>
                 <p className="stat">{!userDoc ? undefined:userDoc.following.length} Seguindo</p>
                 
                 
                </div>
                </div>
        </div>
      </div>
      
      </div>

    )}


  export default Profile;