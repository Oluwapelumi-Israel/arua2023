import { useState } from 'react';
import '../../styles/Stylelivepodcast/Postallogin.css';
import { Navigate } from 'react-router-dom';
// import Axios from 'axios';



let Postallogin = () => {
    const [state , setState] = useState({
        name : '',
        email : '',
    });

    const [nav , setNav] = useState(false)



    return(
        <section className="login_container">
            <section className='login'>
                <section className='input_container'>
                    <section className='label'>
                        <label htmlFor="fullname">Name:</label>
                    </section>
                    <section className='input'>
                        <input type='text' id="fullname" placeholder="Enter your full name" name="fullname" value= {state.name} onInput={() => {
                            setState({...state , name : state.name});
                        }}/>
                    </section>
                </section>
                <section className='input_container'>
                    <section className='label'>
                        <label htmlFor="email">Email:</label>
                    </section>
                    <section className='input'>
                        <input type='email' id="email" placeholder="Enter your email" name="email" value= {state.email} onInput={() => {
                            setState({...state , email : state.email});
                        }}/>
                    </section>
                </section>
                <section className='submit'>
                    <button onClick={() => {
                        // Axios({
                        //     method: 'post',
                        //     url: '',
                        // })
                        setNav(true);
                    }}>Register</button>
                </section>

                {nav && <Navigate to='/livepostalcard'/>}
            </section>
        </section>
    );
};









export default Postallogin;