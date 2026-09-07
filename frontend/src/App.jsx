import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("welcome");

  const goHome = () => setScreen("home");

  if (screen === "welcome") {
    return <WelcomeScreen onStart={goHome} />;
  }

  if (screen === "games") {
    return <GamesScreen onBack={goHome} onOpenGame={(game) => setScreen(game)} />;
  }

  if (screen === "memory-game") {
    return <MemoryGame onBack={() => setScreen("games")} />;
  }

  if (screen === "sequence-game") {
    return <SequenceGame onBack={() => setScreen("games")} />;
  }

  if (screen === "vault") {
    return <MemoryVault onBack={goHome} />;
  }

  if (screen === "voice") {
    return <VoiceAssistant onBack={goHome} />;
  }

  if (screen === "progress") {
    return <ProgressScreen onBack={goHome} />;
  }

  if (screen === "caregiver") {
    return <CaregiverDashboard onBack={goHome} />;
  }

  if (screen === "profile") {
    return <ProfileScreen onBack={goHome} />;
  }

  return (
    <HomeScreen
      onGames={() => setScreen("games")}
      onVault={() => setScreen("vault")}
      onVoice={() => setScreen("voice")}
      onProgress={() => setScreen("progress")}
      onCaregiver={() => setScreen("caregiver")}
      onProfile={() => setScreen("profile")}
    />
  );
}

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <div style={styles.logo}>
      <div style={styles.logoIcon}>🧠</div>
      <div>
        <div style={styles.logoText}>NeuroSaathi</div>
        <div style={styles.logoSubtext}>AI Cognitive Companion</div>
      </div>
    </div>
  );
}

/* =========================
   WELCOME
========================= */

function WelcomeScreen({ onStart }) {
  return (
    <div style={styles.welcomePage}>
      <div style={styles.welcomeCard}>
        <Logo />

        <div style={styles.welcomeBrain}>🧠</div>

        <h1 style={styles.welcomeTitle}>
          Your Mind.
          <br />
          Your Memories.
          <br />
          Your Saathi.
        </h1>

        <p style={styles.welcomeText}>
          A simple AI-powered cognitive companion designed to support
          memory, daily activities and meaningful connections.
        </p>

        <div style={styles.welcomeFeatures}>
          <div style={styles.featurePill}>🧩 Cognitive Games</div>
          <div style={styles.featurePill}>💭 Memories</div>
          <div style={styles.featurePill}>🎙️ Voice Support</div>
        </div>

        <button style={styles.primaryButton} onClick={onStart}>
          Get Started →
        </button>

        <p style={styles.smallNote}>
          Assist • Personalize • Monitor
        </p>
      </div>
    </div>
  );
}

/* =========================
   HOME
========================= */

function HomeScreen({
  onGames,
  onVault,
  onVoice,
  onProgress,
  onCaregiver,
  onProfile,
}) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Logo />

        <button style={styles.profileButton} onClick={onProfile}>
          👤
        </button>
      </header>

      <main style={styles.container}>
        <div style={styles.greeting}>
          <div>
            <p style={styles.eyebrow}>GOOD MORNING</p>
            <h1 style={styles.mainTitle}>Hello, Ramesh 👋</h1>
            <p style={styles.subtitle}>
              Let’s give your mind a little exercise today.
            </p>
          </div>

          <div style={styles.streakBox}>
            <span style={styles.streakIcon}>🔥</span>
            <strong>7</strong>
            <span>day streak</span>
          </div>
        </div>

        <div style={styles.baselineCard}>
          <div style={styles.baselineIcon}>✨</div>
          <div style={styles.baselineContent}>
            <h3 style={styles.cardTitle}>Today’s Cognitive Plan</h3>
            <p style={styles.cardText}>
              Your activities are personalized based on your recent progress.
            </p>
          </div>
          <button style={styles.smallPrimaryButton} onClick={onGames}>
            Start
          </button>
        </div>

        <h2 style={styles.sectionTitle}>What would you like to do?</h2>

        <div style={styles.cardGrid}>
          <DashboardCard
            icon="🧩"
            title="Cognitive Games"
            description="Train memory, attention and thinking."
            button="Play Now"
            onClick={onGames}
          />

          <DashboardCard
            icon="💭"
            title="My Memories"
            description="Keep important people and memories close."
            button="Open Vault"
            onClick={onVault}
          />

          <DashboardCard
            icon="🎙️"
            title="Voice Saathi"
            description="Talk naturally with your AI companion."
            button="Talk"
            onClick={onVoice}
          />

          <DashboardCard
            icon="📈"
            title="My Progress"
            description="See your daily cognitive activity."
            button="View Progress"
            onClick={onProgress}
          />
        </div>

        <div style={styles.quickRow}>
          <button style={styles.quickButton} onClick={onCaregiver}>
            👨‍👩‍👧 Caregiver Dashboard
          </button>

          <button style={styles.quickButton} onClick={onProfile}>
            ⚙️ My Profile
          </button>
        </div>

        <div style={styles.safetyCard}>
          <span style={styles.safetyIcon}>🛡️</span>
          <div>
            <strong style={styles.safetyTitle}>Designed with care</strong>
            <p style={styles.safetyText}>
              NeuroSaathi supports cognitive wellbeing and does not replace
              professional medical diagnosis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   DASHBOARD CARD
========================= */

function DashboardCard({
  icon,
  title,
  description,
  button,
  onClick,
}) {
  return (
    <div style={styles.dashboardCard}>
      <div style={styles.dashboardIcon}>{icon}</div>
      <h3 style={styles.dashboardTitle}>{title}</h3>
      <p style={styles.dashboardDescription}>{description}</p>

      <button style={styles.cardButton} onClick={onClick}>
        {button} →
      </button>
    </div>
  );
}

/* =========================
   GAMES
========================= */

function GamesScreen({ onBack, onOpenGame }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Back
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.container}>
        <div style={styles.pageHeader}>
          <p style={styles.eyebrow}>COGNITIVE TRAINING</p>
          <h1 style={styles.pageTitle}>Choose an Activity 🧩</h1>
          <p style={styles.subtitle}>
            Short, simple activities designed to keep your mind active.
          </p>
        </div>

        <div style={styles.gameGrid}>
          <GameCard
            icon="🧠"
            title="Memory Match"
            level="Easy"
            duration="5 min"
            description="Find matching pairs and exercise visual memory."
            onClick={() => onOpenGame("memory-game")}
          />

          <GameCard
            icon="🔢"
            title="Sequence Challenge"
            level="Easy"
            duration="3 min"
            description="Remember the sequence and repeat it correctly."
            onClick={() => onOpenGame("sequence-game")}
          />

          <GameCard
            icon="👨‍👩‍👧"
            title="People & Names"
            level="Coming Soon"
            duration="5 min"
            description="Practice remembering familiar people and names."
            disabled
          />

          <GameCard
            icon="🎯"
            title="Attention Focus"
            level="Coming Soon"
            duration="4 min"
            description="Simple activities to practice attention and focus."
            disabled
          />
        </div>
      </main>
    </div>
  );
}

function GameCard({
  icon,
  title,
  level,
  duration,
  description,
  onClick,
  disabled,
}) {
  return (
    <div style={styles.gameCard}>
      <div style={styles.gameIcon}>{icon}</div>

      <div style={styles.gameTopRow}>
        <span style={styles.levelBadge}>{level}</span>
        <span style={styles.duration}>⏱ {duration}</span>
      </div>

      <h3 style={styles.gameTitle}>{title}</h3>

      <p style={styles.gameDescription}>{description}</p>

      <button
        style={{
          ...styles.gameButton,
          ...(disabled ? styles.disabledButton : {}),
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? "Coming Soon" : "Start Activity →"}
      </button>
    </div>
  );
}

/* =========================
   MEMORY GAME
========================= */

function MemoryGame({ onBack }) {
  const symbols = ["🍎", "🌸", "⭐", "🦋"];

  const createCards = () =>
    [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        flipped: false,
        matched: false,
      }));

  const [cards, setCards] = useState(createCards);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleCardClick = (index) => {
    if (selected.length === 2) return;
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;

    const newSelected = [...selected, index];

    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves((value) => value + 1);

      const [first, second] = newSelected;

      if (newCards[first].symbol === newCards[second].symbol) {
        newCards[first].matched = true;
        newCards[second].matched = true;

        setCards(newCards);
        setSelected([]);

        if (newCards.every((card) => card.matched)) {
          setCompleted(true);
        }
      } else {
        setTimeout(() => {
          setCards((current) =>
            current.map((card, cardIndex) =>
              cardIndex === first || cardIndex === second
                ? { ...card, flipped: false }
                : card
            )
          );

          setSelected([]);
        }, 700);
      }
    }
  };

  const restart = () => {
    setCards(createCards());
    setSelected([]);
    setMoves(0);
    setCompleted(false);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Games
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.gameContainer}>
        <div style={styles.gameHeader}>
          <p style={styles.eyebrow}>MEMORY TRAINING</p>
          <h1 style={styles.pageTitle}>Memory Match 🧠</h1>
          <p style={styles.subtitle}>
            Find all matching pairs.
          </p>
        </div>

        <div style={styles.scoreRow}>
          <div style={styles.scoreBox}>
            <span>Moves</span>
            <strong>{moves}</strong>
          </div>

          <div style={styles.scoreBox}>
            <span>Pairs</span>
            <strong>
              {cards.filter((card) => card.matched).length / 2}/4
            </strong>
          </div>
        </div>

        {completed && (
          <div style={styles.successCard}>
            <div style={styles.successEmoji}>🎉</div>
            <h2 style={styles.successTitle}>Well Done!</h2>
            <p style={styles.successText}>
              You completed the Memory Match activity in {moves} moves.
            </p>

            <button style={styles.primaryButton} onClick={restart}>
              Play Again
            </button>
          </div>
        )}

        {!completed && (
          <div style={styles.memoryGrid}>
            {cards.map((card, index) => (
              <button
                key={card.id}
                style={{
                  ...styles.memoryCard,
                  ...(card.flipped || card.matched
                    ? styles.memoryCardFlipped
                    : {}),
                }}
                onClick={() => handleCardClick(index)}
              >
                {card.flipped || card.matched ? card.symbol : "?"}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================
   SEQUENCE GAME
========================= */

function SequenceGame({ onBack }) {
  const sequence = ["🔴", "🔵", "🟢", "🟡"];
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState(
    "Watch carefully, then repeat the sequence."
  );
  const [userSequence, setUserSequence] = useState([]);
  const [score, setScore] = useState(0);

  const startSequence = () => {
    setActive(true);
    setUserSequence([]);
    setMessage("Remember the sequence...");

    setTimeout(() => {
      setActive(false);
      setMessage("Now tap the colors in the correct order.");
    }, 2000);
  };

  const selectColor = (color) => {
    if (active) return;

    const next = [...userSequence, color];
    setUserSequence(next);

    if (next.length === sequence.length) {
      const correct = next.every(
        (item, index) => item === sequence[index]
      );

      if (correct) {
        setScore((value) => value + 1);
        setMessage("Excellent! You remembered it correctly. 🎉");
      } else {
        setMessage("Good try! Let’s practice once more.");
      }

      setTimeout(() => {
        setUserSequence([]);
      }, 1200);
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Games
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.gameContainer}>
        <div style={styles.gameHeader}>
          <p style={styles.eyebrow}>MEMORY TRAINING</p>
          <h1 style={styles.pageTitle}>Sequence Challenge 🔢</h1>
          <p style={styles.subtitle}>{message}</p>
        </div>

        <div style={styles.sequenceScore}>
          Score: <strong>{score}</strong>
        </div>

        <div style={styles.sequenceDisplay}>
          {sequence.map((color, index) => (
            <div
              key={index}
              style={{
                ...styles.sequenceCircle,
                opacity: active ? 1 : 0.45,
              }}
            >
              {color}
            </div>
          ))}
        </div>

        <button style={styles.primaryButton} onClick={startSequence}>
          {active ? "Remember..." : "Show Sequence"}
        </button>

        <h3 style={styles.chooseTitle}>Repeat the sequence</h3>

        <div style={styles.colorGrid}>
          {sequence.map((color) => (
            <button
              key={color}
              style={styles.colorButton}
              onClick={() => selectColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

/* =========================
   MEMORY VAULT
========================= */

function MemoryVault({ onBack }) {
  const memories = [
    {
      icon: "👨‍👩‍👧",
      title: "My Family",
      text: "People who are special to me.",
    },
    {
      icon: "🏠",
      title: "My Home",
      text: "Important places and moments.",
    },
    {
      icon: "🎂",
      title: "Special Moments",
      text: "Birthdays, celebrations and memories.",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Home
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.container}>
        <div style={styles.pageHeader}>
          <p style={styles.eyebrow}>PERSONAL MEMORY VAULT</p>
          <h1 style={styles.pageTitle}>My Memories 💭</h1>
          <p style={styles.subtitle}>
            Keep meaningful memories organized in one safe place.
          </p>
        </div>

        <div style={styles.memoryVaultHero}>
          <div style={styles.vaultLargeIcon}>💭</div>
          <div>
            <h2 style={styles.vaultHeroTitle}>Your memories matter.</h2>
            <p style={styles.vaultHeroText}>
              NeuroSaathi can help organize important memories for easier
              access and meaningful conversations.
            </p>
          </div>
        </div>

        <div style={styles.vaultGrid}>
          {memories.map((memory) => (
            <div key={memory.title} style={styles.vaultCard}>
              <div style={styles.vaultIcon}>{memory.icon}</div>
              <h3 style={styles.vaultCardTitle}>{memory.title}</h3>
              <p style={styles.vaultCardText}>{memory.text}</p>
              <button style={styles.outlineButton}>View Memories →</button>
            </div>
          ))}
        </div>

        <button style={styles.primaryButton}>
          + Add New Memory
        </button>
      </main>
    </div>
  );
}

/* =========================
   VOICE ASSISTANT
========================= */

function VoiceAssistant({ onBack }) {
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState(
    "Hello! I’m NeuroSaathi. How can I help you today?"
  );

  const toggleVoice = () => {
    if (listening) {
      setListening(false);
      setMessage("I’m here whenever you need me.");
    } else {
      setListening(true);
      setMessage("Listening... Tell me what you need.");
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Home
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.voiceContainer}>
        <p style={styles.eyebrow}>VOICE-FIRST ASSISTANCE</p>
        <h1 style={styles.pageTitle}>Voice Saathi 🎙️</h1>

        <p style={styles.subtitle}>
          Talk naturally. NeuroSaathi is here to listen and assist.
        </p>

        <div
          style={{
            ...styles.voiceOrb,
            ...(listening ? styles.voiceOrbActive : {}),
          }}
        >
          <span>🎙️</span>
        </div>

        <div style={styles.voiceMessage}>
          <p>{message}</p>
        </div>

        <button style={styles.voiceButton} onClick={toggleVoice}>
          {listening ? "Stop Listening" : "Tap to Talk"}
        </button>

        <div style={styles.voiceSuggestions}>
          <div style={styles.suggestion}>“What is my plan today?”</div>
          <div style={styles.suggestion}>“Show my memories.”</div>
          <div style={styles.suggestion}>“Start a game.”</div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   PROGRESS
========================= */

function ProgressScreen({ onBack }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Home
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.container}>
        <div style={styles.pageHeader}>
          <p style={styles.eyebrow}>YOUR JOURNEY</p>
          <h1 style={styles.pageTitle}>My Progress 📈</h1>
          <p style={styles.subtitle}>
            Small steps every day make a difference.
          </p>
        </div>

        <div style={styles.progressSummary}>
          <div style={styles.progressStat}>
            <strong>7</strong>
            <span>Day Streak</span>
          </div>

          <div style={styles.progressStat}>
            <strong>24</strong>
            <span>Activities</span>
          </div>

          <div style={styles.progressStat}>
            <strong>86%</strong>
            <span>Completion</span>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Weekly Activity</h2>

          <div style={styles.chart}>
            {[45, 70, 55, 82, 65, 90, 76].map((height, index) => (
              <div key={index} style={styles.chartColumn}>
                <div
                  style={{
                    ...styles.chartBar,
                    height: `${height}%`,
                  }}
                />
                <span>
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.insightCard}>
          <div style={styles.insightIcon}>✨</div>
          <div>
            <h3 style={styles.insightTitle}>Your weekly insight</h3>
            <p style={styles.insightText}>
              You are maintaining a regular activity routine. Keep going!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   CAREGIVER
========================= */

function CaregiverDashboard({ onBack }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Home
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.container}>
        <div style={styles.pageHeader}>
          <p style={styles.eyebrow}>CAREGIVER VIEW</p>
          <h1 style={styles.pageTitle}>Caregiver Dashboard 👨‍👩‍👧</h1>
          <p style={styles.subtitle}>
            A simple overview of the person you care for.
          </p>
        </div>

        <div style={styles.patientCard}>
          <div style={styles.patientAvatar}>R</div>

          <div>
            <h2 style={styles.patientName}>Ramesh Kumar</h2>
            <p style={styles.patientInfo}>Patient ID: NS-1024</p>
            <span style={styles.activeBadge}>● Active today</span>
          </div>
        </div>

        <div style={styles.caregiverGrid}>
          <div style={styles.caregiverStat}>
            <span>🧩</span>
            <strong>4</strong>
            <p>Activities completed</p>
          </div>

          <div style={styles.caregiverStat}>
            <span>⏱️</span>
            <strong>18 min</strong>
            <p>Activity time</p>
          </div>

          <div style={styles.caregiverStat}>
            <span>🔥</span>
            <strong>7 days</strong>
            <p>Current streak</p>
          </div>

          <div style={styles.caregiverStat}>
            <span>💭</span>
            <strong>12</strong>
            <p>Memories stored</p>
          </div>
        </div>

        <div style={styles.reportCard}>
          <h2 style={styles.reportTitle}>Recent Activity</h2>

          <div style={styles.activityRow}>
            <span>🧠 Memory Match</span>
            <strong>Completed</strong>
          </div>

          <div style={styles.activityRow}>
            <span>🔢 Sequence Challenge</span>
            <strong>Completed</strong>
          </div>

          <div style={styles.activityRow}>
            <span>💭 Memory Vault</span>
            <strong>Updated</strong>
          </div>
        </div>

        <div style={styles.caregiverNotice}>
          <span>ℹ️</span>
          <p>
            Insights are intended to support caregivers and should not be
            interpreted as a medical diagnosis.
          </p>
        </div>
      </main>
    </div>
  );
}

/* =========================
   PROFILE
========================= */

function ProfileScreen({ onBack }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          ← Home
        </button>

        <Logo />

        <div style={{ width: "70px" }} />
      </header>

      <main style={styles.container}>
        <div style={styles.pageHeader}>
          <p style={styles.eyebrow}>PERSONAL SETTINGS</p>
          <h1 style={styles.pageTitle}>My Profile 👤</h1>
        </div>

        <div style={styles.profileCard}>
          <div style={styles.profileAvatar}>R</div>

          <h2 style={styles.profileName}>Ramesh Kumar</h2>
          <p style={styles.profileAge}>Age: 68</p>
        </div>

        <div style={styles.settingsList}>
          <div style={styles.settingRow}>
            <span>🌐</span>
            <div>
              <strong>Preferred Language</strong>
              <p>English</p>
            </div>
          </div>

          <div style={styles.settingRow}>
            <span>🔔</span>
            <div>
              <strong>Daily Reminder</strong>
              <p>9:00 AM</p>
            </div>
          </div>

          <div style={styles.settingRow}>
            <span>👨‍👩‍👧</span>
            <div>
              <strong>Caregiver</strong>
              <p>Family Member</p>
            </div>
          </div>

          <div style={styles.settingRow}>
            <span>🔒</span>
            <div>
              <strong>Privacy</strong>
              <p>Your data is handled with care.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   GLOBAL STYLES
========================= */

const styles = {
  welcomePage: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #eaf7fb 0%, #f7fbfc 50%, #eef8f5 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    boxSizing: "border-box",
  },

  welcomeCard: {
    width: "100%",
    maxWidth: "650px",
    background: "rgba(255,255,255,0.96)",
    borderRadius: "32px",
    padding: "45px 35px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(31, 78, 92, 0.12)",
    boxSizing: "border-box",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  logoIcon: {
    fontSize: "38px",
  },

  logoText: {
    fontSize: "27px",
    fontWeight: "800",
    color: "#247ba0",
    lineHeight: "1",
  },

  logoSubtext: {
    fontSize: "11px",
    color: "#6d8791",
    marginTop: "5px",
    letterSpacing: "0.5px",
  },

  welcomeBrain: {
    fontSize: "72px",
    marginTop: "35px",
  },

  welcomeTitle: {
    fontSize: "42px",
    lineHeight: "1.12",
    color: "#173b4a",
    margin: "20px 0 15px",
    fontWeight: "800",
  },

  welcomeText: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#607782",
    maxWidth: "520px",
    margin: "0 auto",
  },

  welcomeFeatures: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    margin: "25px 0",
  },

  featurePill: {
    background: "#edf8fa",
    color: "#247ba0",
    padding: "10px 15px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "600",
  },

  primaryButton: {
    border: "none",
    background: "#247ba0",
    color: "white",
    padding: "15px 28px",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(36,123,160,0.2)",
  },

  smallNote: {
    color: "#82959d",
    fontSize: "12px",
    marginTop: "18px",
    letterSpacing: "1px",
  },

  page: {
    minHeight: "100vh",
    background: "#f7fbfc",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#173b4a",
  },

  header: {
    minHeight: "82px",
    background: "white",
    borderBottom: "1px solid #e5eef1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  profileButton: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "1px solid #dbe9ed",
    background: "#f2f9fa",
    fontSize: "20px",
    cursor: "pointer",
  },

  backButton: {
    border: "none",
    background: "transparent",
    color: "#247ba0",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
    minWidth: "70px",
    textAlign: "left",
  },

  container: {
    width: "90%",
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "42px 0 60px",
  },

  gameContainer: {
    width: "90%",
    maxWidth: "850px",
    margin: "0 auto",
    padding: "42px 0 60px",
    textAlign: "center",
  },

  voiceContainer: {
    width: "90%",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "55px 0 60px",
    textAlign: "center",
  },

  greeting: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "25px",
    marginBottom: "30px",
  },

  eyebrow: {
    color: "#5c9caf",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    margin: "0 0 8px",
  },

  mainTitle: {
    fontSize: "35px",
    margin: "0 0 8px",
    fontWeight: "800",
  },

  pageTitle: {
    fontSize: "38px",
    margin: "0 0 10px",
    fontWeight: "800",
  },

  subtitle: {
    color: "#6b818a",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: 0,
  },

  streakBox: {
    background: "white",
    borderRadius: "18px",
    padding: "15px 20px",
    boxShadow: "0 8px 25px rgba(35,78,90,0.08)",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "#657d86",
  },

  streakIcon: {
    fontSize: "24px",
  },

  baselineCard: {
    background: "linear-gradient(135deg, #e7f6f9, #effaf5)",
    borderRadius: "22px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "38px",
    border: "1px solid #d9edf0",
  },

  baselineIcon: {
    fontSize: "35px",
  },

  baselineContent: {
    flex: 1,
    textAlign: "left",
  },

  cardTitle: {
    margin: "0 0 5px",
    fontSize: "18px",
  },

  cardText: {
    margin: 0,
    color: "#6a8089",
    lineHeight: "1.5",
    fontSize: "14px",
  },

  smallPrimaryButton: {
    border: "none",
    background: "#247ba0",
    color: "white",
    borderRadius: "11px",
    padding: "11px 20px",
    fontWeight: "700",
    cursor: "pointer",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "18px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  dashboardCard: {
    background: "white",
    borderRadius: "22px",
    padding: "25px",
    boxShadow: "0 8px 28px rgba(30,70,82,0.07)",
    border: "1px solid #e6eff2",
    textAlign: "left",
  },

  dashboardIcon: {
    fontSize: "38px",
    marginBottom: "12px",
  },

  dashboardTitle: {
    fontSize: "20px",
    margin: "0 0 8px",
  },

  dashboardDescription: {
    color: "#70858e",
    lineHeight: "1.5",
    minHeight: "48px",
    margin: "0 0 20px",
  },

  cardButton: {
    border: "none",
    background: "#edf7f9",
    color: "#247ba0",
    padding: "11px 16px",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },

  quickRow: {
    display: "flex",
    gap: "15px",
    marginTop: "25px",
    flexWrap: "wrap",
  },

  quickButton: {
    background: "white",
    border: "1px solid #dce9ed",
    borderRadius: "12px",
    padding: "13px 18px",
    color: "#42616d",
    fontWeight: "600",
    cursor: "pointer",
  },

  safetyCard: {
    display: "flex",
    gap: "15px",
    background: "#fffdf5",
    border: "1px solid #f1ead1",
    borderRadius: "18px",
    padding: "18px",
    marginTop: "28px",
    alignItems: "flex-start",
  },

  safetyIcon: {
    fontSize: "25px",
  },

  safetyTitle: {
    fontSize: "14px",
  },

  safetyText: {
    color: "#777b72",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: "5px 0 0",
  },

  pageHeader: {
    marginBottom: "30px",
  },

  gameHeader: {
    marginBottom: "30px",
  },

  gameGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  gameCard: {
    background: "white",
    borderRadius: "22px",
    padding: "25px",
    textAlign: "left",
    border: "1px solid #e4eef1",
    boxShadow: "0 8px 25px rgba(30,70,82,0.06)",
  },

  gameIcon: {
    fontSize: "45px",
    marginBottom: "18px",
  },

  gameTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  levelBadge: {
    background: "#eaf7ee",
    color: "#3f8b5e",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "800",
  },

  duration: {
    color: "#82939a",
    fontSize: "12px",
  },

  gameTitle: {
    fontSize: "21px",
    margin: "0 0 8px",
  },

  gameDescription: {
    color: "#71858e",
    lineHeight: "1.55",
    minHeight: "50px",
  },

  gameButton: {
    width: "100%",
    marginTop: "10px",
    border: "none",
    background: "#247ba0",
    color: "white",
    padding: "13px",
    borderRadius: "11px",
    fontWeight: "700",
    cursor: "pointer",
  },

  disabledButton: {
    background: "#e8eef0",
    color: "#819097",
    cursor: "not-allowed",
  },

  scoreRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  },

  scoreBox: {
    background: "white",
    borderRadius: "15px",
    padding: "12px 28px",
    boxShadow: "0 5px 18px rgba(30,70,82,0.07)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  memoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    maxWidth: "520px",
    margin: "0 auto",
  },

  memoryCard: {
    aspectRatio: "1",
    border: "none",
    borderRadius: "18px",
    background: "#247ba0",
    color: "white",
    fontSize: "35px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 7px 16px rgba(36,123,160,0.15)",
  },

  memoryCardFlipped: {
    background: "white",
    color: "#173b4a",
    border: "2px solid #cfe7ec",
  },

  successCard: {
    background: "white",
    borderRadius: "25px",
    padding: "35px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 10px 30px rgba(30,70,82,0.08)",
  },

  successEmoji: {
    fontSize: "55px",
  },

  successTitle: {
    fontSize: "28px",
    margin: "10px 0",
  },

  successText: {
    color: "#71858e",
    lineHeight: "1.6",
    marginBottom: "25px",
  },

  sequenceScore: {
    display: "inline-block",
    background: "white",
    padding: "12px 24px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 5px 18px rgba(30,70,82,0.06)",
  },

  sequenceDisplay: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    marginBottom: "30px",
  },

  sequenceCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f7f8",
    fontSize: "34px",
    transition: "0.3s",
  },

  chooseTitle: {
    marginTop: "35px",
    marginBottom: "18px",
  },

  colorGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  colorButton: {
    width: "70px",
    height: "70px",
    border: "1px solid #dce9ed",
    background: "white",
    borderRadius: "18px",
    fontSize: "30px",
    cursor: "pointer",
  },

  memoryVaultHero: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "linear-gradient(135deg, #edf8fa, #f2faf6)",
    padding: "25px",
    borderRadius: "22px",
    marginBottom: "25px",
  },

  vaultLargeIcon: {
    fontSize: "50px",
  },

  vaultHeroTitle: {
    margin: "0 0 7px",
    fontSize: "22px",
  },

  vaultHeroText: {
    margin: 0,
    color: "#6e838c",
    lineHeight: "1.5",
  },

  vaultGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "25px",
  },

  vaultCard: {
    background: "white",
    padding: "24px",
    borderRadius: "20px",
    border: "1px solid #e3edef",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  vaultIcon: {
    fontSize: "40px",
    marginBottom: "12px",
  },

  vaultCardTitle: {
    fontSize: "19px",
    margin: "0 0 8px",
  },

  vaultCardText: {
    color: "#72868e",
    lineHeight: "1.5",
    minHeight: "45px",
  },

  outlineButton: {
    border: "1px solid #247ba0",
    color: "#247ba0",
    background: "white",
    padding: "10px 13px",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },

  voiceOrb: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    background: "#e9f6f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "45px auto 25px",
    boxShadow: "0 0 0 18px rgba(36,123,160,0.05)",
    transition: "0.3s",
  },

  voiceOrbActive: {
    transform: "scale(1.08)",
    boxShadow:
      "0 0 0 25px rgba(36,123,160,0.08), 0 0 0 45px rgba(36,123,160,0.04)",
  },

  voiceOrbSpan: {
    fontSize: "60px",
  },

  voiceMessage: {
    background: "white",
    borderRadius: "18px",
    padding: "18px",
    color: "#536b75",
    marginBottom: "22px",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  voiceButton: {
    border: "none",
    background: "#247ba0",
    color: "white",
    padding: "15px 30px",
    borderRadius: "50px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },

  voiceSuggestions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  suggestion: {
    background: "#edf7f9",
    color: "#4d7886",
    borderRadius: "50px",
    padding: "10px 14px",
    fontSize: "13px",
  },

  progressSummary: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    marginBottom: "22px",
  },

  progressStat: {
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  progressStatStrong: {
    fontSize: "30px",
  },

  chartCard: {
    background: "white",
    borderRadius: "22px",
    padding: "28px",
    marginBottom: "22px",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  chartTitle: {
    margin: "0 0 25px",
  },

  chart: {
    height: "210px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    gap: "15px",
    borderBottom: "1px solid #dce8eb",
  },

  chartColumn: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "8px",
    color: "#82959d",
    fontSize: "12px",
  },

  chartBar: {
    width: "70%",
    maxWidth: "45px",
    minHeight: "15px",
    background: "#72b7c8",
    borderRadius: "10px 10px 0 0",
  },

  insightCard: {
    background: "#f1faf6",
    border: "1px solid #d8eee4",
    borderRadius: "20px",
    padding: "20px",
    display: "flex",
    gap: "15px",
  },

  insightIcon: {
    fontSize: "30px",
  },

  insightTitle: {
    margin: "0 0 5px",
  },

  insightText: {
    margin: 0,
    color: "#668078",
  },

  patientCard: {
    background: "white",
    borderRadius: "22px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "22px",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  patientAvatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#e8f5f8",
    color: "#247ba0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    fontWeight: "800",
  },

  patientName: {
    margin: "0 0 5px",
  },

  patientInfo: {
    margin: "0 0 8px",
    color: "#778a92",
  },

  activeBadge: {
    color: "#41845b",
    fontSize: "12px",
    fontWeight: "700",
  },

  caregiverGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "22px",
  },

  caregiverStat: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  reportCard: {
    background: "white",
    borderRadius: "22px",
    padding: "25px",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  reportTitle: {
    marginTop: 0,
  },

  activityRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #edf1f2",
    color: "#5e747d",
  },

  caregiverNotice: {
    display: "flex",
    gap: "10px",
    background: "#fffdf5",
    border: "1px solid #f0e8cc",
    borderRadius: "16px",
    padding: "15px",
    marginTop: "20px",
    color: "#77776e",
    fontSize: "13px",
  },

  profileCard: {
    background: "white",
    borderRadius: "24px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
    marginBottom: "20px",
  },

  profileAvatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#e8f5f8",
    color: "#247ba0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    fontSize: "38px",
    fontWeight: "800",
  },

  profileName: {
    margin: "0 0 5px",
  },

  profileAge: {
    color: "#71858e",
    margin: 0,
  },

  settingsList: {
    background: "white",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(30,70,82,0.05)",
  },

  settingRow: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "20px",
    borderBottom: "1px solid #edf1f2",
  },
};

/* =========================
   RESPONSIVE STYLES
========================= */

if (typeof document !== "undefined") {
  const styleId = "neurosaathi-responsive-styles";

  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;

    styleElement.innerHTML = `
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #f7fbfc;
      }

      button {
        font-family: inherit;
      }

      @media (max-width: 800px) {
        .dummy {
          display: none;
        }
      }
    `;

    document.head.appendChild(styleElement);
  }
}

export default App;