Sentiment Adventure

A fun, interactive web app designed for 6th graders to learn Sentiment Analysis through a story about Emo the Robot. Built with HTML, CSS, JavaScript, and Bootstrap, it features a step-by-step story, exercises, and a word-based analyzer. Perfect for young learners to explore how computers understand emotions in text!

Features





Storytelling: Follow Emo the Robot's adventure with dynamic backgrounds and emoji-changing robot SVG for each step.



Interactive Exercises: 5 exercises to guess sentiments (happy, sad, neutral) with confetti rewards for correct answers.



Analyzer Tool: Input custom text to see sentiment analysis with highlighted keywords and history tracking.



Learn More: Explains rule-based and machine learning approaches to sentiment analysis.



Kid-Friendly UX: Simple navigation, colorful design, and animations tailored for 11-year-olds.



No API: Uses a rule-based approach (word lists) for offline functionality.

Tech Stack





HTML5, CSS3, JavaScript: Core web technologies.



Bootstrap 5: For responsive, polished UI via CDN.



Canvas-Confetti: For celebratory effects in exercises (via CDN).



No Backend: Static site, deployable on Netlify or similar platforms.

File Structure

sentiment-adventure/
├── index.html          # Home page with story
├── exercises.html      # Interactive exercises
├── analyzer.html       # Sentiment analyzer tool
├── learn-more.html     # Explains sentiment analysis approaches
├── styles.css          # Shared styles
└── script.js           # Shared functionality

Setup and Deployment





Clone this repository: git clone https://github.com/your-username/sentiment-adventure.git



Open index.html in a browser for local testing.



To deploy on Netlify:





Zip the folder or push to a GitHub repository.



Go to Netlify, select "Add new site" > "Deploy manually", and upload the zip.



Or connect your GitHub repo for automatic deployment.



Get the live URL (e.g., your-app-name.netlify.app) for sharing.

Usage





Home/Story: Read Emo's story step-by-step with "Next" buttons, changing backgrounds, and robot expressions.



Exercises: Complete 5 exercises to guess sentiments, with a progress bar and confetti for correct answers.



Analyzer: Type a message to see its sentiment (positive, negative, neutral) with highlighted words and history.



Learn More: Understand how sentiment analysis works with simple explanations.

Target Audience

Designed for 6th graders (11-year-olds) with minimal web navigation experience. The app uses a playful, story-driven approach to make learning engaging and accessible.

License

MIT License. Feel free to use, modify, and share!

Credits

Created as part of the Vizuara Full Stack Development Intern Assignment. Inspired by their student projects: Build your own ChatGPT, Classifying vs Generative AI, and Evaluation Metrics.
