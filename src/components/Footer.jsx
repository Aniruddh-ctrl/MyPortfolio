import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '[GITHUB_URL]', label: 'GitHub' },
  { icon: Linkedin, href: '[LINKEDIN_URL]', label: 'LinkedIn' },
  { icon: Code2, href: '[LEETCODE_URL]', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:[EMAIL]', label: 'Email' },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg">Aniruddh Singh</h3>
            <p className="text-gray-500 text-sm">Full Stack Developer</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-accent-blue/40 hover:bg-white/5 transition-all"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Aniruddh Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
