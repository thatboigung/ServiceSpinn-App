# ServiceSpin

ServiceSpin is a mobile platform designed to connect car shippers, truck drivers, and mobile mechanics. The platform facilitates vehicle transport requests, driver assignments, and provides mechanical assistance for truck drivers.

## Project Structure

```
servicespin/
│
├── backend/                # Node.js + TypeScript backend for ServiceSpin
│   ├── src/                # Source code for the backend
│   │   ├── config/         # Configuration files (e.g., database, environment)
│   │   ├── models/         # Data models (e.g., User, Order, Issue)
│   │   ├── routes/         # API route definitions
│   │   ├── controllers/    # Controller logic for handling requests
│   │   ├── middleware/     # Custom middleware (e.g., authentication)
│   │   ├── services/       # Business logic, utilities, and third-party integrations
│   │   └── server.ts       # Entry point for the backend server
│   ├── tests/              # Unit and integration tests for backend
│   ├── package.json        # Backend project dependencies and scripts
│   ├── tsconfig.json       # TypeScript configuration
│   ├── .env                # Environment variables (backend)
│   └── .gitignore          # Files to ignore in Git for backend
│
├── frontend/               # React Native frontend for ServiceSpin
│   ├── (React Native project files)
│   └── …
│
├── .gitignore              # Global gitignore file for the entire project
└── README.md               # Main project README (this file)
```

## Getting Started

This project is divided into two parts:

1. **Backend** - Built with Node.js, Express, and TypeScript.
2. **Frontend** - A React Native application.

### Prerequisites

To get started with this project, you'll need to have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/servicespin.git
cd servicespin
```

#### 2. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

#### 3. Frontend Setup

Navigate to the `frontend` directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

### Running the App

Follow the instructions in the respective README files for the backend and frontend to run the app locally.

- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)

### Project Features

    •	Car Shippers: Can place and manage vehicle transport requests.
    •	Truck Drivers: Receive load notifications, report issues, and get access to nearby mechanics.
    •	Mobile Mechanics: Can assist truck drivers with mechanical issues on the road.
    •	AI Load Manager: Matches vehicle transport requests with drivers based on routes and availability.
    •	AI Diagnosis: Assists drivers in diagnosing and resolving mechanical issues.

### Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

### License

See the [LICENSE](LICENSE) file for licensing information.
