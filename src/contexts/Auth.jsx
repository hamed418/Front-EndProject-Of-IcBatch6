import {useState,createContext} from 'react'

export const AuthContext=createContext();

//To create storage in localbrowser for token and user data
const retrieveStorageToken=()=>{
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));  //In here we use JSON.parse to convert the json string into javascript object!

    return{
        token,
        user
    }
}

const AuthContextProvider=({children})=>{
   const tokenData=retrieveStorageToken();
     
   //In here initToken null user is not loged in!
   let initToken=null;
   let initUser=null;

   if(tokenData){
    initToken=tokenData.token
    initUser=tokenData.user
}
      

   const [token,setToken]=useState(initToken)
   const [user,setUser] =useState(initUser);
   
   const isUserLoggedIn=!!token     //!!token ==true
         
   const logoutHandler=()=>{
       setToken(null);
       setUser(null)
       localStorage.removeItem('token')
       localStorage.removeItem('user');
   }

   const loginHandler=(user,token)=>{
     setToken(token)
     setUser(user)

     localStorage.setItem('token' ,token)
     localStorage.setItem('user' ,JSON.stringify(user)) // we use JSON.stringify to convert object into json string
   } 

   const authContext={
    user:user,
    token:token,
    isUserLoggedIn:isUserLoggedIn,
    login:loginHandler,
    logout:logoutHandler
   }
   return(
    <AuthContextProvider value={authContext}>
       {children}
   </AuthContextProvider>
   )
}

export default AuthContextProvider