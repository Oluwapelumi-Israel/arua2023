import '../../styles/Stylelivepodcast/Postallogin.css';
import Axios from 'axios';
import { useState } from 'react';


let PostalUpload = () => {

    const [state , setState] = useState({
        name: '',
        email: '',
        title: '',
        poster: '',
    });

    


        return(
            <section className="login_container">
                <section className='login'>
                    <section className='input_container'>
                        <section className='label'>
                            <label htmlFor="fullname">Name:</label>
                        </section>
                        <section className='input'>
                            <input type='text' id="fullname" placeholder="Enter your full name" name="fullname" value={state.name} onInput={(event) => {
                                setState({...state , name : event.target.value });
                            }}/>
                        </section>
                    </section>
                    <section className='input_container'>
                        <section className='label'>
                            <label htmlFor="email">Email:</label>
                        </section>
                        <section className='input'>
                            <input type="email" id="email" placeholder="Enter your email" name="email" value={state.email} onInput={(event) => {
                                setState({...state, email : event.target.value});
                            }}/>
                        </section>
                    </section>
                    <section className='input_container'>
                        <section className='label'>
                            <label htmlFor="title">Title of poster presentation:</label>
                        </section>
                        <section className='input'>
                            <input type='text' id="title" placeholder="Enter title of poster presentation" name="title" value={state.title} onInput={(event) => {
                               setState({...state , title: event.target.value}); 
                            }}/>
                        </section>
                    </section>
                    <section className='input_container'>
                        <section className='label'>
                            <label htmlFor="poster">Upload poster file:</label>
                        </section>
                        <section className='input'>
                            <input type='file' accept='image/*'  id="poster" name="poster" onChange={(event) => {
                                setState({...state , poster : event.target.files[0]});
                            }}/>
                        </section>
                    </section>
                    <section className='submit'>
                        <button onClick={() => {
                            Axios({
                                method: 'post',
                                url: 'http://localhost:8080/arua2023/upload',
                                data: {
                                    name : state.name,
                                    email : state.email,
                                    title : state.title,
                                    poster : state.poster
                                },
                                headers: {
                                    "Content-Type" : "multipart/form-data",
                                }
                            }).then(
                                (res) => {
                                    console.log(res.data);
                                }
                            );
                        }}>Upload</button>
                    </section>
                </section>
        </section>
        );
};




export default PostalUpload;