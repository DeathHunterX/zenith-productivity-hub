# Zenith – Productivity Hub 🚀

_Balance your work and life, not just your tasks._

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![VitePress](https://img.shields.io/badge/VitePress-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitepress.dev/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

## Overview

**Zenith** is a full-stack productivity hub designed to support **work-life balance**.  
Instead of focusing only on getting more done, Zenith encourages **smarter task management, mindful breaks, habit building, and personal reflection**.

It brings together **team collaboration** and **personal wellness tools**, helping users stay productive without sacrificing health or personal time.

**Live Demo:** _Coming soon…_

---

## Features ✨

- **Task Management**: Organize and track work tasks with clear priorities and deadlines.
- **Daily Habit Tracking**: Build positive habits with automatic habit logs (via cron jobs).
- **Event Management**: Manage meetings, work schedules, and personal events in one place.
- **Day Status Logging**: Record availability (vacation, remote work, sudden personal matters).
- **Holiday Tracking**: Stay aware of public holidays and company-wide days off.
- **Personalized Settings**: Customize theme, working hours, timezone, and preferences.
- **Insights Dashboard**: Visualize tasks, habits, and time allocation to maintain a healthier work-life balance.

---

## Tech Stack 🛠️

| Layer                   | Technology                                                       |
| ----------------------- | ---------------------------------------------------------------- |
| **Frontend**            | Next.js, Shadcn UI, Radix UI, TailwindCSS                        |
| **Backend**             | NestJS, REST APIs                                                |
| **Database**            | PostgreSQL, TypeORM                                              |
| **Authentication**      | NextAuth.js                                                      |
| **State Management**    | React Query (server state), Context/Redux-Toolkit (client state) |
| **Documentation**       | VitePress                                                        |
| **API Testing**         | Swagger, Postman                                                 |
| **DevOps & Deployment** | Docker, CI/CD-ready                                              |
| **Testing**             | Vitest, React Testing Library                                    |

---

## Getting Started 🚀

### Prerequisites

Before running the project locally, make sure you have API keys for the following services:

Create a `.env` file in your client and server root and add all required keys:

- Client

```env
NEXT_PUBLIC_API_URL=<your_api_url>
```

- Server

```env
PORT=<your_api_port>
API_URL=<your_api_url>
CLIENT_URL=<your_client_url>

DATABASE_TYPE=<your_database_type>
DATABASE_URL=<your_database_url>

JWT_ACCESS_SECRET=<your_jwt_access_secret>
JWT_REFRESH_SECRET=<your_jwt_refresh_secret>

OAUTH_GOOGLE_CLIENT_ID=<your_oauth_google_client_id>
OAUTH_GOOGLE_CLIENT_SECRET=<your_oauth_google_client_secret>

OAUTH_GITHUB_CLIENT_ID=<your_oauth_github_client_id>
OAUTH_GITHUB_CLIENT_SECRET=<your_oauth_github_client_secret>
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
npm install

# Run the development server
npm run dev


```

Open [http://localhost:3000](http://localhost:3000) to see the project in action.

---

## Folder Structure 📂

```
├── client/              # Next.js app
│   ├── app/             # Pages and API routes
│   ├── components/      # Shared UI components
│   ├── features/        # Feature-specific components
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utilities and helpers
│
├── server/              # NestJS backend
│   ├── src/
│   │   ├── modules/     # Feature modules (auth, tasks, users, etc.)
│   │   ├── common/      # Interceptors, guards, pipes, utils
│   │   └── main.ts      # App entry point
│   └── prisma/          # Prisma schema & migrations
│
├── docs/                # VitePress API documentation
├── docker/              # Docker-related files
└── tests/               # Vitest + integration tests
```

## Roadmap 🔮

Planned enhancements for Zenith:

- Microservices Architecture: Transition from monolith to service-oriented design for scalability.

- AI-Powered Productivity & Wellness: Smart task suggestions, workload balancing, burnout alerts, and predictive deadlines.

- Focus & Mindfulness Tools: Pomodoro timers, mindful break reminders, and journaling support.

- Real-Time Collaboration: In-app chat and collaborative task editing.

- Advanced Integrations: Slack, Google Calendar, Notion, and Jira.

- Mobile App: Native apps for iOS & Android powered by React Native or Expo.

- Multi-Tenant Support: For organizations managing multiple teams/workspaces.

- Audit Logs & Compliance: Enterprise-level tracking and reporting.

---

## Contributing 🤝

Contributions are welcome!
Please fork the repository, create a feature branch, and submit a pull request.

---

## Contact 📧

For inquiries, contact Loi Phan Thanh at [phanthanhloi22112001@gmail.com](mailto://phanthanhloi22112001@gmail.com).

✨ This version puts **work-life balance** at the core while still showing off scalability and technical depth.

Do you also want me to add a **screenshot/demo section** (with placeholders for images/gifs) so the README feels more engaging for GitHub?
