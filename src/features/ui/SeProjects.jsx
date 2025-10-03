import Spinner from 'react-bootstrap/Spinner';
import styles from "../styles/SoftwareProjects.module.css";
import { useSEProjects } from "../../hooks/useProjects";
const SeProjects = () => {
    const { seProjects: projects, loading } = useSEProjects();

    return (
        <div>
            <h4>Software Development Projects</h4>
            <hr />

            {loading ? (
                // <div style={{ textAlign: "center", padding: "20px" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                // </div>
            ) : (
                <ul className={styles.projectList}>
                    {projects.map((proj) => (
                        <li key={proj.id} className={styles.projectItem}>
                            {/* Title */}
                            <h3 className={styles.projectTitle}>{proj.title}</h3>

                            {/* Description with HTML */}
                            {proj.description && (
                                <div
                                    className={styles.projectDescription}
                                    dangerouslySetInnerHTML={{ __html: proj.description }}
                                />
                            )}

                            {/* Tech stack / tect (with HTML snippets too) */}
                            {proj.tech && (
                                <div
                                    className={styles.projectTect}
                                    dangerouslySetInnerHTML={{ __html: proj.tech }}
                                />
                            )}

                            {/* Links */}
                            <div className={styles.linksRow}>
                                {proj.link && (
                                    < div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{ transform: "translateY(2px)" }}>
                                            <i className="fi fi-br-globe"></i>&nbsp;
                                        </div>
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.linkButton}
                                        >
                                            Live Site
                                        </a>
                                    </ div>
                                )}
                                {proj.github_link && (
                                    < div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{ transform: "translateY(1px)" }}>
                                            <i className="fi fi-brands-github"></i>&nbsp;
                                        </div>
                                        <a
                                            href={proj.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.linkButton}
                                        >
                                             GitHub
                                        </a>
                                    </ div>

                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SeProjects;