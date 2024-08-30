# MelodyVerse Frontend

MelodyVerse is a frontend application developed with React.js, featuring modern and responsive login and signup pages. The application uses Tailwind CSS for styling and provides a user-friendly interface with input validation and password visibility toggle.

## Features

- **Login Page**: Allows users to log in using their email and password. Includes a password visibility toggle and basic form validation.
- **Signup Page**: Enables new users to register with a username, email, and password. Includes password confirmation, validation, and a password visibility toggle.
- **Responsive Design**: The design is optimized for desktop, tablet, and mobile devices using Tailwind CSS.
- **Home Page**: Displays the main content for the MelodyVerse platform with navigation to other sections.
- **Landing Page**: Welcomes users to MelodyVerse with a brief introduction and links to login or signup.
- **Music Player Popup**: A popup component that allows users to play music tracks within the platform.
- **OTP Verification**: Page for entering the OTP received during registration or password recovery.
- **Forgot Password**: Page for initiating the password recovery process.

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
    git clone https://github.com/thasleemkhan762/melodyverse-frontend.git
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
  - `components/`
    - `ForgetPassword.jsx` - Component for the password recovery process.
    - `FormInput.jsx` - Reusable input component with validation and password visibility toggle.
    - `HomePage.jsx` - Main page of the application with an overview and navigation to other sections.
    - `LandingPage.jsx` - Initial page displayed to users with links to login or signup.
    - `Login.jsx` - Component for the login page with form validation and password visibility toggle.
    - `MusicPlayerPopup.jsx` - Popup component for playing music tracks.
    - `OtpVerify.jsx` - Component for OTP verification during registration or password recovery.
    - `Signup.jsx` - Component for the signup page with form validation and password confirmation.

  - `index.css` - Global styles and Tailwind CSS configurations.
  - `App.js` - Main application component with routing.
  - `index.js` - Entry point for the React application.

## Components

### ForgetPassword

Component for initiating the password recovery process.

#### Props

- `onSubmit`: Function to handle form submission.
- `email`: String representing the user's email.
- `onChange`: Function to handle changes in the email input field.

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

### HomePage

The main page of the application, providing an overview and navigation to other sections.

### LandingPage

The initial page displayed to users with a welcome message and links to login or signup.

### Login

The login page where users can enter their email and password. Includes form validation and a password visibility toggle.

### MusicPlayerPopup

A popup component that allows users to play music tracks.

#### Props

- `track`: Object containing information about the music track to be played.
- `onClose`: Function to close the popup.

### OtpVerify

Component for OTP verification during registration or password recovery.

#### Props

- `otp`: String representing the OTP entered by the user.
- `onChange`: Function to handle changes in the OTP input field.
- `onSubmit`: Function to handle OTP submission.

### Signup

The signup page where users can register with a username, email, and password. Includes password confirmation, validation, and a password visibility toggle.

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
