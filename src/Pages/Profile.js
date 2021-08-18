import React, {useEffect, useState} from 'react';
import {useAuth} from '../AuthProvider.js';
import {db} from '../Firebase.js'
import Navbar from '../components/Navbar.js';
import profile from '../images/profile.png'
import '../styles/profile.css'

function Profile() {
const { currentUser,getUserDoc } = useAuth();
const [currentDoc,setDoc] =useState();

useEffect(() => {

  var docRef = db.collection("users").doc(currentUser.uid);

docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
       createUserDoc(currentUser.uid,"user")
       
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

  
  function createUserDoc(uid,username){
    return db.collection("users").doc(uid).set({
      username: username,
      posts: 0,
      followers:0,
      following:0

  }).catch((error) => {
      console.error("Error adding document: ", error);
  });
  }
  console.log(currentDoc)
})


    return (
      <div id="profile-container">
        <div><Navbar/></div>
      <div id="profile">
        <div id="profile-info">
          <div id="pic"><img id="pfp" alt="" src={profile}/></div>
          <div id="stats-container">
            <div id="username"><h1>gdfg</h1></div>
          <div id="stats">
            
                 <p className="stat">0 Publicações</p>
                 <p className="stat">0 Seguidores</p>
                 <p className="stat">0 Seguindo</p>
                 
                 
                </div>
                </div>
        </div>
      </div>
      
      </div>

    )}


  export default Profile;