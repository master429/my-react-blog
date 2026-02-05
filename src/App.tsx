import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/archive', label: '归档' },
  { to: '/notes', label: '笔记' },
]

const featuredPosts = [
  {
    title: '用微交互雕刻宁静',
    meta: '交互设计 • 7分钟阅读',
    description:
      '柔和的动效、轻微的音效与层叠阴影让页面富有质感但不喧闹，适合放慢节奏的阅读。',
    tag: '系统设计',
  },
  {
    title: '淡光晨色调：让色彩带出空间感',
    meta: '视觉策略 • 5分钟阅读',
    description: '试验低饱和渐变与对比，让层级在不同设备上仍旧清晰可读。',
    tag: '视觉方向',
  },
  {
    title: '为屏幕呼吸而写',
    meta: '写作技法 • 6分钟阅读',
    description: '讲述如何安排句间留白、嵌入提示，让段落自然呈现叙事节奏。',
    tag: '叙事工艺',
  },
]

const timeline = [
  { title: '工作室成立', detail: '2023年1月 · 公开《极光速递》首批理念笔记。' },
  { title: '袖珍观测室', detail: '2023年7月 · 完成面向铭记静谧的简报式刊物。' },
  { title: '编辑刷新', detail: '2024年3月 · 加入插画式时间线与沉思提示。' },
]

const capsules = ['叙事工艺', '视觉方向', '系统清晰', '共创仪式']

function Hero() {
  return (
    <header className="hero">
      <p className="eyebrow">極光速递</p>
      <h1>思考者的静谧博客，用每一次滑动打造温柔的光与秩序。</h1>
      <p className="lead">
        这里的条目都是设计、写作与系统的短暂冥想，带着手写的声音出版，留给需要安静启发的人。
      </p>
      <div className="hero-actions">
        <button type="button">开启探索</button>
        <div className="hero-meta">
          <span className="dot" />
          最新刊 · 04 篇新文
        </div>
      </div>
      <div className="hero-grid">
        <div>
          <h3>现在上架</h3>
          <p>《柔光调色》· 记录季节、色彩与语言的感知链索。</p>
        </div>
        <div>
          <h3>给读者的话</h3>
          <p>评论已关闭，欢迎通过笔记页分享你的沉思或日常静好。</p>
        </div>
      </div>
    </header>
  )
}

function FeaturedSection() {
  return (
    <section className="glass-panel featured">
      <div className="section-heading">
        <div>
          <p className="eyebrow">最新连载</p>
          <h2>专为慢读与回访而设计的故事。</h2>
        </div>
        <button type="button" className="secondary">
          查看归档
        </button>
      </div>
      <div className="post-grid">
        {featuredPosts.map((post) => (
          <article key={post.title} className="post-card">
            <div className="post-card__header">
              <span className="post-tag">{post.tag}</span>
              <span className="meta">{post.meta}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button type="button" className="link-button">
              阅读本篇
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="newsletter-panel">
        <h2>静候下一期。</h2>
        <p>每月投递的短篇笔记、过程草图与一则声音提示。</p>
        <form className="newsletter-form">
          <label htmlFor="email" className="sr-only">
            电子邮箱
          </label>
          <input id="email" type="email" placeholder="name@domain.com" required />
          <button type="submit">通知我</button>
        </form>
      </div>
    </section>
  )
}

function TimelinePanel() {
  return (
    <section className="timeline glass-panel">
      <div className="line" />
      <div className="timeline-items">
        {timeline.map((item) => (
          <article key={item.title} className="timeline-item">
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CapsulesPanel() {
  return (
    <section className="capsules glass-panel">
      <div className="capsule-heading">
        <p className="eyebrow">核心实践</p>
        <h2>以专注、静候与工艺为轴的灵感胶囊。</h2>
      </div>
      <div className="capsule-list">
        {capsules.map((capsule) => (
          <span key={capsule} className="capsule-pill">
            {capsule}
          </span>
        ))}
      </div>
    </section>
  )
}

function NotesPage() {
  return (
    <section className="glass-panel notes-panel">
      <p className="eyebrow">笔记</p>
      <h2>在静默里记录每一次灵感。</h2>
      <p>
        这里保存灵感碎片、绘图速写与声音采样。你可以在这里跟随每一段思绪的流动，不被算法的喧嚣打断。
      </p>
      <div className="notes-actions">
        <button type="button">查看最新采样</button>
        <button type="button" className="secondary">
          追溯档案
        </button>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <NewsletterSection />
    </>
  )
}

function ArchivePage() {
  return (
    <>
      <TimelinePanel />
      <CapsulesPanel />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} 极光速递 · 为创作者准备的静谧季刊。</div>
      <div className="footer-links">
        <a href="#">笔记</a>
        <a href="#">媒体资料</a>
        <a href="#">创作空间</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="page">
      <div className="aurora" aria-hidden="true" />
      <nav className="site-nav">
        <div className="logo-mark">
          <span>極光速递</span>
          <span className="logo-tagline">静谧手札</span>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
