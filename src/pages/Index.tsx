export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ТОП★</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Акции</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЫСТРО,
              <br />
              ВКУСНО, <span>ТОП!</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Сеть фастфуда, где каждый бургер — это событие. Сочное мясо, хрустящая курица и соусы от шефа — быстро и без компромиссов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать сейчас
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ТОП
              <br />
              КАЧЕСТВО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ФАСТФУД
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              СОЧНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ КОТОРЫЕ РВУТ * ХРУСТЯЩАЯ КУРИЦА * СОУСЫ ОТ ШЕФА * ДОСТАВКА ЗА 30 МИНУТ * СЕТЬ ТОП *
            БУРГЕРЫ КОТОРЫЕ РВУТ * ХРУСТЯЩАЯ КУРИЦА * СОУСЫ ОТ ШЕФА * ДОСТАВКА ЗА 30 МИНУТ * СЕТЬ ТОП
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="ТОП Бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>ТОП Бургер</h3>
                  <span className="price">289 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная говяжья котлета, сыр чеддер, хрустящий лук и фирменный ТОП-соус на поджаренной булке.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Огненная курица"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Огненная курица</h3>
                  <span className="price">249 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Хрустящее куриное филе в остром маринаде, коул-слоу и соус чили — горит так, как надо.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Картофель ТОП"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Картофель ТОП</h3>
                  <span className="price">119 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Толстые ломтики с хрустящей корочкой, паприка, морская соль и соус на выбор.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА — ЭТО СЕРЬЁЗНО.</h2>
            <p className="vibe-text">
              Сеть ТОП — это не просто фастфуд. Это честная еда без лишних слов: свежие ингредиенты, горячая подача, быстро.
              Мы открыты в каждом районе — найди свою точку и приходи голодным.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @TOP.FASTFOOD
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ТОП★</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Сеть фастфуда ТОП — быстро, вкусно, честно. Свежие ингредиенты каждый день, горячая подача без ожиданий.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Чт: 10:00 - 23:00</li>
            <li>Пт-Сб: 10:00 - 00:00</li>
            <li>Вс: 10:00 - 22:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 СЕТЬ ТОП★</span>
          <span>БЫСТРО. ВКУСНО. ТОП.</span>
          <span>VK / TG / TK</span>
        </div>
      </footer>
    </>
  );
}