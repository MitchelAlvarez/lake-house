import { GoUpIcon } from "../Icons"

export function GoTop() {

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 660) {
            document.querySelector('.go-top_container')
                .classList.add('show');
        } else {
            document.querySelector('.go-top_container')
                .classList.remove('show');
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }
    return (
        <div className="go-top_container" onClick={handleClick}>
            <div className="go-top-button">
                <i><GoUpIcon /></i>
            </div>
        </div>
    )
}