# Multilingual Onboarding Quiz App

This project is an interactive, multilingual onboarding quiz application designed for frontline workers, emphasizing accessibility and user engagement. It features a React-based frontend, a Node.js backend, and a Streamlit dashboard, with TypeScript for type safety and Jest for testing.

**Repository**: [https://github.com/victordeman/Multilingual-Onboarding-Quiz-App](https://github.com/victordeman/Multilingual-Onboarding-Quiz-App)

## Features
- **Multilingual Interface**: Supports English and German with dynamic language switching using .
- **Timed Quizzes**: Questions with a 30-second timer and immediate feedback.
- **Certificate Generation**: Downloadable PDF certificates upon completion using .
- **Responsive Design**: Optimized for mobile and desktop with Tailwind CSS.
- **Streamlit Dashboard**: Alternative interface for viewing and submitting quizzes.
- **Accessibility**: ARIA attributes, keyboard navigation, and high-contrast visuals.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, i18next, jsPDF
- **Backend**: Node.js, Express, TypeScript
- **Streamlit**: Python, Streamlit for dashboard interface
- **Testing**: Jest, React Testing Library
- **Design**: Figma for prototyping (not included in repo)
- **Dependencies**: Listed in , , and 

## Project Structure
```
Multilingual-Onboarding-Quiz-App/
├── frontend/                # React frontend
│   ├── public/             # Static assets
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable components (Quiz, Certificate)
│   │   ├── i18n.ts         # Multilingual configuration
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── package.json
│   └── tsconfig.json
├── backend/                # Node.js backend
│   ├── server.ts
│   ├── package.json
│   └── tsconfig.json
├── streamlit/              # Streamlit dashboard
│   ├── app.py
│   └── requirements.txt
├── tests/                  # Jest tests
│   └── Quiz.test.tsx
├── docs/                   # Documentation (e.g., Figma prototype)
└── README.md
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/victordeman/Multilingual-Onboarding-Quiz-App
   cd Multilingual-Onboarding-Quiz-App
   ```

2. **Frontend Setup**:
   - Navigate to .
   - Install dependencies: `npm install` (manual).
   - Start the app: `npm start`.

3. **Backend Setup**:
   - Navigate to .
   - Install dependencies: `npm install` (manual).
   - Start the server: `npm start`.

4. **Streamlit Setup**:
   - Navigate to .
   - Install dependencies: `pip install -r requirements.txt` (manual).
   - Run the dashboard: `streamlit run app.py`.

5. **Run Tests**:
   - Navigate to .
   - Run tests: `npm test`.

## Usage
- Access the React app at  for the main quiz interface.
- Use the Streamlit dashboard at  for an alternative UI.
- Select a language (English/German) to start the quiz.
- Answer questions within the time limit and download a certificate upon completion.

## Accessibility
- ARIA labels for screen readers.
- Keyboard-navigable interface.
- High-contrast visuals for readability.

## Future Improvements
- Add user authentication (e.g., Firebase).
- Integrate a database (e.g., MongoDB) for quiz and response storage.
- Expand language support and quiz content.

## Portfolio Value
This project demonstrates:
- Proficiency in React, TypeScript, and Node.js.
- Ability to build accessible, multilingual applications.
- Integration of REST APIs and alternative UIs (Streamlit).
- Focus on user-centric design for frontline workers.
