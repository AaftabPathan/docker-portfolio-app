# 🚀 Docker Portfolio App

A simple yet powerful **containerized portfolio application** built using **Node.js and Docker**, demonstrating modern DevOps practices such as containerization and automated CI/CD deployment using Jenkins.

---

## 📌 Overview

This project showcases:

* A **personal portfolio web application**
* Containerized using **Docker**
* Supports **Docker Compose**
* Automated deployment using **Jenkins CI/CD pipeline**
* Includes **health checks and basic testing**

This project simulates a **real-world production deployment workflow** used by DevOps engineers.

---

## 🧱 Architecture

```
Developer → GitHub → Jenkins → Docker Build → Container Run → Health Check → Deployment
```

---

## 🛠️ Tech Stack

* **Node.js** – Backend server
* **HTML/CSS/JS** – Frontend
* **Docker** – Containerization
* **Docker Compose** – Multi-container orchestration
* **Jenkins** – CI/CD automation

---

## 📁 Project Structure

```
docker-portfolio-app/
├── app.js                # Node.js server
├── index.html            # Portfolio UI
├── package.json          # Dependencies
├── package-lock.json
├── Dockerfile            # Docker image definition
├── Dockerfile.node       # Alternative Docker setup
├── docker-compose.yml    # Multi-container setup
├── Jenkinsfile           # CI/CD pipeline (logic explained below)
└── README.md
```

---

## ⚙️ How It Works

### 🧾 1. Application Flow

* Node.js server serves the **portfolio UI**
* Application runs inside a **Docker container**
* Exposed on a specific port (e.g., 8081)

---

## 🐳 Docker Setup

### 🔨 Build Docker Image

```bash
docker build -t docker-portfolio-app .
```

### ▶️ Run Container

```bash
docker run -d -p 8081:8081 docker-portfolio-app
```

👉 Open in browser:
http://localhost:8081

---

## 🐙 Docker Compose

This project also supports **Docker Compose** for easier setup:

```bash
docker compose up -d
```

This command:

* Builds the image
* Starts the container
* Maps required ports

---

## 🔄 CI/CD Pipeline (Jenkins)

The project includes a **Jenkins-based CI/CD pipeline** that automates the entire lifecycle:

### 🧩 Pipeline Stages

#### 1. Build Stage

* Builds a Docker image from the Dockerfile

#### 2. Test Stage

* Verifies essential project files (like `index.html`)
* Ensures application integrity before deployment

#### 3. Cleanup Stage

* Stops and removes any previously running container

#### 4. Deployment Stage

* Runs a new Docker container with updated code

#### 5. Health Check Stage

* Sends an HTTP request to verify the application is running
* Ensures the application responds successfully

#### 6. Notification Stage

* Sends email alerts for:

  * ✅ Successful builds
  * ❌ Failed builds

---

## 📊 Features

✔ Fully containerized application
✔ CI/CD automation using Jenkins
✔ Health check validation
✔ Automated deployment workflow
✔ Docker & Docker Compose support
✔ Production-like DevOps pipeline

---

## 🌐 Deployment

This application can be deployed on:

* AWS EC2 / ECS
* Azure Container Instances
* Google Cloud Run
* Any Linux server with Docker installed

---

## 🔐 Best Practices Followed

* Clean and modular project structure
* Containerization using Docker
* Automated pipeline for deployment
* Health checks to ensure reliability
* Error handling in deployment steps

---

## 🚀 Future Enhancements

* Docker image push to registry (Docker Hub / ECR)
* Kubernetes deployment
* Nginx reverse proxy integration
* SSL/HTTPS setup
* Monitoring with Grafana & Prometheus
* Blue-Green deployment strategy

---

## 👨‍💻 Author

**Aaftab Pathan**
DevOps Enthusiast 🚀

* GitHub: https://github.com/AaftabPathan
* Email: [aaftabaayubpathan@gmail.com](mailto:aaftabaayubpathan@gmail.com)

---

## ⭐ Conclusion

This project demonstrates a **real-world DevOps workflow** by combining:

* Application development
* Containerization
* Automated CI/CD pipeline
* Deployment and monitoring readiness

It reflects industry-level practices and is ideal for showcasing in interviews and resumes.
