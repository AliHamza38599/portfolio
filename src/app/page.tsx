"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="image-container">
          <Image
            className="profile-image"
            src="/images/m.jpg"  // Reference to image in the public folder
            alt="Profile Image"
            width={150}
            height={150}
          />
        </div>
        <div className="text-content">
          <h1 className="title">Welcome to My Portfolio</h1>
          <p className="subtitle">A Front-End Developer with a passion for design and code</p>
        </div>
      </header>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I am a passionate front-end developer who loves creating beautiful and
          functional web applications. I enjoy solving problems and building user-friendly
          experiences using modern web technologies like React-Next.js and TailwindCSS.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>TailwindCSS</li>
          <li>Git & GitHub</li>
          <li>Node.js</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me if you would like to collaborate or if you have any questions.
        </p>
        <p>Email: <a href="mailto:engineer41@gmail.com">engineer41@gmail.com</a></p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 My Portfolio</p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Header Section with image on left */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #4a90e2;
          color: white;
          padding: 50px;
          flex-wrap: wrap; /* Allow flex items to wrap on smaller screens */
        }

        .image-container {
          flex: 0 0 150px; /* Set fixed width for image container */
          margin-right: 20px;
          margin-bottom: 20px; /* Add bottom margin to create spacing for mobile */
        }

        .profile-image {
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .text-content {
          flex: 1;
          text-align: left;
        }

        .title {
          font-size: 3rem;
          margin: 0;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-top: 10px;
        }

        /* About Section */
        .about,
        .skills,
        .contact {
          padding: 40px;
          background-color: #f4f4f4;
          margin-bottom: 20px;
        }

        .about h2,
        .skills h2,
        .contact h2 {
          font-size: 2rem;
          color: #333;
        }

        .skills-list {
          list-style-type: none;
          padding: 0;
        }

        .skills-list li {
          font-size: 1.2rem;
          color: #555;
        }

        .contact a {
          color: #4a90e2;
          text-decoration: none;
        }

        .contact a:hover {
          text-decoration: underline;
        }

        /* Footer Section */
        .footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 20px;
          position: fixed;
          width: 100%;
          bottom: 0;
        }

        @media (max-width: 768px) {
          /* Adjustments for tablet and smaller screens */
          .header {
            padding: 30px;
          }

          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .about,
          .skills,
          .contact {
            padding: 20px;
          }

          .image-container {
            flex: 0 0 120px; /* Slightly smaller image size */
            margin-right: 10px;
          }

          .profile-image {
            width: 100%;
            border-radius: 50%;
          }

          .text-content {
            text-align: center; /* Center text for mobile screens */
            margin-left: 0;
          }
        }

        @media (max-width: 600px) {
          /* Adjustments for mobile screens */
          .header {
            padding: 20px;
            flex-direction: column; /* Stack image and text vertically */
            text-align: center;
          }

          .image-container {
            margin-bottom: 20px;
            flex: 0 0 120px; /* Adjust image size for mobile */
          }

          .text-content {
            margin-left: 0;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .about,
          .skills,
          .contact {
            padding: 15px;
          }

          .skills-list li {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
