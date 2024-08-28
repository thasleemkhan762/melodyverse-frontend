# MelodyVerse Frontend

MelodyVerse is a frontend application developed with React.js, featuring modern and responsive login and signup pages. The application uses Tailwind CSS for styling and provides a user-friendly interface with input validation and password visibility toggle.

## Features

- **Login Page**: Allows users to log in using their email and password. Includes a password visibility toggle and basic form validation.
- **Signup Page**: Enables new users to register with a username, email, and password. Includes password confirmation, validation, and a password visibility toggle.
- **Responsive Design**: The design is optimized for desktop, tablet, and mobile devices using Tailwind CSS.

## Technology Stack

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating custom designs.
- **React Router**: Library for handling routing and navigation.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/thasleemkhan762/mediamate-frontend.git
    cd melodyverse
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3001`.

## Project Structure

- `src/`
  - `components/` - Contains reusable components such as `FormInput`, `Login.js` and `Signup.js` components.
  - `index.css` - Global styles and Tailwind CSS configurations.
  - `App.js` - Main application component with routing.
  - `index.js` - Entry point for the React application.

## Components

### FormInput

A reusable component for form inputs with validation support and password visibility toggle.

#### Props

- `label`: Label for the input field.
- `type`: Type of the input field (`text`, `password`, etc.).
- `name`: Name attribute for the input field.
- `value`: Value of the input field.
- `onChange`: Function to handle input value changes.
- `errorMessage`: Error message to display when validation fails.
- `required`: Boolean indicating if the field is required.
- `pattern`: Regex pattern for validation.

### Login

The login page where users can enter their email and password. Includes form validation and password visibility toggle.

### Signup

The signup page where users can register with a username, email, and password. Includes password confirmation, validation, and password visibility toggle.

## Styling

The application uses Tailwind CSS for styling. Custom styles and layout adjustments are handled in `index.css`.

## Troubleshooting

- **Styling Issues**: Ensure Tailwind CSS is properly configured in `postcss.config.js` and `index.css`.
- **Validation Issues**: Verify that all form fields and validation rules are correctly implemented.

## Contribution

Feel free to fork the repository and submit pull requests. For major changes or feature requests, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, you can reach me at [thasleemkhan762@example.com](mailto:thasleemkhan762@example.com).
