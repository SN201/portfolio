import project1 from "../assets/projects/RentHouse.png";
import project2 from "../assets/aiSummrizer.png";
import project3 from "../assets/projects/Senior.png";
import project4 from "../assets/projects/WorldsGame.png";

export const HERO_CONTENT = `I am a passionate Frontend developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React ,  My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Frontend developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022",
    role: "Junior Project",
    company: "College (AIU)",
    description: `I worked on a site for renting clinics, where both doctors and patients have accounts with user authentication. Doctors can view patients and choose one to provide a diagnosis. Patients can select a doctor based on their availability. Patients also have medical records. The site includes other users like Admins, who can add or delete sections, doctors, patients, and receptionists. There is also a Receptionist role responsible for calculations. Additionally, there is an emergency button for patients to get their location in real-time.`,
    technologies: ["JavaScript", "React.js", "HTML", "CSS", "Axios", "JWT(Authentication)", "Leaflet(Map)"]
},
{
    year: "2023",
    role: "Senior Project in College",
    company: "College (AIU)",
    description: `I improved the Junior Project by adding new features. I integrated AI tools to assist in diagnosing tumors throughout the body, making it easier for doctors to access patient information. I also added a new user role, "Laboratory," whose responsibility is to upload radiography images and send them directly to doctors, eliminating the need to use Google Drive or email, and avoiding delays from waiting for the doctor to physically receive a CD.`,
    technologies: ["React.js", "TailwindCSS", "Python"]
},
{
    year: "2023",
    role: "Odoo Beginner Training (Online)",
    company: "Ebitic (UAE)",
    description: `I received basic training in Odoo, covering fundamental concepts and functionalities of the ERP system. We built a simple project based on realistic requirements for a restaurant, where orders could be placed both inside and outside the restaurant, with a service allowing users to monitor the order process and provide feedback.`,
    technologies: ["Odoo"]
}

  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Renting Houses",
    image: project1,
    description:
      "A fully functional website with features like house listings for rent or purchase, along with user authentication. Users can contact the house owner via Email or WhatsApp.",
    link: "https://rent-house-react-tan.vercel.app/",
    technologies: ["ReactJS", "TailwindCSS", "Firebase"]
},
{
    title: "AI Summarizer",
    image: project2,
    description:
      "A single-page application that uses AI to summarize content from a given page.",
    link: "",
    technologies: ["ReactJS", "Redux", "TailwindCSS", "RapidAPI"]
},
{
    title: "Renting Clinics",
    image: project3,
    description:
      "A platform where both doctors and patients have accounts with user authentication. Doctors can view patients and select one for diagnosis, while patients can choose a doctor based on their availability. Patients have medical records, and there are additional users like Admins, who can add or remove sections, doctors, patients, and receptionists. The Receptionist manages calculations. The site supports both Arabic and English.",
    link: "",
    technologies: ["ReactJS", "TailwindCSS", "Axios", "JWT (Authentication)", "Leaflet(Map)"]
},
{
    title: "Worlds Game",
    image: project4,
    description:
      "A game where you have 6 words to guess and win, with 3 chances to succeed.",
    link: "",
    technologies: ["ReactJS", "CSS"]
}

];

export const CONTACT = {
  address: "Rif Dimashq , Artooz",
  phoneNo: "+963 935075154 ",
  email: "salman.nazal22001@gmail.com",
};
