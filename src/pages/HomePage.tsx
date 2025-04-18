import { motion } from "framer-motion";
import heroImg from "../assets/hero-help.jpg";

const questions = [
  {
    id: 1,
    user: "Emma",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    subject: "Mathématiques",
    question: "Comment résoudre une équation du second degré ?",
    points: 12,
    status: "En attente de réponse"
  },
  {
    id: 2,
    user: "Lucas",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    subject: "Physique",
    question: "Pourquoi la lumière se déplace-t-elle plus vite que le son ?",
    points: 8,
    status: "Répondu"
  },
  {
    id: 3,
    user: "Sofia",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    subject: "Histoire",
    question: "Quelles sont les causes de la Révolution française ?",
    points: 15,
    status: "En attente de validation"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <header className="relative z-20">
        <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: "spring" }} className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-b-3xl">
          <div className="flex items-center gap-3">
            <span className="font-bold text-indigo-700 text-2xl tracking-tight">AideDevoirs</span>
          </div>
          <ul className="flex gap-8 text-lg font-medium">
            <li className="relative group">
              <a href="#" className="transition-colors text-gray-700 hover:text-indigo-600">Accueil
                <span className="block h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="transition-colors text-gray-700 hover:text-indigo-600">Questions
                <span className="block h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="transition-colors text-gray-700 hover:text-indigo-600">Classement
                <span className="block h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
          </ul>
          <button className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300">Se connecter</button>
        </motion.nav>
      </header>
      <main className="flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 px-6 lg:px-24 py-10 lg:py-20">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }} className="flex-1 flex flex-col justify-center gap-8">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold text-indigo-800 leading-tight">
            L'aide aux devoirs <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">nouvelle génération</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-2xl text-gray-700 max-w-xl">
            Pose tes questions, obtiens des réponses, progresse et gagne des points !
          </motion.p>
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="w-max px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            Poser une question
          </motion.button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }} className="flex-1 flex flex-col items-center justify-center relative">
          <motion.img src={heroImg} alt="Aide aux devoirs" className="rounded-3xl shadow-2xl w-full max-w-md object-cover" style={{ minHeight: 320 }} initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}/>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-3 rounded-xl shadow-lg flex flex-col items-center gap-2">
            <span className="font-semibold text-indigo-700 text-lg">+2000 questions résolues</span>
            <span className="text-gray-600 text-sm">Communauté active 24h/24</span>
          </motion.div>
        </motion.div>
      </main>
      <section className="bg-white/60 py-10 px-4 md:px-16 flex flex-col gap-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">Questions populaires</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {questions.map(q => (
            <motion.div key={q.id} whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px 0 rgba(80,80,180,0.15)" }} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-all duration-300">
              <div className="flex items-center gap-3">
                <img src={q.avatar} alt={q.user} className="w-10 h-10 rounded-full border-2 border-indigo-400" />
                <div>
                  <span className="font-semibold text-indigo-700">{q.user}</span>
                  <span className="ml-2 text-xs text-gray-500">{q.subject}</span>
                </div>
              </div>
              <div className="text-gray-800 text-lg font-medium">{q.question}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-indigo-600 font-bold">{q.points} pts</span>
                <span className={q.status === "Répondu" ? "text-green-600" : q.status === "En attente de validation" ? "text-yellow-600" : "text-gray-500"}>{q.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-10 px-6 md:px-24 mt-10 rounded-t-3xl overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-2xl tracking-tight">AideDevoirs</span>
            <span className="text-sm text-indigo-100"> 2025 Plateforme d'aide aux devoirs. Tous droits réservés.</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:scale-110 transition-transform duration-300"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.47V4.56A4.56 4.56 0 0 1 4.56 0h14.91A4.56 4.56 0 0 1 24 4.56ZM7.09 19.47h3.21V10.8H7.09ZM8.7 9.55a1.86 1.86 0 1 0 0-3.71 1.86 1.86 0 0 0 0 3.71Zm8.24 9.92h3.21v-4.72c0-2.27-2.69-2.1-2.69 0v4.72Zm-1.6-8.67a1.86 1.86 0 1 0 0-3.71 1.86 1.86 0 0 0 0 3.71Z"/></svg></a>
            <a href="#" className="hover:scale-110 transition-transform duration-300"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.47V4.56A4.56 4.56 0 0 1 4.56 0h14.91A4.56 4.56 0 0 1 24 4.56ZM7.09 19.47h3.21V10.8H7.09ZM8.7 9.55a1.86 1.86 0 1 0 0-3.71 1.86 1.86 0 0 0 0 3.71Zm8.24 9.92h3.21v-4.72c0-2.27-2.69-2.1-2.69 0v4.72Zm-1.6-8.67a1.86 1.86 0 1 0 0-3.71 1.86 1.86 0 0 0 0 3.71Z"/></svg></a>
            <a href="#" className="hover:scale-110 transition-transform duration-300"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.59 8.06 8.13 9.86.59.11.8-.25.8-.56v-2.09c-3.3.72-3.99-1.59-3.99-1.59-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.19.08 1.81 1.22 1.81 1.22 1.06 1.81 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.63-.3-5.39-1.31-5.39-5.84 0-1.29.46-2.34 1.21-3.17-.12-.3-.53-1.51.12-3.16 0 0 1-.32 3.3 1.21a11.44 11.44 0 0 1 6 0c2.29-1.53 3.29-1.21 3.29-1.21.65 1.65.24 2.86.12 3.16.76.83 1.21 1.88 1.21 3.17 0 4.54-2.77 5.54-5.41 5.83.43.37.81 1.1.81 2.22v3.29c0 .31.21.67.81.56C20.37 20.06 24 16.41 24 12c0-5.5-4.46-9.96-9.96-9.96Z"/></svg></a>
          </div>
          <div className="flex flex-col gap-2 text-sm text-indigo-100">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
