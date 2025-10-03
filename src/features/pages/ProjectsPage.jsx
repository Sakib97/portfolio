import ProfileCard from "./ProfileCard.jsx";
import ResearchProjects from "../ui/ResearchProjects.jsx";
import SeProjects from "../ui/SeProjects.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectsPage = () => {
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
        <div style={{minHeight: "100vh"}} className="container">
            <div className="row justify-content-center">
                <ProfileCard />
                <div id="projects" className="col-lg-8">
                    <div  className="ps-lg-3 ps-xl-5">
                        <h1 className="mb-4">Projects</h1>
                        <ResearchProjects></ResearchProjects>
                        <br /><br />
                        <SeProjects></SeProjects>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;