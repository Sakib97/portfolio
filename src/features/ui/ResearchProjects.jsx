import { useResearchProjects } from "../../hooks/useProjects";
import Spinner from 'react-bootstrap/Spinner';
import styles from "../styles/Projects.module.css";

const ResearchProjects = () => {
    const { researchProjects: projects, loading } = useResearchProjects();

    return (
        <div >
            <h4>Funded Research Projects</h4>
            <hr />

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <ul className={styles.projectList}>
                    {projects?.map((proj) => (
                        <li key={proj.id} className={styles.projectItem}>
                            {/* Title */}
                            <a
                                href={proj.title_link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectTitle}
                            >
                                {proj.title}
                            </a>

                            {/* Details */}
                            <div className={styles.detailRow}>
                                <i className="fi fi-sr-user"></i>&nbsp;
                                <strong>PI:</strong>{" "}
                                {proj.pi_link ? (
                                    <a href={proj.pi_link} target="_blank" rel="noopener noreferrer">
                                        {proj.pi}
                                    </a>
                                ) : (
                                    proj.pi
                                )}
                            </div>

                            <div className={styles.detailRow}>
                                <i className="fi fi-sr-users-alt"></i>&nbsp;
                                <strong>Co-PI:</strong>{" "}
                                {proj.co_pi_link ? (
                                    <a href={proj.co_pi_link} target="_blank" rel="noopener noreferrer">
                                        {proj.co_pi}
                                    </a>
                                ) : (
                                    proj.co_pi
                                )}
                            </div>

                            <div className={styles.detailRow}>
                                <i className="fi fi-br-clock"></i>&nbsp;
                                <strong>Duration:</strong> {proj.duration}
                            </div>

                            <div className={styles.detailRow}>
                                <i className="fi fi-br-money"></i>&nbsp;
                                <strong>Amount:</strong> {proj.amount}
                            </div>

                            <div className={styles.detailRow}>
                                <i className="fi fi-bs-bank"></i>&nbsp;
                                <strong>Funding Source:</strong>{" "}
                                {proj.funding_source_link ? (
                                    <a
                                        href={proj.funding_source_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {proj.funding_source}
                                    </a>
                                ) : (
                                    proj.funding_source
                                )}
                            </div>

                            {proj.project_website && (
                                <div className={styles.detailRow}>
                                    <i className="fi fi-br-globe"></i>&nbsp;
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={proj.project_website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {proj.project_website}
                                    </a>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ResearchProjects;

