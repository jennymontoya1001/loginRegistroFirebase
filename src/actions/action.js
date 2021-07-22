import {types} from '../types/types';
import {firebase,google} from '../firebase/firebaseConfig';

//LOGIN GOOGLE
export const loginGoogle = () =>{

     return (dispatch) =>{

      firebase.auth().signInWithPopup(google)
         .then(({user}) =>{
             console.log(user);
               dispatch(
                   login(user.uid,user.displayName)
               ) 
         })
         .catch(e =>{
            console.log(e);
        })
     }
}


//LOGIN CON EMAIL Y PASSWORD
//Primera función asíncrona
export const loginEmailPassword = (email,password) =>{
    //devuelve un callback
     return (dispatch) =>{

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{
              dispatch(
                  login(user.uid,user.displayName)
              ) 
              console.log('Bienvenid@');
        })
        .catch(e =>{
            console.log(e);
             console.log('El usuario no existe');
        })
     }
}

//FUNCIÓN SINCRÓNICA
export const login = (id,displayName) => {
      return{
          type: types.login,
          payload:{
              id,
              displayName
          }

      }
}

//REGISTRO EMAIL, PASSWORD Y NOMBRE
export const registroEmailPasswordNombre = (email,pass,name) =>{   
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,pass)
           .then( async({user}) =>{
               console.log(user);

               await user.updateProfile({displayName: name})

                  dispatch(
                     login(user.uid,user.displayName)
                 )  
           })
            .catch(e =>{
                console.log(e);
            })
       }
}
