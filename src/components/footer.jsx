import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer">
           <img src="/img/mmj-w.png" alt="MMJ Logo" />
            <p>© MMJ 2021 | Site by <a href="https://anshc.co">@anshc</a></p>
            <Link to="/signin" className="link">
                <FontAwesomeIcon className="icon" icon={faSignInAlt} />
                Sign In
            </Link>
        </div>
    )
}