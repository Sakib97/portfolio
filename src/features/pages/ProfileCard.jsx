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
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fi fi-brands-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=z31cqCMAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fi fi-ss-user-graduate"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.researchgate.net/profile/Ashek-Seum"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 448 512"
                >
                  <rect
                    x="0"
                    y="32"
                    width="448"
                    height="448"
                    rx="40"
                    fill="#3830a900"
                    // fill="#eae9ef00"
                  />
                  <path
                    fill="#ffffff"
                    d="M262.2 366.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ashek-seum-sakib-899a14113/"
                target="_blank"
                rel="noopener noreferrer"
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
