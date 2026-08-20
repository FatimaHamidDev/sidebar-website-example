import img1 from '../assets/FatimaHamid.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* <img
        src={img1}
        alt="Fatima Hamid"
      /> */}

      <h2 className="name">Fatima Hamid</h2>
      <p className="role" style={{ opacity: 0.7 }} >Full-Stack Developer (MERN)</p>

      <div className="info">
        <p>Email: fatimahamid711@gmail.com</p>
        <p>Location: Pakistan</p>
        <p>Focus: React, Node.js, System Design</p>
      </div>

      <div className="socials" style={{ marginTop: "30px", fontSize: "14px" }}>
        {/* GitHub */}
        <a href="#" aria-label="GitHub">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.2 11.46.6.11.82-.27.82-.6v-2.1c-3.34.74-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.27 1.86 1.27 1.08 1.88 2.83 1.34 3.52 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.28-1.6 3.29-1.26 3.29-1.26.66 1.7.24 2.95.12 3.26.77.86 1.23 1.95 1.23 3.29 0 4.7-2.8 5.74-5.48 6.04.43.38.81 1.12.81 2.26v3.35c0 .33.22.72.83.6C20.57 21.93 24 17.41 24 12.07 24 5.4 18.63 0 12 0z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 5 3.9 6.2 2.4 6.2S0 5 0 3.5C0 2 1.1.8 2.6.8S5 2 5 3.5zM.5 24h4.8V7.98H.5V24zM8.3 7.98H13v2.2h.1c.65-1.2 2.24-2.46 4.6-2.46 4.92 0 5.83 3.3 5.83 7.6V24h-4.8v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24H8.3V7.98z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
