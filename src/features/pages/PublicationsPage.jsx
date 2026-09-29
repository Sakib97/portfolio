import ProfileCard from "./ProfileCard.jsx";
import usePublications from "../../hooks/usePublications";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PublicationsSkeleton from "../../components/skeletons/PublicationsSkeleton";
import PublicationList from "../ui/PublicationList.jsx";

const PublicationsPage = () => {
    const { publications, loading } = usePublications();

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

                        {loading && (
                            <div className="mb-5 wow fadeIn">
                                <PublicationsSkeleton />
                            </div>
                        )}

                        {!loading && (
                            <div className="mb-5 wow fadeIn">
                                <PublicationList publications={publications} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PublicationsPage;