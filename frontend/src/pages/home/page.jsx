import styles from './page.module.css'
import hair from "../../../public/imgs/hair.jpg"
import nail from "../../../public/imgs/nail.jpg"
import skeen from "../../../public/imgs/skeen.jpg"
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section>
                <h1><center>Welcome to Beauty Salon!</center></h1>
                <center><p>
                We are delighted to welcome you to our space, where beauty and well-being meet.
                </p><p>
                Our goal is to make you feel special and refreshed with every visit.
                </p><p>
                Here, every detail is designed to provide you with a unique experience, 
                with high-quality services and personalized care that values your needs and style.</p>
                <p><br/>
                Relax, enjoy, and let our team take care of you with all the attention and dedication you deserve.
                </p><p>
                We are here to enhance your natural beauty and make sure you leave feeling even more confident.
                </p></center>
            </section>

            <section className={styles.Section}>
                <div>
                    <i><img className={styles.img} src={hair} alt=""/></i>
                    <h4>Hair Styling & Coloring</h4>
                    <p>
                        From classic cuts to the latest trends, 
                        our stylists create looks that are both timeless and trendy.
                    </p>
                </div>
                <div>
                    <i><img className={styles.img} src={nail} alt=""/></i>
                    <h4>Nail Care</h4>
                    <p>Pamper your hands and feet with our luxurious manicures and pedicures.</p>
                </div>
                <div>
                    <i><img className={styles.img} src={skeen} alt=""/></i>
                    <h4>Facials & Skincare</h4>
                    <p>Rejuvenate your skin with our customized facial treatments that cater to your specific needs.</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h1><center>Book Your Appointment!</center></h1>
                <center><p>
                    Ready to treat yourself? Booking an appointment at Beauty Salon is easy.
                    </p><p>
                    Simply make login to schedule your next visit. 
                    </p><p>
                    We look forward to seeing you!
                </p></center>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt />Location</button>
                </div>
            </section>
        </div>
    )
}