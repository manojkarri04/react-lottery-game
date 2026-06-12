# 🎰 React Lottery Game

A simple, interactive web-based lottery game built with React. Generate a random 3-digit ticket and see if the numbers add up to exactly 15 to win! 

This project was developed as a practice exercise to strengthen fundamental React concepts, state management, and modern CSS layout techniques.

## ✨ Features

* **Randomized Tickets:** Generates a fresh array of 3 random numbers (0-9) upon requesting a new ticket.
* **Dynamic Win Logic:** Automatically calculates the sum of the ticket array using JavaScript's `.reduce()` method.
* **Instant Visual Feedback:** Utilizes conditional rendering to display a victory or try-again message instantly.
* **Clean UI:** A centered, user-friendly interface built with CSS Flexbox.

## 📈 Architecture & Scalability

This project represents a major step in my learning journey, focusing on writing **production-ready** code rather than just functional scripts. 

* **Zero Hardcoding:** The game is built to be completely dynamic. Parameters like the number of digits on a ticket (`n={3}`) and the win condition (`WinningSum={15}`) are passed as props to the component. 
* **Highly Scalable:** Because the logic relies on dynamic props and array methods instead of hardcoded indexes, this game can instantly be scaled into a 5-digit, 10-digit, or even a 100-digit lottery game by changing a single line of code in the parent component.
* **Component-Based Design:** The logic is strictly separated into clean, reusable components (like extracting `TicketNum.jsx`), ensuring the application remains maintainable as it grows.

## 🛠️ Technologies Used

* **Frontend:** React (Bootstrapped with Vite)
* **Language:** JavaScript (ES6+)
* **Styling:** CSS3

## Deployed

**Live Deployment:** [Play the game here!](https://manojkarri04.github.io/react-lottery-game/)
