// Content script for blocking feeds on LinkedIn, Instagram, and YouTube
const BLOCK_MESSAGE = "Feeds are blocked. Solve a math problem to unblock.";

function blockFeed() {
    const linkedinFeed = document.querySelector(".scaffold-finite-scroll, .feed-container");
    const instagramFeed = document.querySelector("section[role='presentation'], ._aabd");
    const youtubeFeed = document.querySelector("#contents.ytd-browse");

    if (linkedinFeed) {
        linkedinFeed.innerHTML = `<div style='text-align: center; padding: 20px; font-size: 18px;'>${BLOCK_MESSAGE}</div>`;
    }

    if (instagramFeed) {
        instagramFeed.innerHTML = `<div style='text-align: center; padding: 20px; font-size: 18px;'>${BLOCK_MESSAGE}</div>`;
    }

    if (youtubeFeed) {
        youtubeFeed.innerHTML = `<div style='text-align: center; padding: 20px; font-size: 18px;'>${BLOCK_MESSAGE}</div>`;
    }
}

function injectMathProblem() {
    const mathProblemContainer = document.createElement("div");
    mathProblemContainer.id = "math-problem-container";
    mathProblemContainer.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 2px solid black; z-index: 9999; font-size: 16px;";

    const num1 = Math.floor(Math.random() * 900 + 100); // Triple digit
    const num2 = Math.floor(Math.random() * 900 + 100); // Triple digit

    const isAddition = Math.random() > 0.5;
    const correctAnswer = isAddition ? num1 + num2 : num1 - num2;
    const operator = isAddition ? " + " : " - ";

    mathProblemContainer.innerHTML = `
        <p>Solve this to unblock: ${num1}${operator}${num2} = ?</p>
        <input id='math-answer' type='text' style='width: 80%; padding: 5px;' />
        <button id='submit-math' style='margin-top: 10px; padding: 5px;'>Submit</button>
        <div id='math-feedback' style='margin-top: 10px; color: red;'></div>
    `;

    document.body.appendChild(mathProblemContainer);

    document.getElementById("submit-math").addEventListener("click", () => {
        const userAnswer = parseInt(document.getElementById("math-answer").value, 10);
        const feedback = document.getElementById("math-feedback");

        if (userAnswer === correctAnswer) {
            feedback.style.color = "green";
            feedback.innerText = "Correct! Feeds are unblocked.";
            setTimeout(() => {
                mathProblemContainer.remove();
            }, 1000);
        } else {
            feedback.style.color = "red";
            feedback.innerText = "Wrong answer. Feeds remain blocked.";
        }
    });
}

// Initialize the block and inject math problem
window.addEventListener("load", () => {
    blockFeed();
    setTimeout(injectMathProblem, 500); // Delay to ensure the feed gets blocked first
});
