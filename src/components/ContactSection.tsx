import React from "react";
import { Icon } from "@iconify/react";

const ContactSection: React.FC = () => {
  const iconSize = "4rem";

  return (
    <div
      id="contact"
      className="container mx-auto text-center py-12 text-white font-pacifico"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 italic tracking-widest underline decoration-wavy decoration-blue-500">
        Let&apos;s Connect!
      </h2>

      {/* Icons with Fancy Effects */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* GitHub */}
        <a
          href="https://github.com/boshma"
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition duration-300 hover:scale-110 hover:text-blue-400"
        >
          <div className="relative flex items-center justify-center">
            <Icon
              icon="icon-park:github"
              style={{ fontSize: iconSize }}
              className="drop-shadow-lg"
            />
            <span className="absolute bottom-[-1.5rem] scale-0 text-sm font-semibold transition-all duration-300 group-hover:scale-100">
              GitHub
            </span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bogdan-shmat-b42552222/"
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition duration-300 hover:scale-110 hover:text-blue-400"
        >
          <div className="relative flex items-center justify-center">
            <Icon
              icon="devicon:linkedin"
              style={{ fontSize: iconSize }}
              className="drop-shadow-lg"
            />
            <span className="absolute bottom-[-1.5rem] scale-0 text-sm font-semibold transition-all duration-300 group-hover:scale-100">
              LinkedIn
            </span>
          </div>
        </a>

        {/* Resume */}
        <div className="group relative transform transition duration-300 hover:scale-110 hover:text-blue-400">
          <a
            href="/BogdanShmatResume.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex items-center justify-center">
              <Icon
                icon="fxemoji:scroll"
                style={{ fontSize: iconSize }}
                className="drop-shadow-lg"
              />
              <span className="absolute bottom-[-1.5rem] scale-0 text-sm font-semibold transition-all duration-300 group-hover:scale-100">
                Resume
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;