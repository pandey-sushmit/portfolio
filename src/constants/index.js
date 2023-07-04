import {
  creator,
  bachelors,
  school,
  web,
  javascript,
  cpp,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  oracleSQL,
  express,
  mui,
  git,
  threejs,
  python,
  framer,
  memories,
  quiz,
  github,
  github_black,
  linkedin,
  leetcode,
  interviewbit,
  codechef,
  hackerrank,
  instagram,
  codeforces,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Problem Solving",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Oracle SQL",
    icon: oracleSQL,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
];

const experiences = [
  {
    title: "B.E.",
    company_name: "MSRIT",
    icon: bachelors,
    iconBg: "#ffffff",
    date: "December 2020 - Present",
    points: [
      "I am currently pursuing my bachelors in Information Science and Engineering",
      "My Present CGPA(Till V Semester) is 9.08/10.",
      "My Relevant Coursework include DSA,CN,OS,DBMS.",
      "I have also secured 9th Rank in the College-level MQ+ Quiz (June,2022).",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "G.N.National Public School",
    icon: school,
    iconBg: "#ffffff",
    date: "April 2016 - March 2020",
    points: [
      "I had studied here from my IX to XII Standard.",
      "I had secured 95.8% in X Boards and 91.2% in XII Boards.",
      "Got the First exposure to Coding here only.",
      "Also, Secured State Rank 7 in NTSE Stage 1(November,2017).",
    ],
  },
];

const projects = [
  {
    name: "Memories",
    description:
      "A Full Stack MERN Application for sharing memories with others with features like Google Auth, Likes, Comments, Pagination, Search Functionality, Post Details, etc. Users can also update and delete their memories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/pandeysushmit/memories",
  },
  {
    name: "Quiz Wizards",
    description:
      "An interactive Quiz App made for Primary School Student particularly for Mathematics of Standard I. This enable adaptive learning for students and also provides a platform for teachers to track their progress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "victory",
        color: "orange-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/pandeysushmit/quiz_app",
  },
];

const socials=[
  {
    name: "Github",
    image: github_black,
    profile_link: "https://github.com/pandeysushmit",
  },
  {
    name: "LinkedIn",
    image: linkedin,
    profile_link: "https://www.linkedin.com/in/pandey-sushmit",
  },
  {
    name: "Leetcode",
    image: leetcode,
    profile_link: "https://leetcode.com/pandey_sushmit",
  },
  {
    name: "InterviewBit",
    image: interviewbit,
    profile_link: "https://www.interviewbit.com/profile/pandey_sushmit",
  },
  {
    name: "Code Chef",
    image: codechef,
    profile_link: "https://www.codechef.com/users/msrit_ka_hun",
  },
  {
    name: "Code Forces",
    image: codeforces,
    profile_link: "https://codeforces.com/profile/pandey_sushmit",
  },
  {
    name: "Hackerrank",
    image: hackerrank,
    profile_link: "https://www.hackerrank.com/pandeysushmit",
  },
  {
    name: "Instagram",
    image: instagram,
    profile_link: "https://www.instagram.com/pandeysushmitkumar",
  },
]
export { services, technologies, experiences, projects, socials };
