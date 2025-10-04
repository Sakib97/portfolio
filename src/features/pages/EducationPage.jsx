import ProfileCard from "./ProfileCard.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EducationPage = () => {
    // for auto scroll to publications section
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div style={{ minHeight: "100vh" }} className="container">
            <div className="row justify-content-center">
                <ProfileCard />
                <div id="education" className="col-lg-8">
                    <div className="ps-lg-3 ps-xl-5">
                        <h1 className="mb-4">Education</h1>

                        <div className="mb-5">
                            <h3>
                                <i className="fas fa-user-graduate"></i>&nbsp;
                                <b>B.Sc. in Computer Science and Engineering</b>
                            </h3>
                            <hr />

                            <ul>
                                <li>
                                    <b>University: </b>
                                    <a
                                        href="https://www.aust.edu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary fw-semibold text-decoration-underline"
                                    >
                                        Ahsanullah University of Science and Technology (AUST)
                                    </a>, Dhaka, Bangladesh
                                </li>

                                <li>
                                    <b>CGPA: </b>
                                    3.85{" "}
                                    <span className="text-success fst-italic">
                                        [out of 4.00]
                                    </span>
                                </li>

                                <li>
                                    <b>Thesis Title: </b>
                                    <a
                                        href="https://drive.google.com/file/d/1eF0OgJDrFoXHeBqRWflcNqswHEicCUQA/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-decoration-underline"
                                    >
                                        Deep Learning Based Video Captioning in Bengali
                                    </a>
                                </li>

                                <li>
                                    <b>Thesis Presentation: </b>
                                    <a
                                        href="https://docs.google.com/presentation/d/1GK44xCGW21jkgT9xSYWAv3qi0ee3e1yN/edit?usp=sharing&ouid=101357039751048955307&rtpof=true&sd=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-success fw-bold text-decoration-underline"
                                    >
                                        Presentation
                                    </a>
                                </li>

                                <li>
                                    <b>Supervisor: </b>
                                    <a
                                        href="https://www.aust.edu/cse/faculty_member/mr_faisal_muhammad_shah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-decoration-underline"
                                    >
                                        Mr. Faisal Muhammad Shah
                                    </a>, Associate Professor, Dept. of CSE, AUST
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationPage;