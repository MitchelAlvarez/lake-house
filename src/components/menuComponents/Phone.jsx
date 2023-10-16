import { PhoneIcon } from "../Icons"

export function Phone() {

    // window.onscroll = function () {
    //     if (document.documentElement.scrollTop > 660) {
    //         document.querySelector('.go-top_container')
    //             .classList.add('show');
    //     } else {
    //         document.querySelector('.go-top_container')
    //             .classList.remove('show');
    //     }
    // }

    // const handleClick = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });

    // }
    return (
        <div className="phone_container show">
            <div className="phone-button">
                <a href="tel:707274-9114">
                    <i><PhoneIcon /></i>
                </a>
            </div>
        </div>
    )
}