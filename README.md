
# 🚀 Docker Portfolio App

A modern, containerized portfolio application built using **Docker, Nginx, and DevOps best practices**.
This project demonstrates how to deploy a static portfolio using containerization and automate workflows using CI/CD.

---

## 📌 Features

* 🐳 Dockerized Application
* ⚡ Lightweight Nginx Server
* 🔁 CI/CD Pipeline (Jenkins / GitHub Actions)
* 🌐 Reverse Proxy Ready
* 📦 Easy Deployment using Docker Compose

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Web Server**: Nginx
* **Containerization**: Docker
* **Orchestration**: Docker Compose
* **CI/CD**: Jenkins / GitHub Actions

---

## 📂 Project Structure

```
docker-portfolio-app/
│── Dockerfile
│── docker-compose.yml
│── nginx/
│   └── default.conf
│── src/
│   └── index.html
│── Jenkinsfile (optional)
```

---

## ⚙️ Setup & Run

### 🔹 1. Clone Repository

```bash
git clone https://github.com/AaftabPathan/docker-portfolio-app.git
cd docker-portfolio-app
```

### 🔹 2. Build & Run using Docker Compose

```bash
docker-compose up --build
```

### 🔹 3. Open in Browser

```
http://localhost:8081
```

---

## 🏗️ Architecture

```
User → Browser → Nginx → Docker Container → Portfolio App
```

---

## 🔄 CI/CD Pipeline

* Build Docker Image
* Run Container
* (Optional) Push to Docker Hub
* Deploy automatically

---

## 🌍 Future Improvements

* ✅ Add Custom Domain + SSL
* ✅ Deploy on Cloud (AWS / Azure)
* ✅ Add Monitoring (Prometheus + Grafana)
* ✅ Kubernetes Deployment

---

## 🤝 Contributing

Feel free to fork this repo and improve it 🚀

---

## 👨‍💻 Author

**Aaftab Pathan**
