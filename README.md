# My Personal Website

This project is a personal website built with React and Vite, showcasing skills, social links, and a title. It utilizes various libraries for enhanced functionality and presentation.

## Contributors

*   Prashanth G (Primary Developer)

## Stack Used

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** CSS (with Bootstrap and React-Bootstrap for components)
*   **Animation/Effects:**
    *   `@tsparticles` for particle effects
    *   `react-type-animation` and `react-typed` for text animations

## Steps to Build the Project

1.  **Install Dependencies:**
    Navigate to the project's root directory in your terminal and run:
    ```bash
    npm install
    ```
    This command installs all the necessary packages listed in `package.json`.

2.  **Build for Production:**
    To create an optimized build of the project for deployment, run:
    ```bash
    npm run build
    ```
    This command will compile the TypeScript code and bundle the assets into the `dist` folder.

## Running the Project Locally

1.  **Install Dependencies:**
    If you haven't already, install the project dependencies:
    ```bash
    npm install
    ```

2.  **Start the Development Server:**
    To run the project in development mode with live reloading, execute:
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can access the website by opening your browser to `http://localhost:5173` (the port may vary, check your terminal output).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open `http://localhost:5173` to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to check for code quality and style issues.

### `npm run preview`

Runs a local server to preview the production build.

### `npm run deploy`

Builds the project for deployment using `gh-pages` and deploys it to the GitHub Pages site. This command first runs `npm run build` to ensure the `dist` folder is up-to-date, then deploys the contents of the `dist` folder.
