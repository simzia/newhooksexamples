 import '../App.css'
 import {useContext} from 'react';
 import UserContext from '../UserContext';
 
 function TodoApp(email: string, password: string) {
    const userData = useContext(UserContext) 
    const addUser = useContext(UserContext)
    console.log(userData);
    
    return (
        <div className='centerAlign windowHeight'>
            <div className='boxStyle'>
                <div className='alignTextCenter mb15'>User SignUp</div>
                <div className='dflex mb15'>
                    <label>Email: </label>
                    <input type="email" />
                </div>
                <div className='dflex mb15'>
                    <label>Password: </label>
                    <input type="password" />
                </div>
               
                <div className='centerAlign'>
                    <button onClick={() => addUser({email: "ayushi", password: "124556"})}>Login</button>
                </div>
            </div>
        </div>
    )
 }

 export default TodoApp