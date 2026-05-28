import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Zap, Heart, ArrowRight, Check } from 'lucide-react';

export default function LittleFingersModern() {
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAge, setSelectedAge] = useState(null);
  const [timeLeft, setTimeLeft] = useState(900);
  const [showOffer, setShowOffer] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showOffer) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [showOffer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setQuizStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowOffer(true);
      setSubmitted(true);
      setTimeLeft(900);
    }
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-tight bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Little Fingers
          </div>
          <button className="px-6 py-2 rounded-full bg-rose-50 text-rose-600 font-medium hover:bg-rose-100 transition text-sm">
            Отримати план
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-light leading-tight mb-6 tracking-tight">
              Спокій у дома
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text">
                за 5 хвилин
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              Практичні гри, які розвивають мовлення, моторику й логіку. А вам дарують 2 години спокою в день.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#quiz" className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-rose-200 transition-all duration-300 flex items-center gap-2 group">
              Розпочати <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </a>
            <button className="px-8 py-4 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition text-slate-900">
              Дізнатися більше
            </button>
          </div>

          {/* Visual */}
          <div className="mt-20 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-100/50 to-pink-100/50 rounded-2xl blur-2xl -z-10"></div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { emoji: '🧠', text: 'Розвиток', sub: 'Мовлення й логіка' },
                { emoji: '🎮', text: 'Гра', sub: 'Без гаджетів' },
                { emoji: '⏰', text: 'Час для себе', sub: '2 години на день' }
              ].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/40 hover:border-rose-200 transition text-center">
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <p className="font-medium text-slate-900">{item.text}</p>
                  <p className="text-sm text-slate-500 font-light">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-3">Який вік твоєї дитини?</h2>
          <p className="text-center text-slate-600 font-light mb-16">Дія потребує персоналізованого плану</p>

          {!selectedAge ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { age: '0-12', emoji: '👶', label: 'До 1 року', desc: 'Сенсорне дослідження' },
                { age: '1-3', emoji: '🧒', label: '1-3 років', desc: 'Мовлення й рух' },
                { age: '3+', emoji: '👧', label: '3+ років', desc: 'Логіка й творчість' }
              ].map((option) => (
                <button
                  key={option.age}
                  onClick={() => handleAgeSelect(option.age)}
                  className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 cursor-pointer group text-left"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition transform">{option.emoji}</div>
                  <p className="font-medium text-slate-900">{option.label}</p>
                  <p className="text-sm text-slate-500 font-light mt-1">{option.desc}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 border border-rose-100 text-center">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-light mb-3">Відмінно!</h3>
              <p className="text-slate-600 font-light mb-8">
                Залиш свій email, отримаєш персоналізований план розвитку
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Твій email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-rose-400 focus:outline-none bg-white transition font-light"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition"
                >
                  Отримати
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Pain/Solution */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Від болю до спокою</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pain */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-slate-900">Те, що втомлює</h3>
              {[
                '😴 Дитина просить гри, а ти без ідей',
                '📱 Вмикаєш мультики і відчуваєш провину',
                '🧸 Гори іграшок, але малюк нудьгує',
                '💸 Купуєш дорогі іграшки на 5 хвилин'
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl">{item.split(' ')[0]}</div>
                  <div>
                    <p className="text-slate-700 font-light">{item.substring(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-slate-900">Те, що лікує</h3>
              {[
                '☀️ Спокійне ранок без істерик',
                '🎮 Ігри 3-5 хвилин що захоплюють',
                '🏠 Тільки те, що вже є вдома',
                '😊 Твій час розслабитися й помати собою'
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl">{item.split(' ')[0]}</div>
                  <div>
                    <p className="text-slate-700 font-light">{item.substring(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">Що кажуть батьки</h2>
          <p className="text-center text-slate-600 font-light mb-16">5000+ сімей уже відчули різницю</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Марія',
                city: 'Київ',
                text: 'Дитина стала гораздо спокійніша. Вперше я можу пити каву з задоволенням',
                rating: 5
              },
              {
                name: 'Олена',
                city: 'Львів',
                text: 'Плани справді працюють. Син розвивається без дитсадка',
                rating: 5
              },
              {
                name: 'Наталія',
                city: 'Одеса',
                text: 'Зупинили істерики на 100%. Чудовий результат!',
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-rose-200 transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 font-light mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-medium text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500 font-light">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {submitted && (
        <section className="py-24 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-20 -z-10"></div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-4">
                🎉 Спеціальна пропозиція
              </div>
              <h2 className="text-4xl font-light mb-3">Твій персональний подарунок</h2>
              <p className="text-slate-600 font-light">Перший місяць майже безкоштовно</p>
            </div>

            <div className="bg-white rounded-3xl p-12 border border-rose-200 shadow-2xl shadow-rose-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div>
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex flex-col items-center justify-center p-8">
                    <div className="text-8xl mb-4">📋</div>
                    <p className="text-center font-medium text-slate-900">План розвитку дитини</p>
                    <p className="text-center text-sm text-slate-600 font-light mt-2">На весь перший місяць</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-8">
                  <div>
                    <p className="text-slate-500 line-through font-light text-lg">250 ₴</p>
                    <p className="text-5xl font-light text-rose-600 mt-1">49 ₴</p>
                    <p className="text-sm text-slate-600 font-light mt-2">за перший місяць</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium text-slate-900 mb-4">Що входить:</h3>
                    {[
                      'Плани ігор на кожен день',
                      'Розвиток мовлення й моторики',
                      'Без гаджетів і дорогих іграшок',
                      'Підтримка в Telegram чаті',
                      'Поступовий перехід на платну версію'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={20} className="text-emerald-500 flex-shrink-0" />
                        <p className="text-slate-700 font-light">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Timer */}
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
                    <p className="text-sm text-rose-700 font-medium mb-2">Пропозиція дійсна протягом:</p>
                    <p className="text-4xl font-light text-rose-600 font-mono">{formatTime(timeLeft)}</p>
                  </div>

                  <button className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-rose-200 transition">
                    Придбати за 49 ₴ →
                  </button>

                  <p className="text-xs text-slate-600 text-center font-light">
                    🔒 Безпечна оплата • Повернення коштів за 30 днів
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 aspect-square rounded-2xl flex items-center justify-center">
              <div className="text-8xl">👩‍🏫</div>
            </div>

            <div>
              <h2 className="text-4xl font-light mb-6">Привіт, я Наталя</h2>
              <div className="space-y-4 text-slate-700 font-light leading-relaxed">
                <p>
                  Я виховуюю двох доньок і знаю, що щаслива дитина – це починається зі спокійної мами.
                </p>
                <p>
                  Мої продукти – це результат досвіду, невеликої паніки й великого бажання зробити материнство легшим.
                </p>
                <p className="text-rose-600 font-medium">
                  Я вірю, що українська мова – це найкращий подарунок малюку, а гра – найкращий спосіб виховання.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-6">Готова почати?</h2>
          <p className="text-xl font-light mb-10 opacity-90">
            Тисячі мам вже відчули спокій. Твоя черга.
          </p>
          <a href="#quiz" className="inline-block px-8 py-4 bg-white text-rose-600 rounded-xl font-medium hover:shadow-lg transition">
            Розпочати безкоштовно
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="font-medium text-white mb-4">Little Fingers</p>
              <p className="text-sm font-light">Розвиток через гру</p>
            </div>
            <div>
              <p className="font-medium text-white mb-3">Контакти</p>
              <a href="#" className="text-sm font-light hover:text-white transition block">WhatsApp</a>
              <a href="#" className="text-sm font-light hover:text-white transition block mt-1">support@littlefingers.ua</a>
            </div>
            <div>
              <p className="font-medium text-white mb-3">Соцмережі</p>
              <a href="#" className="text-sm font-light hover:text-white transition block">Instagram</a>
              <a href="#" className="text-sm font-light hover:text-white transition block mt-1">Telegram</a>
            </div>
            <div>
              <p className="font-medium text-white mb-3">Документи</p>
              <a href="#" className="text-sm font-light hover:text-white transition block">Політика конфіденційності</a>
              <a href="#" className="text-sm font-light hover:text-white transition block mt-1">Умови використання</a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm font-light">
            <p>© 2026 Little Fingers. Всі права захищені.</p>
            <p className="mt-2">Зроблено з 💜 для мам</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.5px;
        }
      `}</style>
    </div>
  );
}
