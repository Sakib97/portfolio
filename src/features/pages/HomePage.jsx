import styles from "../styles/HomePage.module.css";
import ProfileCard from "./ProfileCard.jsx";

const HomePage = () => {
    return (<div>

        {/* Profile & Info */}
        <div style={{minHeight: "100vh"}} className="container">
            <div className="row justify-content-center">
                <ProfileCard/>

                {/* About Section */}
                <div className="col-lg-8">
                    <div>
                        <div className="mb-5">
                            <p>Hello there!</p>
                            <p>
                                I'm Ashek Seum. I've completed my bachelors in Computer
                                Science and Engineering from{" "}
                                <a href="https://www.aust.edu">
                                    <u>Ahsanullah University of Science and Technology (AUST)</u>
                                </a>{" "}, Dhaka, Bangladesh.
                                . My research interests include, but are not limited to, Software Engineering,  Image
                                and Video Processing, Adversarial
                                Networks and Natural Language Processing.
                            </p>
                            <p>I also have a keen interest in History.</p>
                            <p className="mb-0">
                                Currently, I am working as a{" "}
                                <a href="https://www.aust.edu/cse/faculty_member/mr_ashek_seum">
                                    <u>faculty member</u>
                                </a>{" "}
                                at Ahsanullah University of Science and Technology (AUST),
                                Dhaka, Bangladesh.
                            </p>
                            <br />
                            <p>Thanks for your time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HomePage;