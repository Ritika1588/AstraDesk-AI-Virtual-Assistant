#  AstraDesk — AI-Powered Virtual Assistant

An intelligent, voice-enabled virtual assistant designed to make everyday digital interactions smarter, faster, and more intuitive.

AstraDesk combines AI-powered conversations with voice interaction to provide users with a personalized assistant experience through a modern web interface.



<p align="center">
  <b>Talk naturally. Get intelligent responses. Experience AI differently.</b>
</p>

---

## 🌟 Overview

**AstraDesk** is a full-stack AI-powered virtual assistant built using the MERN stack. It integrates Google's Gemini AI with speech recognition and speech synthesis capabilities to create an interactive voice-based experience.

Users can create an account, personalize their assistant, interact using voice commands, and receive AI-generated responses through an intuitive interface.

The application brings together frontend development, backend APIs, authentication, cloud services, and generative AI into one platform.

## 🚀 Key Features

- **AI-Powered Conversations:** Get intelligent responses using Google's Gemini AI.
- **Voice Interaction:** Communicate with the assistant using speech recognition.
- **Text-to-Speech:** Listen to the assistant's responses.
- **User Authentication:** Secure signup and login functionality.
- **Personalized Assistant:** Customize the assistant's identity and experience.
- **Responsive Interface:** Interact through a clean and user-friendly interface.
- **Cloud Image Management:** Upload and manage assistant images using Cloudinary.
- **Protected APIs:** Backend authentication using JWT.
- **Persistent User Data:** Store user information and application data in MongoDB.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI Integration | Google Gemini API |
| Authentication | JWT, bcrypt.js |
| Voice Features | Web Speech API |
| Image Storage | Cloudinary |
| Development Tools | VS Code, Git, GitHub |
| Deployment | Render |

## 📸 Screenshots

Explore the AstraDesk interface.

> Add your actual screenshots to the `screenshots/` directory using the filenames below.

### 1. Authentication

### 1. Authentication

| Sign Up | Sign In |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/aa602951-f828-4933-bd20-0f8ca2428fdb" width="400" alt="AstraDesk Sign Up"/> | <img src="https://github.com/user-attachments/assets/88f06922-1f15-445f-a34f-bb558c1a9a60" width="400" alt="AstraDesk Sign In"/> |

## 🏗️ Project Architecture

AstraDesk follows a client-server architecture.

```text
              ┌──────────────────────┐
              │      User            │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │   React Frontend     │
              │                      │
              │  UI + Voice Input    │
              │  Speech Output       │
              └──────────┬───────────┘
                         │
                    REST API
                         │
                         ▼
              ┌──────────────────────┐
              │   Express Backend    │
              │                      │
              │ Authentication       │
              │ API Routes            │
              │ AI Integration        │
              └──────┬────────┬──────┘
                     │        │
                     ▼        ▼
              ┌──────────┐  ┌────────────┐
              │ MongoDB  │  │ Gemini API │
              └──────────┘  └────────────┘
```

## ⚙️ Getting Started

Follow these steps to run AstraDesk locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB account or local MongoDB installation
- Google Gemini API key
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/Ritika1588/AstraDesk-AI-Virtual-Assistant.git
```

### 2. Navigate to the Project

```bash
cd AstraDesk-AI-Virtual-Assistant
```

### 3. Install Dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory and configure the variables required by your application.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Use the exact variable names referenced in your backend source code.

### 5. Run the Backend

```bash
cd backend
npm run dev
```

### 6. Run the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 📁 Project Structure

```text
AstraDesk-AI-Virtual-Assistant/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── screenshots/
│   ├── banner.png
│   ├── signup.png
│   ├── signin.png
│   ├── home.png
│   ├── customize.png
│   ├── voice-assistant.png
│   └── ai-response.png
│
├── .gitignore
└── README.md
```

*The directory structure above is illustrative; keep only folders and files that exist in your actual project.*

## 🧠 How It Works

1. **User Authentication:** Users sign up or log in through the application.
2. **Assistant Setup:** Users personalize their assistant through the available customization options.
3. **Voice Input:** The browser's speech recognition capabilities convert spoken input into text.
4. **AI Processing:** The backend processes the request and communicates with the Gemini API.
5. **Response Generation:** Gemini generates an appropriate response.
6. **Voice Output:** The assistant displays the response and can speak it using speech synthesis.

## 🔐 Security

- Password hashing using bcrypt.js.
- JWT-based authentication.
- Environment variables for sensitive configuration.
- Protected backend routes where authentication is required.

## 💡 Learning Outcomes

Building AstraDesk provided practical experience with:

- Developing full-stack applications using the MERN stack.
- Integrating generative AI APIs into web applications.
- Implementing authentication and protected routes.
- Working with MongoDB and backend REST APIs.
- Implementing browser-based speech recognition and speech synthesis.
- Managing images using Cloudinary.
- Connecting frontend and backend services.


## 🙏 Acknowledgements

This project was built as a learning project with guidance and inspiration from a YouTube tutorial. It helped me explore full-stack development, AI integration, authentication, and voice-based interaction.

I would also like to acknowledge the developers and open-source communities behind the technologies used in this project.


<p align="center">
  <b>Built with curiosity, code, and AI ✨</b>
</p>
