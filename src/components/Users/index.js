import { auth, firestore } from "../../firebase/index";
import { collections } from "../../firebase/firebaseConfig";
import { useEffect } from "react";
import { useDB } from "../../contexts/DevsUnitedContext";
import { doc, getDoc } from "firebase/firestore";


function Users() {

    const { setRegistered, user, devUser, setDevUser } = useDB();

    // const currentUser = firebase.auth().currentUser;
    // console.log("you are" , currentUser);

    const currentUser = auth.currentUser;
    console.log("este es el current user", currentUser)
    
    // const uid = currentUser.uid;

    // const userData = { devUserName: "Popi" };
    // return firebase.firestore().doc(`/devsusers/${uid}`).set(userData);



    useEffect(() => {
        firestore
            .collection(collections.DEVUSER)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc =>{
                     const data = doc.data()
                     const id = doc.id;
                     return { id, ...data };
                    })
                // do something with documents
                console.log({documents})

                // if ( devUser.email === user.email )
                //     return setRegistered(true)
            })
       
    },[]);

    return (
        <h1>Hello {user.devName}</h1>
    )
    

// };
// const getStudents = async (grupo)=>{
//     setLoading(true)
//     firestore.collection(collections.ESTUDIANTES)
    
//     .get()
//     .then(querySnapshot => {
//         const documents = querySnapshot.docs.map(doc =>{
//              const data = doc.data()
//              const id = doc.id;
//              return { id, ...data };
//             })
        // do something with documents
    //     console.log({documents})
    //     let finalData = documents.filter((student)=>{
    //         return grupo.estudiantes.includes(student.id)
    //     })
    //     console.log("Data filtrada",finalData)
    //     setStudents(finalData)
    //     setLoading(false)
    //   })
  }

export default Users;