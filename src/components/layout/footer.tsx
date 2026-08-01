import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

import { footerResources, footerServices } from "@/src/data/navigation";

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@shnexus.dev",
    icon: FiMail,
  },
] as const;

const contactLinks = [
  {
    label: "Book a Call",
    href: "#contact",
  },
  {
    label: "hello@shnexus.dev",
    href: "mailto:hello@shnexus.dev",
  },
  {
    label: "GitHub",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              aria-label="sh Nexus home"
              className="mb-4 flex items-center gap-2"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-[#6D5EF5] to-[#00C2FF]">
                <span className="font-heading text-[11px] font-bold text-white">
                  SN
                </span>
              </div>

              <span className="font-heading text-[15px] font-bold tracking-tight text-white">
                sh Nexus
              </span>
            </a>

            <p className="mb-4 text-[13px] leading-relaxed text-white/30">
              Modern Web Development Studio.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-lg border border-white/8 text-white/30 transition-all duration-200 hover:border-white/20 hover:bg-white/4 hover:text-white"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="Services">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="footer-link">
                  {service}
                </a>
              </li>
            ))}
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title="Resources">
            {footerResources.map((resource) => (
              <li key={resource.href}>
                <a href={resource.href} className="footer-link">
                  {resource.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} sh Nexus — Modern Web Development
            Studio. All rights reserved.
          </p>

          <p className="text-[12px] text-white/15">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-white/50">
        {title}
      </h2>

      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
