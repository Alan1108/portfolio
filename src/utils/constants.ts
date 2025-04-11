import { Experience } from "../models/Experience";

export const ABOUT_ME: string = `
Passionate Fullstack Software Engineer who encourages the creation of innovative solutions for
web and mobile applications, REST APIs, and microservices. I leverage various cutting-edge
technologies to deliver robust and scalable software. My expertise spans backend, frontend
development, mobile development, infrastructure management, and ensuring seamless
integration and efficiency across all aspects of a software project. I'm in the exciting realm of
cloud computing, where I use a diverse range of tools to manage serverless and serverfull
architectures with different cloud providers, specializing in managing AWS and GCP consoles
and configuring environments into them using Infrastructure as Code.
`;

export const SKILLS_AND_ICONS: { [key: string]: string } = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Golang:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Poetry:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/poetry/poetry-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  Linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  NestJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  NodeJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  Ansible:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  FastApi:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  MaterialUi:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  MySql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg",
  NextJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  Npm: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  ViteJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
};

export const COLOR_PALETTE = {
  text: "#FEF9E1", //beige
  primary: "#3B1E54", //morado
  secondary: "#5F99AE", // azul clarito
  background: "#336D82", //azul oscuro
};

export const experience: Experience[] = [
  {
    company: "ioet",
    position: "Software Engineer",
    projects: [
      {
        title: "Warby",
        description: "Hello there",
      },
    ],
    startDate: "03-2022",
    endDate: "Present",
  },
];
