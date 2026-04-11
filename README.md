# 🚀 Docker Portfolio App with CI/CD (Jenkins)

A production-ready **portfolio web application** containerized using Docker and automated with a complete **CI/CD pipeline using Jenkins**.

This project demonstrates real-world DevOps practices including **containerization, automated testing, security scanning, deployment, and DockerHub integration**.

---

## 📌 Project Overview

This project is a static portfolio application that is:

* 🐳 Containerized using Docker
* ⚙️ Automated using Jenkins CI/CD pipeline
* 🔐 Secured with vulnerability scanning
* 🚀 Automatically deployed via Jenkins
* ☁️ DockerHub ready for cloud deployment

---

## 🏗️ Architecture

```
Developer → GitHub → Jenkins → Docker Build → Test → Security Scan → Deploy → DockerHub Push
```

---

## ⚙️ Tech Stack

* **Frontend:** HTML, CSS
* **CI/CD:** Jenkins
* **Containerization:** Docker
* **Security:** Docker Scout (CVE Scan)
* **Version Control:** Git & GitHub

---

## 🔄 CI/CD Pipeline Flow

The Jenkins pipeline performs the following steps:

1. 📦 **Build Docker Image**
2. 🧪 **Basic Testing** (checks if `index.html` exists)
3. 🔐 **Security Scan** (Docker Scout CVE scan)
4. 🛑 **Stop Previous Container**
5. ▶️ **Run New Container**
6. ❤️ **Health Check** (HTTP response validation)
7. ☁️ **Push Image to DockerHub**
8. 📧 **Email Notification (Success/Failure)**

---

## 🐳 Docker Commands (Manual)

```bash
# Build Image
docker build -t docker-portfolio-app:latest .

# Run Container
docker run -d -p 8081:80 --name docker-portfolio-app docker-portfolio-app:latest
```

---

## 🔐 Jenkins Credentials Setup

To securely push images to DockerHub:

* Add **DockerHub credentials** in Jenkins
* Use `usernamePassword` binding
* Secure login using `--password-stdin`

---

## 📦 DockerHub Image

```
dockerhub-username/docker-portfolio-app:latest
```

---

## 📊 Features

* ✅ Fully automated CI/CD pipeline
* ✅ Dockerized application
* ✅ Security vulnerability scanning
* ✅ Zero-downtime deployment (container replacement)
* ✅ Health monitoring using HTTP checks
* ✅ Email alerts for build status

---

## 📸 Screenshots (Optional)

*Add Jenkins pipeline screenshots here*

---

## 🚀 Future Enhancements

* 🌐 Deploy on AWS EC2
* 🔁 Add Nginx reverse proxy
* 📈 Integrate Prometheus & Grafana monitoring
* 📜 Centralized logging with Loki
* ☸️ Kubernetes deployment

---

## 🧠 What I Learned

* Building end-to-end CI/CD pipelines
* Docker container lifecycle management
* Secure credential handling in Jenkins
* Automated deployment strategies
* Real-world DevOps workflow

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and improve the project.

---

## 📬 Contact

If you like this project, feel free to connect with me on LinkedIn or GitHub.

---

⭐ Don’t forget to star this repository if you found it useful!
