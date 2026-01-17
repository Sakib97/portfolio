import styles from "../styles/HomePage.module.css";

const ProfileCard = () => {
  return (
    <div
      className={`col-md-7 col-lg-4 mb-5 mb-lg-0 ${styles.profileCardContainer}`}
    >
      <div className="card border-0 shadow">
        <div className="text-center">
          <img
            // src="https://i.ibb.co/8jpJDKj/1649049537639-new2.jpg"
            src="/me3.png"
            alt="Ashek Seum"
            className={styles.profileImage}
          />
        </div>

        <div className={`card-body p-1-9 p-xl-5 ${styles.centered}`}>
          <div className="mb-4 text-center">
            <h3 className="h4 mb-0">Ashek Seum</h3>
            <h6></h6>
          </div>

          <ul className="list-unstyled mb-4">
            <hr />
            <li className="mb-3">
              <div className={styles.flexRow}>
                <i
                  className="fi fi-br-envelope"
                  style={{
                    fontSize: "1.3rem",
                    color: "#3f59b7",
                    marginRight: "8px",
                    transform: "translateY(4px)",
                  }}
                ></i>
                <a href="mailto: ashekseum86@gamil.com">
                  ashekseum86@gamil.com
                </a>
              </div>
              <a href="mailto: seum@digitalarx.com">seum@digitalarx.com</a>{" "}
              <br />
              <a href="mailto: seum.cse@aust.edu">seum.cse@aust.edu</a>
            </li>
            <hr />

            <li className="mb-3">
              <div className={styles.flexRow}>
                <i
                  className="fi fi-brands-whatsapp"
                  style={{
                    fontSize: "1.3rem",
                    color: "#3f59b7",
                    marginRight: "5px",
                  }}
                ></i>
                +88 01623247656
              </div>
            </li>

            <li className={styles.flexRow}>
              <i
                className={`fi fi-rr-marker`}
                style={{
                  fontSize: "1.3rem",
                  color: "#3f59b7",
                  marginRight: "5px",
                }}
              ></i>
              Dhaka, Bangladesh
            </li>
          </ul>

          {/* Social Links */}
          <ul className={`${styles.socialList}`}>
            <li>
              <a
                href="https://github.com/Sakib97"
                className={styles.socialIcon}
              >
                <i className="fi fi-brands-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=z31cqCMAAAAJ&hl=en&oi=ao"
                className={styles.socialIcon}
              >
                <i className="fi fi-ss-user-graduate"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ashek-seum-sakib-899a14113/"
                className={styles.socialIcon}
              >
                <i className="fi fi-brands-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProfileCard;
