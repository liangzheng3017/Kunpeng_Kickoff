import { Link } from 'react-router-dom'
import PlaneIcon from '@/icons/PlaneIcon'
import MailIcon from '@/icons/MailIcon'
import PhoneIcon from '@/icons/PhoneIcon'
import GlobeIcon from '@/icons/GlobeIcon'
import ExternalLinkIcon from '@/icons/ExternalLinkIcon'

const FOOTER_LINKS = {
  产品: [
    { label: 'AI行程规划', path: '/planner' },
    { label: '硬标数据库', path: '/metrics' },
    { label: '避雷雷达', path: '/radar' },
    { label: '社区层', path: '/community' },
  ],
  关于: [
    { label: '商业模式', path: '/business' },
    { label: '运营路线图', path: '/roadmap' },
    { label: '项目介绍', path: '/#about' },
  ],
  联系: [
    { label: 'yuhanhao@kickoff.cn', path: 'mailto:yuhanhao@kickoff.cn', external: true },
    { label: '400-888-KICK', path: 'tel:4008880000', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/60 backdrop-blur-xl">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2.5 font-heading text-xl font-bold text-foreground">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30">
                <span className="gradient-text-cyan text-lg font-bold">K</span>
              </div>
              <span>
                Kickoff<span className="text-accent"> 出发</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              面向留学生的「云端行前办事处」— 用 AI 行程规划 + 众包硬标数据 + 社区软标匹配，
              填补留学生出国前的信息断层与决策焦虑。
            </p>
            {/* Contact Info */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MailIcon size={14} />
                <span>yuhanhao@kickoff.cn</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GlobeIcon size={14} />
                <span>www.kickoff.cn</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path, external }) =>
                  external ? (
                    <li key={label}>
                      <a
                        href={path}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                        <ExternalLinkIcon size={10} />
                      </a>
                    </li>
                  ) : (
                    <li key={path}>
                      <Link
                        to={path}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kickoff 出发. All rights reserved.
            &nbsp;—&nbsp;禹涵皓 · 中学生AI创新创业竞赛作品
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              首页
            </Link>
            <Link
              to="/planner"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              立即体验
              <PlaneIcon size={10} className="ml-1 inline" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
