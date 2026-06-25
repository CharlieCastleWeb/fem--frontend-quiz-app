# Frontend Quiz App

A responsive quiz app built for the Frontend Mentor Frontend Quiz App challenge. Users can choose a subject, answer multiple-choice questions, see correct and incorrect feedback, complete the quiz, and restart with another subject. The app also includes a persistent light/dark theme switch.

## Links

- Live site: https://charliecastleweb.github.io/fem--frontend-quiz-app/
- Repository: https://github.com/CharlieCastleWeb/fem--frontend-quiz-app
- Challenge: https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU

## Screenshot

Add a current screenshot or short GIF here before submitting the project:

```md
![Frontend Quiz App screenshot](./docs/screenshot.png)
```

## Features

- Choose from HTML, CSS, JavaScript, and Accessibility quizzes
- Select one answer per question using native radio controls
- Submit an answer and see correct or incorrect feedback
- Move through the quiz and view the final score
- Restart the quiz and choose another subject
- Toggle between light and dark themes
- Navigate the full experience with a keyboard
- Receive focus and status updates during question changes and answer submission

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages
- GitHub Actions
- Prettier with `prettier-plugin-tailwindcss`

## Accessibility Notes

Accessibility was a major focus for this build. The answer options use native radio inputs inside a `fieldset`, which preserves expected single-choice semantics and keyboard behavior. The visible answer cards are styled labels, so the UI can match the design without replacing browser-native form behavior.

The app also includes visible `focus-visible` styles, focus management when moving between questions, live status messages for answer feedback, decorative icon handling, and a switch-style theme toggle with an accessible label.

One intentional UX decision: the submit button remains disabled until an answer is selected. The original challenge asks for an empty-submission error message, but I chose the disabled-button pattern because it prevents an invalid action earlier in the flow.

## What I Learned

This project helped me practice building a more complete React interface with accessibility in mind. The biggest learning areas were preserving native form semantics while creating custom-looking controls, managing focus after dynamic screen changes, and making Tailwind class organization more maintainable with Prettier.

I also spent time testing keyboard behavior across the full quiz flow and refining focus styles so they were clear in both light and dark themes.

## Continued Development

Areas I would like to keep improving:

- More screen reader testing across different assistive technology/browser combinations
- A more reusable styling pattern for repeated card-like controls
- A stronger README with real screenshots or a short interaction GIF
- Optional empty-submission validation if matching the original challenge spec exactly becomes a priority

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```
