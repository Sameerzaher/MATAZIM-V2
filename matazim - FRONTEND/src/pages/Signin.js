import React, {useState} from 'react';
import {API} from '../api-service';

function Signin(){
    
    const[username, setUsername ] = useState('');
    const[password, setPassword ] = useState('');

    const loginClicked = () =>  {
        console.log("logged in")
        API.loginUser(username, password)
        .then(resp => console.log(resp.token))
        .catch( error => console.log(error))
    }

    return (
          <div>
              <h1>Sign in!</h1>
             <label htmlFor="username">Username</label><br/>
             <input id="username" type="text" placeholder="username" value={username}
                     onChange={ evt=> setUsername(evt.target.value)}   
              /><br/>
             <label htmlFor="password">Password</label><br/>
              <input id="password" type="password" placeholder="password" value={password}
                     onChange={ evt=> setPassword(evt.target.value)}/><br/>
             <button onClick={loginClicked}>Login</button>
                


            </div>
    
      )

}
export default Signin;
