const BirthdayConfig = {
  // Global Settings
  birthdayPersonName: "Princess",
  musicUrl: "0628.MP3", // Custom soundtrack file
  voiceNoteUrl: "", // Optional voice note audio file path (e.g. "assets/audio/voice.mp3")

  // Chapter 2 - Memory Hunt Settings
  correctGiftIndex: 2, // 0-4 index of correct box
  wrongGiftMessages: [
    "Not this one",
    "Try again princess",
    "Almost there",
    "Keep looking"
  ],

  // Chapter 3 - Our Story Timeline Settings
  storyTimeline: [
    {
      title: "✨ The first conversation",
      text: "The beginning was simple, but somehow it stayed. One message, one smile, one tiny moment that became special.",
      photo: "story/story_1.jpg"
    },
    {
      title: "🌸 The first laugh",
      text: "That one memory that still makes me laugh whenever I think about it. Some joy does not expire.",
      photo: "story/story_2.jpg"
    },
    {
      title: "📸 Favorite memory",
      text: "A little frame of time I would keep forever. A moment frozen in time that makes me smile every single time.",
      photo: "story/story_3.jpg"
    },
    {
      title: "😂 The funniest moment",
      text: "The absolute funniest thing we shared. Let's keep making goofy memories together.",
      photo: "story/story_4.jpg"
    },
    {
      title: "❤️ A day I'll never forget",
      text: "The kind of memory that feels soft in the heart, like it was made to be remembered on difficult days.",
      photo: "story/story_5.jpg"
    },
    {
      title: "🌙 Today",
      text: "Today is about you. Your heart, your smile, your presence, and the quiet light you bring into this world.",
      photo: "story/story_6.jpg"
    }
  ],

  // Chapter 4 - Birthday Letter Settings
  letterText: "С днем ​​рождения, Олечка. Надеюсь, этот маленький сюрприз станет для тебя теплым объятием сквозь экран. Ты делаешь обычные дни мягче, маленькие мгновения — ярче, а жизнь — чуточку волшебнее. Мне хотелось подарить тебе что-то особенное: неспешное, неслучайное, не просто очередное поздравление. Что-то, созданное только для тебя. Пусть сегодня ты почувствуешь, как сильно тебя любят и как бережно чествуют, пусть вспомнишь, что твое существование значит больше, чем могут выразить любые слова.",
  letterSignature: "От всего сердца",

  // Chapter 5 - Surprise Box Settings
  floatingMemories: [
    { caption: "Your smile ✨", photo: "surprise/your_smile.jpg" },
    { caption: "That day 📸", photo: "surprise/that_day.jpg" },
    { caption: "Us ❤️", photo: "surprise/us.jpg" },
    { caption: "Always 🌙", photo: "surprise/always.jpg" }
  ],

  // Chapter 6 - Ending Text Sequence
  endingLines: [
    "One last thing...",
    "Thank you for existing.",
    "Happy Birthday ❤️",
    "The gift was never this website...",
    "It was the smile I hoped it would bring to you."
  ]
};
