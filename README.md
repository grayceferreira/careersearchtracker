# Career Search Tracker

A full-stack application for managing job applications, networking contacts, interview progress, and follow-up activities throughout the job search process.

Built with React, TypeScript, Node.js, Express, and SQLite.

## Features

- Create, update, and delete job applications
- Track application status throughout the hiring process
- Manage professional contacts and networking conversations
- Set follow-up reminders
- Search and filter applications
- View application statistics and progress metrics
- RESTful API architecture
- Automated testing and continuous integration

---

## Screenshots

### Dashboard

docs/images/dashboard.png

### Applications

docs/images/applications.png

### Analytics

docs/images/analytics.png

---

## Tech Stack

### Frontend

- React
- TypeScript
- React Hooks

### Backend

- Node.js
- Express
- TypeScript

### Database

- SQLite

### Testing

- Jest
- React Testing Library

### Tooling

- ESLint
- Prettier
- GitHub Actions

---

## Architecture

```text
client
  │
  ▼
React Frontend
  │
  ▼
Express API
  │
  ▼
SQLite Database
```

The backend follows a layered architecture:

```text
src/
├── controllers/
├── routes/
├── services/
├── middleware/
├── database/
├── models/
└── tests/
```

Responsibilities are separated to keep business logic independent from routing and persistence concerns.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/career-search-tracker.git
cd career-search-tracker
```

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=3000
```

---

## API Endpoints

### Applications

```http
GET /applications
```

Returns all applications.

```http
POST /applications
```

Creates a new application.

```http
PUT /applications/:id
```

Updates an application.

```http
DELETE /applications/:id
```

Deletes an application.

---

## Testing

Run backend tests:

```bash
npm test
```

Run frontend tests:

```bash
npm test
```

---

## Code Quality

Formatting and quality checks are enforced with:

```bash
npm run lint
npm run format
```

Key project practices include:

- TypeScript strict typing
- Modular API structure
- Reusable React components
- Unit testing
- Consistent code style
- Descriptive commit history
- Automated CI validation

---

## Continuous Integration

Every push and pull request triggers:

- Dependency installation
- Type checking
- Linting
- Automated tests

Configuration lives in:

```text
.github/workflows/ci.yml
```

---

## Roadmap

- User authentication
- Email notifications
- Resume management
- PostgreSQL support
- Docker deployment
- Reporting dashboard
- Calendar integrations

---

## Design Decisions

### Why SQLite?

SQLite was chosen to keep the project lightweight and easy to run locally. It requires no additional infrastructure, making development and testing straightforward while still providing a real relational database. The data access layer was designed so that migrating to PostgreSQL or another database in the future would require minimal changes to the rest of the application.

### Why TypeScript?

TypeScript improves maintainability by providing static type checking and better tooling support. As the project grew to include multiple layers and shared data models, strong typing helped reduce runtime errors and made refactoring safer.

### Why a Layered Backend?

The backend separates responsibilities into routes, controllers, services, and database modules.

- Routes handle HTTP endpoints
- Controllers process requests and responses
- Services contain business logic
- Database modules manage persistence

This structure keeps the codebase easier to maintain and test as new features are added.

### Why a REST API?

A REST-based architecture creates a clear separation between frontend and backend concerns. This allows the client application to evolve independently and makes it easier to support additional consumers in the future, such as mobile applications or external integrations.

### Why Keep Business Logic Out of Routes?

Business rules are implemented within service classes rather than directly inside route handlers. This approach improves testability, reduces duplication, and helps keep API endpoints focused on request handling.

### Why Automated Testing?

Tests provide confidence when making changes and refactoring. The project includes unit tests for core functionality so that key behaviors can be validated automatically during development and within the CI pipeline

## Changelog

### v1.0.0

- Application tracking
- Networking module
- Analytics dashboard
- Reminder functionality
- SQLite persistence
- Automated testing
- CI pipeline

---

## License

MIT