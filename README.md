# 🚀 Docker Portfolio App - DevOps Project

## 📌 Project Overview

This project demonstrates a complete **end-to-end DevOps pipeline** for deploying a simple portfolio application using modern tools like Docker, Jenkins, Kubernetes, and monitoring stack.

It showcases how to:

* Containerize an application
* Automate CI/CD pipelines
* Deploy on Kubernetes
* Manage configuration securely
* Monitor application logs and metrics

---

## 🛠️ Tech Stack

* **Frontend / App**: HTML, Node.js
* **Containerization**: Docker
* **CI/CD**: Jenkins
* **Orchestration**: Kubernetes (Minikube)
* **Monitoring**: Grafana + Loki
* **Security**: Trivy (image scanning)
* **Linting**: ESLint

---

## 📂 Project Structure

```
docker-portfolio-app/
│
├── app/                # Application source code
│   ├── app.js
│   ├── index.html
│   ├── package.json
│
├── docker/             # Docker related files
│   ├── Dockerfile
│   ├── Dockerfile.node
│   ├── docker-compose.yml
│   └── nginx.conf
│
├── jenkins/            # Jenkins pipeline
│   └── Jenkinsfile
│
├── k8s/                # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   └── secret.yaml
│
├── monitoring/         # Monitoring setup (Grafana/Loki)
│
└── README.md
```

---

## ⚙️ CI/CD Pipeline (Jenkins)

The Jenkins pipeline performs:

1. 🔨 Build Docker Image
2. ✅ Run basic tests
3. 🔐 Security Scan (Trivy)
4. 📦 NPM Audit
5. 🧹 Code Linting
6. 🛑 Stop old container
7. ▶️ Run new container
8. ❤️ Health Check
9. 📤 Push to DockerHub
10. 🚀 Deploy to Kubernetes

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t docker-portfolio-app .
```

### Run Container

```bash
docker run -d -p 8081:80 docker-portfolio-app
```

---

## ☸️ Kubernetes Deployment

### Apply manifests

```bash
kubectl apply -f k8s/
```

### Check resources

```bash
kubectl get pods
kubectl get svc
```

### Access Application

```bash
minikube service portfolio-service
```

---

## 🔐 ConfigMap & Secret

* **ConfigMap** → Stores environment/config data
* **Secret** → Stores sensitive data securely

Used to decouple configuration from code.

---

## 📊 Monitoring (Grafana + Loki)

* **Grafana** → Visualization dashboards
* **Loki** → Log aggregation

### Access Grafana

```bash
kubectl port-forward svc/loki-stack-grafana 3000:80 -n monitoring
```

Open:

```
http://localhost:3000
```

---

## 🔍 Security

* Integrated **Trivy** for Docker image vulnerability scanning
* Ensures secure container images before deployment

---

## 📈 Features

✔ End-to-end CI/CD pipeline
✔ Dockerized application
✔ Kubernetes deployment
✔ ConfigMap & Secret management
✔ Monitoring with Grafana & Loki
✔ Security scanning with Trivy

---

## 🚀 Future Improvements

* Ingress & custom domain setup
* Auto-scaling (HPA)
* Helm charts
* Cloud deployment (AWS/GCP)
* Alerting system

---

## 👨‍💻 Author

**Aaftab Pathan**

---

## ⭐ Conclusion

This project demonstrates a **complete DevOps lifecycle**, from development to deployment and monitoring, making it suitable for real-world production workflows and DevOps roles.

---

