# 🐳 Docker Portfolio App

A simple portfolio web application containerized with Docker. This project demonstrates how to build a Node.js based portfolio and deploy it using Docker and Docker Compose.

---

## 🔍 Project Overview

This repository contains a portfolio application that serves a static HTML page using a Node.js server (`app.js`). The application can be run locally or inside a Docker container. It includes Docker configuration (`Dockerfile`, `docker-compose.yml`) to make deployment easy anywhere Docker is supported.

---

## 🚀 Features

- 📦 Dockerized Node.js portfolio app  
- 🏗️ Docker Compose configuration for multi-container setup  
- 🔧 Simple Node.js backend (`app.js`)  
- 📄 Static HTML portfolio (`index.html`)  
- 🎯 Easy to build and run locally or in production  

---

## 📁 Repository Structure

```
docker-portfolio-app/
├── .gitignore
├── Dockerfile
├── Dockerfile.node
├── docker-compose.yml
├── app.js
├── index.html
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- Node.js  
- Express (or custom Node server)  
- HTML/CSS  
- Docker & Docker Compose  

---

## 🐳 Getting Started (Local)

1. **Clone the repository**
```bash
git clone https://github.com/AaftabPathan/docker-portfolio-app.git
cd docker-portfolio-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the app**
```bash
npm start
```

4. Open your browser:
```
http://localhost:8081
```

---

## 🐋 Using Docker

### Build Docker Image
```bash
docker build -t docker-portfolio-app .
```

> If using `Dockerfile.node`, replace accordingly:
```bash
docker build -f Dockerfile.node -t docker-portfolio-node .
```

### Run Container
```bash
docker run -d -p 8081:8081 docker-portfolio-app
```

Visit:
```
http://localhost:8081
```

---

## 🧱 Using Docker Compose

```bash
docker compose up -d
```

This will build the app image (if not built already) and start the container with configured ports.

---

## 📦 Deployment

You can deploy this containerized app to any platform that supports Docker:  
- AWS ECS / ECR  
- Azure Container Instances  
- Google Cloud Run  
- DigitalOcean App Platform  
- Heroku (via Docker deploy)  

---

## ⚙️ Environment Variables

Add an `.env` file if you want to customize settings (like port or API keys), and update the Docker configs to use it.

---

## 💡 Tips for Improvement

- Add a custom domain setup  
- Include SSL support using a reverse proxy (Nginx)  
- Add CI/CD for automated deployments  
- Store portfolio content dynamically (JSON / database)  

---

## 📝 License

MIT License  

---

## 📫 Contact / Author

**Aafta﻿b Pathan**  
GitHub: [https://github.com/AaftabPathan](https://github.com/AaftabPathan)  
Email: aaftabaayubpathan@gmail.com✉️
