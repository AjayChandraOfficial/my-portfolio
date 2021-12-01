// import html from "../../assets/Images/htmlSvg.svg";
import {
  Html,
  Css,
  Js,
  Sass,
  React,
  Redux,
  Firebase,
  Next,
  GithubSkill,
  Figma,
  Framer,
  Photoshop,
} from "./AllSvgs";
export const AllSKills = [
  {
    id: "i1",
    title: "HTML",
    component() {
      return <Html />;
    },
    textColor: "#EB6D4C",
  },
  {
    id: "i2",
    title: "CSS",
    component() {
      return <Css />;
    },
    textColor: "#6BA5D5",
  },
  {
    id: "i3",
    title: "JavaScript",
    component() {
      return <Js />;
    },
    textColor: "#FCDB52",
  },
  {
    id: "i4",
    title: "SASS",
    component() {
      return <Sass />;
    },
    textColor: "#E36CC9",
  },
  {
    id: "i5",
    title: "React",
    component() {
      return <React />;
    },
    textColor: "#56CBE0",
  },
  {
    id: "i6",
    title: "Redux",
    component() {
      return <Redux />;
    },
    textColor: "#9972D9",
  },
  {
    id: "i7",
    title: "Firebase",
    component() {
      return <Firebase />;
    },
    textColor: "#DE8F32",
  },
  {
    id: "i8",
    title: "NextJS",
    component() {
      return <Next />;
    },
    textColor: "#D1D1D1",
  },
  {
    id: "i9",
    title: "Github",
    component() {
      return <GithubSkill />;
    },
    textColor: "#BEBEBE",
  },
  {
    id: "i10",
    title: "Figma",
    component() {
      return <Figma />;
    },
    textColor: "#E57D71",
  },
  {
    id: "i11",
    title: "Framer",
    component() {
      return <Framer />;
    },
    textColor: "#A45AA6",
  },
  {
    id: "i12",
    title: "Photoshop",
    component() {
      return <Photoshop />;
    },
    textColor: "#3A7FCD",
  },
];
