# 🚀 Docker Portfolio App

A DevOps project with a fully automated CI/CD pipeline using Docker, Jenkins, Kubernetes, and Grafana + Loki monitoring.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Web Server:** Nginx
- **CI/CD:** Jenkins
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Security Scan:** Trivy
- **Code Quality:** ESLint
- **Monitoring:** Grafana + Loki + Promtail

---
docker-portfolio-app/
├── app/
│   ├── app.js
│   ├── index.html
│   ├── eslint.config.js
│   ├── package.json
├── docker/
│   ├── Dockerfile.node
│   ├── docker-compose.yml
│   └── nginx.conf
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   └── secret.yaml
├── monitoring/
│   ├── loki-config.yml
│   ├── promtail-config.yml
│   └── docker-compose.monitoring.yml
├── Dockerfile
├── Jenkinsfile
└── README.md

---

## ⚙️ CI/CD Pipeline

1. Checkout SCM
2. Build Docker Image
3. Test File Exists
4. Security Scan (Trivy)
5. NPM Audit
6. Lint (ESLint)
7. Stop Old Container
8. Run Container
9. Health Check
10. Push to DockerHub
11. Deploy to Kubernetes

---

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/AaftabPathan/docker-portfolio-app.git
cd docker-portfolio-app
```

### Run with Docker

```bash
docker build -t docker-portfolio-app .
docker run -d -p 8081:80 --name docker-portfolio-app docker-portfolio-app
```

Open: http://localhost:8081

### Run with Docker Compose

```bash
cd docker
docker compose up -d
```

---

## ☸️ Kubernetes Deployment

```bash
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl rollout status deployment/portfolio-app
```

---

## 📊 Monitoring

```bash
cd monitoring
docker compose -f docker-compose.monitoring.yml up -d
docker network connect monitoring_monitoring docker-portfolio-app
```

Open Grafana: http://localhost:3001  
Username: `admin`  
Password: `admin123`

Add Loki datasource URL: `http://loki:3100`

---

## 🔒 Security

- Trivy scans Docker image for vulnerabilities
- HIGH/CRITICAL vulnerabilities fail the build
- Secrets managed via Kubernetes Secrets (not tracked in git)

---

## 👤 Author

**Aaftab Pathan**  
GitHub: [AaftabPathan](https://github.com/AaftabPathan)  
Email: aaftabaayubpathan@gmail.com
Ye copy karo aur README.md mein paste kardo! 🚀
