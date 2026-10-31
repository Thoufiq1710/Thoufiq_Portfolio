# Mohamed Thoufiq M — 8K Interactive Animated Portfolio & Gamified Developer Platform

A futuristic, high-fidelity portfolio platform built for **Mohamed Thoufiq M** (Full Stack Developer & Technical Trainer at TAP Academy).

---

## 🎮 NEW FEATURE: Gamified Profile Photo Decryptor ("Developer Quest")

Visitors must solve a quick technical or coding challenge to unlock and view Mohamed Thoufiq's profile photo:

1. **Gated Avatar with Cyber Shield**:
   - The avatar in the hero section is initially protected by a frosted holographic shield (`backdrop-filter: blur(8px)`) with a pulsing lock badge: `🔒 LOCKED • SOLVE GAME`.
   - Clicking or touching the photo opens the **Developer Quest Modal**.

2. **Three Challenge Categories**:
   - 💻 **Option 1: Coding Challenge**
     - *Question*: What is the main logic condition for finding whether an integer variable `i` is an even number in Java / JavaScript?
     - *Options*: `i % 2 == 0` (or `i % 2 === 0`) [Correct] vs `i / 2 == 0`, `i * 2 == 0`, `i % 2 == 1`.
   - 🏛️ **Option 2: Technical Questions (OOP)**
     - *Question 1*: What are the Four Pillars of Object-Oriented Programming (OOP) in Core Java? (`Encapsulation, Inheritance, Polymorphism, Abstraction`)
     - *Question 2*: What is Encapsulation in OOP? (`Wrapping data and code together with private fields and getter/setter access`)
   - ⚡ **Option 3: Full Stack & Database MCQ**
     - *Question 1*: In MySQL, what is a Stored Procedure? (`A pre-compiled collection of SQL statements saved in the database for reuse and high performance`)
     - *Question 2*: Which SQL clause is used to eliminate duplicate rows from a query result set? (`DISTINCT`)

3. **Gamified Feedback & Celebration**:
   - **Wrong Answer**: Gentle modal shake animation + buzzer audio tone + technical hint explaining the concept.
   - **Correct Answer**: Triumphant 4-note victory chime + dynamic neon confetti explosion + decrypted profile photo reveal!
   - **Local Persistence**: Remembers the unlocked state in `localStorage` with options to "Play Another Question" or "Re-lock".
   - **Custom Photo Uploader**: A "Set Custom Photo" button enables Thoufiq to drop in any personal photo from their device, which immediately updates the avatar and saves locally.

---

## 🚀 Additional Portfolio Highlights

1. **Direct Clickable Touchpoints**:
   - **LinkedIn ID**: Touching or clicking anywhere on the LinkedIn cards/buttons immediately opens `https://www.linkedin.com/in/mohamedthoufiq-m` in a new tab. Includes a 1-click clipboard copy feature with toast notification.
   - **GitHub Profile**: Direct links to `https://github.com/Thoufiq1710`.
   - **Contact Links**: Instant email (`thoufiq17204@gmail.com`) and direct phone (`+91 9629394553`).

2. **First-Page UI/UX Experience & Gated Object Architecture**:
   - Touching any project card opens the **First-Page UI/UX Experience Modal**:
     - **Level-1 Security Clearance**: Protects the core codebase and database instances while offering full public access to the UI/UX prototype.
     - **Live First-Page Mockup**: Interactive interface simulator with sample SQL stored procedure executions (`GetOptimizedUserData.sql`) and table schema metrics.
     - **User Journey Flow**: Animated 4-step pipeline (*Entity Ingestion ➔ Normalization & Indexes ➔ Stored Procedure Synthesis ➔ Gated Object Execution*).
     - **Architecture Grid Boxes**: 4 dedicated bento grid boxes detailing Database Normalization (3NF), Stored Procedure Optimization, REST API Pipeline, and Security Clearance.

3. **8K-Quality Infographic Visual**:
   - Cinematic 8K-equivalent architecture infographic visual (`infographic-8k.jpg`).
   - Interactive full-screen Lightbox Inspector with zoom and direct download.

4. **Dynamic Fluid Animations & Micro-Interactions**:
   - Constellation particle canvas background reacting to cursor proximity.
   - Rotating neon gradient borders (`conic-gradient`) on Bento Grid cards.
   - Interactive custom glow cursor ring and dot.
   - Web Audio API Sound Synthesizer: Subtle sci-fi sound effects on hover and click (toggleable on/off).

5. **Complete Resume Integration**:
   - Professional summary, B.Tech IT education (CGPA: 8.36), and TAP Academy Technical Trainer role.
   - 4-College Campus Full-Stack Training engagements.
   - Categorized skills: Core Java (OOP), Frontend (HTML, CSS, JS, MERN), Backend REST APIs, and MySQL Stored Procedures.
   - Print/Save PDF Resume button with print-optimized CSS layout.

---

## 💻 How to Run & View

### Option 1: Direct Browser Open (Instant)
Open in any browser:
```
file:///C:/Users/thouf/.gemini/antigravity/scratch/portfolio/index.html
```

### Option 2: Local Node HTTP Server (Zero Dependencies)
```powershell
cd C:\Users\thouf\.gemini\antigravity\scratch\portfolio
node server.js
```
Then visit: `http://localhost:3000`
