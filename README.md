# React Web Game using GitHub API

This project is a web game created using React, Vite, TypeScript and consuming the public API of GitHub. The game displays all the data of two randomly selected repositories and the user must choose which one has more stars. The design is made with CSS3 and custom hooks, and a dedicated client is used to utilize the GitHub API.

## Features

- Functional Components in React
- Project Organization using React and TypeScript
- Responsive and Modern Design using CSS3
- Flexbox and Layout Fundamentals
- Usage of CSS Variables for Theme Creation
- Custom Hooks Creation
- Commits using Conventional Commits
- Typing using TypeScript
- Creation of Utilities

## Live Version

You can play the game by visiting the live version hosted at [repowars.excalidevs.com](https://repowars.excalidevs.com/).

## Video Tutorial

You can follow the step-by-step instructions on how to create this project by watching the [video tutorial](https://youtu.be/3_aHqakgVSU) (in Portuguese).

## Installation

To use this project, you need to follow these steps:

1. Clone the repository: `git clone https://github.com/username/repo-name.git`
2. Install the dependencies: `npm install`
3. Run the application: `npm run dev`

Note: This project uses Vite to run locally. Make sure to run the project using `npm run dev` instead of `npm start`.

## Used Tools

This project uses the following tools:

- [React](https://reactjs.org/) and [ReactDOM](https://reactjs.org/docs/react-dom.html) for building the UI
- [TypeScript](https://www.typescriptlang.org/) for typing and safer development
- [Vite](https://vitejs.dev/) for fast development and production builds
- [@octokit/core](https://www.npmjs.com/package/@octokit/core) and [axios](https://axios-http.com/) for communication with the GitHub API
- [react-icons](https://react-icons.github.io/react-icons/) for UI icons

## Theme

This project uses CSS variables to set up the theme. Here are the variables used and their descriptions:

- `--color-primary`: Primary color used for headings and buttons
- `--color-secondary`: Secondary color used for background and borders
- `--color-highlight`: Highlight color used for interactive elements
- `--color-danger`: Color used to indicate errors or warnings
- `--color-light`: Light color used for text and background
- `--color-shade`: Darker shade used for text and background
- `--color-darkish`: Darkish color used for text and background
- `--color-dark`: Dark color used for text and background
- `--color-darkest`: Darkest color used for text and background

To customize the theme, simply modify the values of the variables in the `src/app.css` file.

## Usage

After the application is running, the game will start automatically. The user must choose between the two repositories presented on the screen, and the game will display the result. The user can play again by clicking the "Play Again" button.

## Contributing

To contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them using Conventional Commits
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Credits

This project was created by [arthur404dev](https://github.com/arthur404dev).