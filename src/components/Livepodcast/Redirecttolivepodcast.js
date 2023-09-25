import {Link} from 'react-router-dom';
import '../../styles/Stylelivepodcast/Redirect.css';



export let Redirect = () => {

    return (
        <section className="Container">
            <section className='Link'><Link to="/livepostalcard">Click here to view poster presentation</Link></section>
        </section>
    );
};