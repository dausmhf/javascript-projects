// ── Simple User Database ──
const users = [
    { name: "Daus", email: "daus@example.com", password: "daus123" },
    { name: "Adit", email: "adit@example.com", password: "adit123" },
];

// ── DOM Elements ──
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcome-message");

// ── Login Handler ──
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Find matching user
    const matchedUser = users.find(
        (u) => u.email === email.value && u.password === password.value
    );

    // Disable button & show loading
    loginBtn.textContent = "Signing in…";
    loginBtn.disabled = true;
    loginBtn.style.opacity = "0.7";
    welcomeMessage.textContent = "";
    welcomeMessage.className =
        "text-center text-sm mt-4 min-h-[20px] transition-all duration-300";

    setTimeout(() => {
        if (matchedUser) {
            // ═══ SUCCESS ═══
            loginBtn.textContent = "✓ Welcome, " + matchedUser.name + "!";
            loginBtn.style.opacity = "1";
            loginBtn.classList.remove("from-violet-600", "to-cyan-500");
            loginBtn.classList.add("bg-emerald-500");

            welcomeMessage.textContent = "Redirecting to dashboard…";
            welcomeMessage.classList.add("text-emerald-400");

            // Add success glow to card
            const card = document.querySelector(".glass");
            card.style.borderColor = "rgba(16, 185, 129, 0.4)";
            card.style.boxShadow = "0 0 40px rgba(16, 185, 129, 0.15)";

            // Redirect to home after brief pause
            setTimeout(() => {
                localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
                window.location.href = "home.html";
            }, 1500);
        } else {
            // ═══ FAILURE ═══
            loginBtn.textContent = "✕ Login Failed";
            loginBtn.style.opacity = "1";
            loginBtn.classList.remove("from-violet-600", "to-cyan-500");
            loginBtn.classList.add("bg-red-500");

            welcomeMessage.textContent = "Invalid email or password. Please try again.";
            welcomeMessage.classList.add("text-red-400");

            // Shake animation on the card
            const card = document.querySelector(".glass");
            card.style.borderColor = "rgba(239, 68, 68, 0.4)";
            card.style.boxShadow = "0 0 40px rgba(239, 68, 68, 0.15)";
            card.style.animation = "none";
            void card.offsetWidth; // trigger reflow
            card.style.animation = "shake 0.5s ease";

            // Reset button after 2 seconds
            setTimeout(() => {
                loginBtn.textContent = "Sign In";
                loginBtn.disabled = false;
                loginBtn.classList.remove("bg-red-500");
                loginBtn.classList.add("from-violet-600", "to-cyan-500");
                card.style.borderColor = "rgba(255, 255, 255, 0.12)";
                card.style.boxShadow = "";
            }, 2000);
        }
    }, 1200);
});

// ── Inject shake keyframes ──
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    15%      { transform: translateX(-8px); }
    30%      { transform: translateX(8px); }
    45%      { transform: translateX(-6px); }
    60%      { transform: translateX(6px); }
    75%      { transform: translateX(-3px); }
    90%      { transform: translateX(3px); }
  }
`;
document.head.appendChild(style);