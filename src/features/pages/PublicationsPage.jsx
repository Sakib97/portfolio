import ProfileCard from "./ProfileCard.jsx";
import usePublications from "../../hooks/usePublications";
import Spinner from 'react-bootstrap/Spinner';
import { boldSpecificName } from "../../util/stringUtil";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const PublicationsPage = () => {
    function groupByYear(publications) {
        return publications.reduce((acc, pub) => {
            if (!acc[pub.year]) acc[pub.year] = [];
            acc[pub.year].push(pub);
            return acc;
        }, {});
    }
    const { publications, loading } = usePublications();

    const grouped = groupByYear(publications);
    const years = Object.keys(grouped).sort((a, b) => b - a); // newest first

    // for auto scroll to publications section
    const location = useLocation();
    // useEffect(() => {
    //     const hash = location.hash;
    //     if (hash === "#publications") {
    //         const publicationsSection = document.getElementById("publications");
    //         publicationsSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [location]);
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
        <div style={{minHeight: "100vh"}} className="container">
            <div className="row justify-content-center">
                <ProfileCard />
                <div id="publications" className="col-lg-8">
                    <div className="ps-lg-1-6 ps-xl-5">
                        <h1>Publications</h1>
                        <h5>
                            [
                            <b>
                                <u>
                                    <a
                                        href="https://scholar.google.com/citations?user=z31cqCMAAAAJ&hl=en&oi=ao"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span style={{ color: "blue" }}>Google Scholar</span>
                                    </a>
                                </u>

                            </b>
                            ]
                            [
                            <b>
                                <u>
                                    <a
                                        href="https://orcid.org/0000-0003-2468-6521"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span style={{ color: "blue" }}>Orchid</span>
                                    </a>
                                </u>

                            </b>
                            ]
                            [
                            <b>
                                <u>
                                    <a
                                        href="https://www.researchgate.net/profile/Ashek-Seum"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span style={{ color: "blue" }}>Research Gate</span>
                                    </a>
                                </u>
                            </b>
                            ]
                        </h5>
                        <br />
                        <br />

                        {loading &&
                            <div className="mb-5 wow fadeIn">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        }

                        {!loading &&
                            <div className="mb-5 wow fadeIn">
                                {years.map((year) => (
                                    <div key={year}>
                                        <h3>{year}</h3>
                                        <hr />
                                        <ul>
                                            {grouped[year].map((pub) => (
                                                <h5 key={pub.id}>
                                                    <li>
                                                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                                            <span style={{ color: "teal" }}>
                                                                <u>{pub.title}</u>
                                                            </span>
                                                        </a>
                                                        <br />
                                                        <br />
                                                        <h6>
                                                            <i className="fi fi-sr-users"></i> &nbsp;
                                                            {boldSpecificName(pub.authors, "Ashek Seum")}
                                                            <br />
                                                            {pub.comments &&
                                                                <span style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold' }}>
                                                                    †{pub.comments}
                                                                </span>}
                                                        </h6>
                                                        <h6 style={{ marginTop: '12px' }}>
                                                            <i className="fi fi-sr-newspaper"></i> &nbsp;{" "}
                                                            {pub.publisher_link ? (
                                                                <a href={pub.publisher_link} target="_blank" rel="noopener noreferrer">
                                                                    {pub.publisher}
                                                                </a>
                                                            ) : (
                                                                pub.publisher
                                                            )}
                                                        </h6>
                                                    </li>
                                                    <br />
                                                </h5>
                                            ))}
                                        </ul>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PublicationsPage;