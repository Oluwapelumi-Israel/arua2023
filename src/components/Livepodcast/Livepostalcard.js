import image1 from '../../assets/IMG-20230925-WA0018.jpg';
import image2 from '../../assets/IMG-20230925-WA0019.jpg';
import image3 from '../../assets/IMG-20230925-WA0020.jpg';
import image4 from '../../assets/IMG-20230925-WA0021.jpg';
import '../../styles/Stylelivepodcast/Livepostal.css';


let Livepostalcard = () => {
    return (
        <section>
            <section style={{letterSpacing: '10px', textAlign: 'center', marginTop: '3em'}}>POSTER PRESENTATION SESSION</section>
            <section className='postals'>
                <section className='post'>
                    <section className='postal_image'>
                        <img src={image1} alt=''></img>
                    </section>
                    <section className='postal_descrip'>
                        <p>Where There is No Doctor: Health Care in Rural Uganda</p>
                        <section className='flex'>
                            <p>John Shen</p>
                            <button>View to comment</button>
                        </section>
                    </section>       
                </section>
                <section className='post'>
                    <section className='postal_image'>
                        <img src={image2} alt=''></img>
                    </section>
                    <section className='postal_descrip'>
                        <p>Delivering Radical Hospitality with Lava Mae</p>
                        <section className='flex'>
                            <p>David Jasso</p>
                            <button>View to comment</button>
                        </section>
                    </section>       
                </section>
                <section className='post'>
                    <section className='postal_image'>
                        <img src={image3} alt=''></img>
                    </section>
                    <section className='postal_descrip'>
                        <p>Lytic Granule Polarization is Reduced in Steroid-Treated Natural Killer Cells</p>
                        <section className='flex'>
                            <p>Roisin Reilly, Melody Duvall, Bruce D Levy</p>
                            <button>View to comment</button>
                        </section>
                    </section>       
                </section>
                <section className='post'>
                    <section className='postal_image'>
                        <img src={image4} alt=''></img>
                    </section>
                    <section className='postal_descrip'>
                        <p>Multilingual Marketing</p>
                        <section className='flex'>
                            <p>Joelle Resnik</p>
                            <button>View to comment</button>
                        </section>
                    </section>       
                </section>
            </section>
        </section>
    );
};



export default Livepostalcard;