import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [game, setGame] = useState(null);

  const startGame = (type) => {
    setGame(type);
    setScreen("game");
  };

  if (screen === "welcome") {
    return <WelcomeScreen onStart={() => setScreen("home")} />;
  }

  if (screen === "home") {
    return (
      <HomeScreen
        onGames={() => setScreen("games")}
        onMemory={() => startGame("memory")}
        onProgress={() => setScreen("progress")}
        onVault={() => setScreen("vault")}
        onVoice={() => setScreen("voice")}
        onBack={() => setScreen("welcome")}
      />
    );
  }

  if (screen === "games") {
    return (
      <GamesScreen
        onBack={() => setScreen("home")}
        onStartGame={startGame}
      />
    );
  }

  if (screen === "game") {
    return (
      <MemoryGame
        onBack={() => setScreen("games")}
        game={game}
      />
    );
  }

  if (screen === "progress") {
    return <ProgressScreen onBack={() => setScreen("home")} />;
  }

  if (screen === "vault") {
    return <VaultScreen onBack={() => setScreen("home")} />;
  }

  if (screen === "voice") {
    return <VoiceScreen onBack={() => setScreen("home")} />;
  }

  return null;
}

/* =========================
   WELCOME
========================= */

function WelcomeScreen({ onStart }) {
  return (
    <div style={styles.page}>
      <div style={styles.welcomeCard}>
        <div style={styles.logo}></div>

        <h1 style={styles.title}>NeuroSaathi</h1>

        <p style={styles.tagline}>
          Your AI Cognitive Companion
        </p>

        <p style={styles.description}>
          Personalized cognitive activities, memory assistance
          and caregiver support — designed with simplicity in mind.
        </p>

        <button style={styles.primaryButton} onClick={onStart}>
          Get Started →
        </button>

        <p style={styles.smallText}>
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
  onMemory,
  onProgress,
  onVault,
  onVoice,
  onBack,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.topBar}>
          <button style={styles.backButton} onClick={onBack}>
            ←
          </button>

          <div>
            <h2 style={styles.headerTitle}>Good Morning 👋</h2>
            <p style={styles.headerSubtitle}>
              Let's keep your mind active today.
            </p>
          </div>

          <div style={styles.profile}>👤</div>
        </div>

        <div style={styles.dailyCard}>
          <div>
            <p style={styles.cardLabel}>TODAY'S PROGRESS</p>
            <h2 style={{ margin: "6px 0" }}>You're doing great!</h2>
            <p style={{ margin: 0 }}>
              Complete one activity to maintain your daily streak.
            </p>
          </div>

          <div style={styles.progressCircle}>
            <strong>60%</strong>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>What would you like to do?</h2>

        <div style={styles.grid}>

          <DashboardCard
            icon="🎮"
            title="Cognitive Games"
            text="Train memory, attention and thinking."
            onClick={onGames}
          />

          <DashboardCard
            icon="🧠"
            title="Memory Vault"
            text="Keep important people and memories safe."
            onClick={onVault}
          />

          <DashboardCard
            icon="🎙️"
            title="Voice Assistant"
            text="Talk naturally with NeuroSaathi."
            onClick={onVoice}
          />

          <DashboardCard
            icon="📊"
            title="My Progress"
            text="View activities and personal progress."
            onClick={onProgress}
          />

        </div>

        <div style={styles.quickCard}>
          <div>
            <p style={styles.cardLabel}>RECOMMENDED FOR YOU</p>
            <h3 style={{ margin: "5px 0" }}>
              Memory Match
            </h3>
            <p style={{ margin: 0 }}>
              A short activity to exercise your memory.
            </p>
          </div>

          <button
            style={styles.secondaryButton}
            onClick={onMemory}
          >
            Play
          </button>
        </div>

        <p style={styles.footer}>
          NeuroSaathi supports cognitive wellbeing and does not replace
          professional medical diagnosis.
        </p>

      </div>
    </div>
  );
}

/* =========================
   DASHBOARD CARD
========================= */

function DashboardCard({ icon, title, text, onClick }) {
  return (
    <button style={styles.dashboardCard} onClick={onClick}>
      <div style={styles.iconBox}>{icon}</div>

      <div style={{ textAlign: "left" }}>
        <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
        <p style={styles.cardText}>{text}</p>
      </div>

      <span style={styles.arrow}>→</span>
    </button>
  );
}

/* =========================
   GAMES
========================= */

function GamesScreen({ onBack, onStartGame }) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.topBar}>
          <button style={styles.backButton} onClick={onBack}>
            ←
          </button>

          <div>
            <h2 style={styles.headerTitle}>Cognitive Games</h2>
            <p style={styles.headerSubtitle}>
              Choose an activity to begin.
            </p>
          </div>
        </div>

        <div style={styles.gameList}>

          <GameOption
            icon="🧩"
            title="Memory Match"
            description="Find matching pairs and exercise your memory."
            difficulty="Easy"
            onClick={() => onStartGame("memory")}
          />

          <GameOption
            icon="🔢"
            title="Sequence Challenge"
            description="Remember the order of numbers and patterns."
            difficulty="Medium"
            onClick={() => alert("Sequence Challenge coming soon!")}
          />

          <GameOption
            icon="👨‍👩‍👧"
            title="People & Names"
            description="Practice remembering familiar people."
            difficulty="Easy"
            onClick={() => alert("People & Names coming soon!")}
          />

        </div>

      </div>
    </div>
  );
}

function GameOption({
  icon,
  title,
  description,
  difficulty,
  onClick,
}) {
  return (
    <button style={styles.gameOption} onClick={onClick}>
      <div style={styles.bigIcon}>{icon}</div>

      <div style={{ flex: 1, textAlign: "left" }}>
        <h3 style={{ margin: "0 0 5px" }}>{title}</h3>

        <p style={styles.cardText}>{description}</p>

        <span style={styles.badge}>{difficulty}</span>
      </div>

      <span style={styles.arrow}>→</span>
    </button>
  );
}

/* =========================
   MEMORY GAME
========================= */

function MemoryGame({ onBack }) {
  const symbols = ["🍎", "🌸", "⭐", "🐘"];

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
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleCardClick = (id) => {
    if (selected.length === 2) return;

    const clicked = cards.find((card) => card.id === id);

    if (!clicked || clicked.flipped || clicked.matched) return;

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );

    setCards(newCards);

    const newSelected = [...selected, id];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);

      const first = newCards.find(
        (card) => card.id === newSelected[0]
      );

      const second = newCards.find(
        (card) => card.id === newSelected[1]
      );

      if (first.symbol === second.symbol) {
        setTimeout(() => {
          setCards((current) =>
            current.map((card) =>
              newSelected.includes(card.id)
                ? { ...card, matched: true }
                : card
            )
          );

          setScore((s) => s + 1);
          setSelected([]);

          if (score + 1 === symbols.length) {
            setCompleted(true);
          }
        }, 500);
      } else {
        setTimeout(() => {
          setCards((current) =>
            current.map((card) =>
              newSelected.includes(card.id)
                ? { ...card, flipped: false }
                : card
            )
          );

          setSelected([]);
        }, 900);
      }
    }
  };

  const restartGame = () => {
    setCards(createCards());
    setSelected([]);
    setScore(0);
    setMoves(0);
    setCompleted(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.topBar}>
          <button style={styles.backButton} onClick={onBack}>
            ←
          </button>

          <div>
            <h2 style={styles.headerTitle}>Memory Match 🧠</h2>
            <p style={styles.headerSubtitle}>
              Find all matching pairs.
            </p>
          </div>
        </div>

        <div style={styles.stats}>
          <div>
            <strong>Pairs</strong>
            <span>{score}/4</span>
          </div>

          <div>
            <strong>Moves</strong>
            <span>{moves}</span>
          </div>
        </div>

        {completed ? (
          <div style={styles.successCard}>
            <div style={{ fontSize: 55 }}>🎉</div>

            <h2>Excellent!</h2>

            <p>
              You completed the Memory Match game in {moves} moves.
            </p>

            <button
              style={styles.primaryButton}
              onClick={restartGame}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div style={styles.memoryGrid}>
            {cards.map((card) => (
              <button
                key={card.id}
                style={{
                  ...styles.memoryCard,
                  ...(card.flipped || card.matched
                    ? styles.memoryCardOpen
                    : {}),
                }}
                onClick={() => handleCardClick(card.id)}
              >
                {card.flipped || card.matched ? card.symbol : "?"}
              </button>
            ))}
          </div>
        )}

        <button style={styles.restartButton} onClick={restartGame}>
          Restart Game
        </button>

      </div>
    </div>
  );
}

/* =========================
   PROGRESS
========================= */

function ProgressScreen({ onBack }) {
  return (
    <SimpleScreen
      title="My Progress"
      subtitle="Your cognitive activity overview."
      icon="📊"
      onBack={onBack}
    >
      <div style={styles.progressPanel}>
        <h3>This Week</h3>

        <div style={styles.progressRow}>
          <span>Cognitive Games</span>
          <strong>5 sessions</strong>
        </div>

        <div style={styles.progressRow}>
          <span>Memory Activities</span>
          <strong>82%</strong>
        </div>

        <div style={styles.progressRow}>
          <span>Daily Streak</span>
          <strong>4 days 🔥</strong>
        </div>
      </div>
    </SimpleScreen>
  );
}

/* =========================
   MEMORY VAULT
========================= */

function VaultScreen({ onBack }) {
  return (
    <SimpleScreen
      title="Memory Vault"
      subtitle="Your personal collection of memories."
      icon="🧠"
      onBack={onBack}
    >
      <div style={styles.memoryVault}>
        <div style={styles.memoryItem}>
          <span>👨‍👩‍👧</span>
          <div>
            <strong>My Family</strong>
            <p>People who are important to me.</p>
          </div>
        </div>

        <div style={styles.memoryItem}>
          <span>🏡</span>
          <div>
            <strong>My Home</strong>
            <p>A familiar place filled with memories.</p>
          </div>
        </div>

        <div style={styles.memoryItem}>
          <span>📅</span>
          <div>
            <strong>Important Dates</strong>
            <p>Birthdays and special occasions.</p>
          </div>
        </div>
      </div>
    </SimpleScreen>
  );
}

/* =========================
   VOICE
========================= */

function VoiceScreen({ onBack }) {
  return (
    <SimpleScreen
      title="Voice Assistant"
      subtitle="Talk naturally with NeuroSaathi."
      icon="🎙️"
      onBack={onBack}
    >
      <div style={styles.voicePanel}>
        <div style={styles.voiceCircle}>🎙️</div>

        <h2>How can I help?</h2>

        <p>
          You can ask about your memories, activities or daily routine.
        </p>

        <button
          style={styles.primaryButton}
          onClick={() =>
            alert("Voice interaction prototype activated.")
          }
        >
          Start Listening
        </button>
      </div>
    </SimpleScreen>
  );
}

/* =========================
   SIMPLE SCREEN
========================= */

function SimpleScreen({
  title,
  subtitle,
  icon,
  onBack,
  children,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.topBar}>
          <button style={styles.backButton} onClick={onBack}>
            ←
          </button>

          <div>
            <h2 style={styles.headerTitle}>{title}</h2>
            <p style={styles.headerSubtitle}>{subtitle}</p>
          </div>

          <div style={styles.profile}>{icon}</div>
        </div>

        {children}

      </div>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #eef7ff 0%, #f8fbff 50%, #eefaf5 100%)",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#17324d",
    padding: "30px 18px",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  welcomeCard: {
    maxWidth: "650px",
    margin: "70px auto",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "28px",
    padding: "55px 35px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(35,70,100,0.12)",
  },

  logo: {
    fontSize: "70px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "48px",
    margin: "0",
    fontWeight: "800",
    color: "#174f6e",
  },

  tagline: {
    fontSize: "20px",
    color: "#4e7185",
    marginTop: "8px",
  },

  description: {
    maxWidth: "500px",
    margin: "25px auto",
    lineHeight: "1.7",
    color: "#5b6f7c",
  },

  primaryButton: {
    border: "none",
    background: "#247ba0",
    color: "white",
    padding: "14px 28px",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(36,123,160,0.2)",
  },

  secondaryButton: {
    border: "none",
    background: "#e7f4f8",
    color: "#247ba0",
    padding: "11px 22px",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },

  smallText: {
    marginTop: "20px",
    color: "#78909c",
    fontSize: "13px",
  },

  topBar: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px",
  },

  backButton: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "none",
    background: "white",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
  },

  headerTitle: {
    margin: 0,
    fontSize: "25px",
  },

  headerSubtitle: {
    margin: "4px 0 0",
    color: "#71838f",
  },

  profile: {
    marginLeft: "auto",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "21px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
  },

  dailyCard: {
    background: "#247ba0",
    color: "white",
    borderRadius: "22px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
  },

  cardLabel: {
    fontSize: "11px",
    letterSpacing: "1px",
    fontWeight: "800",
    opacity: 0.75,
    margin: 0,
  },

  progressCircle: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "white",
    color: "#247ba0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  sectionTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "15px",
  },

  dashboardCard: {
    border: "none",
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  iconBox: {
    width: "52px",
    height: "52px",
    borderRadius: "15px",
    background: "#edf7fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    flexShrink: 0,
  },

  cardText: {
    color: "#71838f",
    margin: 0,
    lineHeight: "1.5",
    fontSize: "14px",
  },

  arrow: {
    marginLeft: "auto",
    fontSize: "20px",
    color: "#247ba0",
  },

  quickCard: {
    marginTop: "20px",
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  footer: {
    textAlign: "center",
    color: "#8798a2",
    fontSize: "11px",
    marginTop: "25px",
  },

  gameList: {
    display: "grid",
    gap: "15px",
  },

  gameOption: {
    border: "none",
    background: "white",
    borderRadius: "20px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  bigIcon: {
    width: "65px",
    height: "65px",
    borderRadius: "18px",
    background: "#edf7fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
  },

  badge: {
    display: "inline-block",
    marginTop: "8px",
    padding: "4px 10px",
    borderRadius: "20px",
    background: "#eaf5ee",
    color: "#43805b",
    fontSize: "11px",
    fontWeight: "700",
  },

  stats: {
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
  },

  memoryGrid: {
    maxWidth: "550px",
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
  },

  memoryCard: {
    aspectRatio: "1",
    border: "none",
    borderRadius: "18px",
    background: "#247ba0",
    color: "white",
    fontSize: "38px",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow: "0 7px 15px rgba(36,123,160,0.15)",
  },

  memoryCardOpen: {
    background: "white",
    color: "#17324d",
    boxShadow: "0 7px 20px rgba(35,70,100,0.1)",
  },

  successCard: {
    background: "white",
    borderRadius: "25px",
    padding: "45px 25px",
    textAlign: "center",
    maxWidth: "500px",
    margin: "30px auto",
    boxShadow: "0 10px 35px rgba(35,70,100,0.08)",
  },

  restartButton: {
    display: "block",
    margin: "25px auto",
    border: "none",
    background: "transparent",
    color: "#247ba0",
    cursor: "pointer",
    fontWeight: "700",
  },

  progressPanel: {
    background: "white",
    borderRadius: "22px",
    padding: "25px",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 0",
    borderBottom: "1px solid #edf1f3",
  },

  memoryVault: {
    display: "grid",
    gap: "15px",
  },

  memoryItem: {
    background: "white",
    borderRadius: "20px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  voicePanel: {
    background: "white",
    borderRadius: "25px",
    padding: "45px 25px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(35,70,100,0.07)",
  },

  voiceCircle: {
    width: "110px",
    height: "110px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    background: "#e8f5f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "45px",
  },
};

export default App;