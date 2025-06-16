# StartupProject: The Future of Web Application Security

This is a dynamic web application prototype for an The Future of Web Application Security, deployed on AWS EC2 with Nginx, Node.js,and Tailwind CSS.

## Project Overview
- **Name & Role**: Giwa Ayomide, Associate Cloud Engineer
- **Project Title**: The Future of Web Application Security
- **Pitch**:Our web application security solution protects online platforms from cyber threats by implementing robust security measures, including encryption, authentication, and vulnerability assessment. With a focus on proactive defense, we're safeguarding the digital landscape.
- **Bio**: Giwa Ayomide is a Cloud Engineer with expertise in AWS, Node.js, and DevOps. With a degree in Computer Science and experience building scalable web apps.

## Live Demo
Visit: `https://54.228.159.28`

## Screenshot
![Project2](https://github.com/user-attachments/assets/10fbd70c-b969-4960-bd87-60830001e303)


## Setup Instructions
### 1. Server Provisioning
- Launched AWS EC2 instance with Ubuntu 22.04 LTS.
- Configured Security Group for HTTP (80), and HTTPS (443)

### 2. Web Server Setup
- Installed Nginx: `sudo apt install nginx -y`.
- Set up Node.js/Express with `pm2` for process management.
- Configured Nginx as a reverse proxy to Node.js (port 3000).

### 3. Landing Page
- Built with HTML, Tailwind CSS, and CSS animations.
- Features name, role, project pitch, and bio.

### 4. Networking & Security
- Enabled HTTP/HTTPS in AWS Security Group.
- Public IP: `55.228.159.28`.

## Installation
```bash
git clone git@github.com:Ayomide-G/StartupProject.git
cd StartupProject
npm install
node app.js
