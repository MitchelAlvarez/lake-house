import style from "../css/ContactUs.css"
import facbook from "../images/icons/icon-facebook.ico"
import instagram from "../images/icons/icon-instagram.ico"

export default function ContactUs() {
    return (
        <section className="grid-container">
            <div className="grid-item meet_us">
                <h1>Come an met us on</h1>
                <h2>3707 E Hwy 20 #5, Nice, CA 95464</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.316199619901!2d-122.84430558445408!3d39.12203554127613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8083e9ba88949a8d%3A0xd5ae3163d8de8ee8!2sRomi&#39;s%20Brew%20%26%20BBQ!5e0!3m2!1sen!2sus!4v1663167363744!5m2!1sen!2sus" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="grid-item phone">
                <h1>Order to pick up</h1>
                <h1>Number: (707)274-9114</h1>
            </div>
            <h1 className="socialTittle">Don forget to follow us in our social Media</h1>
            <div className="grid-item social_media">
                <a href="https://www.facebook.com/profile.php?id=61550230981807&mibextid=LQQJ4d"><img className="grid-social" src={facbook} alt="Facebook"></img></a>
                <a href="https://instagram.com/lakehouse.brew.bbq?igshid=MzRlODBiNWFlZA=="><img className="grid-social" src={instagram} alt="Instagram"></img></a>
            </div>

        </section >
    )
}