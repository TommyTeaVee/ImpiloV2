import React from "react";

export default function InternetEvolution() {
  return (
    <article className="p-6 max-w-4xl mx-auto text-gray-200 leading-relaxed" style={{overflowY: 'auto', maxHeight: '180vh'}}>
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          🌐 The Evolution of the Internet: From DARPA to the Smart World
        </h1>
        <p className="text-sm text-gray-400">
          Originally published in 2021 • Updated October 2025
        </p>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full h-64 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Hero Image: The World Wide Web 30th Anniversary Graphic]
      </div>

      <p>
        It’s the World Wide Web’s birth month — the digital network that changed
        our world forever. The WWW recently turned 34 years old, and we take a
        deep dive into how it all began, what it is today, and where it’s going.
        We also revisit the concerns raised by its inventor, Sir Tim Berners-Lee,
        about the pressing issues of security and privacy that define our
        connected age.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        The Origin of the Internet
      </h2>
      <p>
        The story of the internet begins in the 1960s, long before web browsers
        or Wi-Fi. During the Cold War, the U.S. Department of Defense faced a
        serious problem — its military communications were vulnerable to
        interception. Messages transmitted via radio waves could easily be
        compromised if an operator was captured or if frequencies were hacked.
      </p>

      <p>
        To solve this, the U.S. established the{" "}
        <strong>Defense Advanced Research Projects Agency (DARPA)</strong> to
        develop a more secure communication network. DARPA engineers connected
        two computers using telephone lines, successfully transmitting digital
        messages. They expanded this experiment into a four-computer network
        called <strong>ARPANET</strong> — the world’s first operational packet-
        switching network and the ancestor of today’s internet.
      </p>

      <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Image Placeholder: Early ARPANET Diagram]
      </div>

      <p>
        Each connected computer (or “node”) used a unique identification number
        — what we now call an <strong>IP address</strong>. Messages were broken
        into small “packets” of data that could travel independently across the
        network and reassemble at the destination. By the 1970s, the project
        moved to universities like the University of California, where the term{" "}
        <strong>“Internet”</strong> (short for “Interconnected Network”) was
        born.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Enter the World Wide Web
      </h2>

      <p>
        Fast forward to 1991 — British scientist{" "}
        <strong>Sir Tim Berners-Lee</strong> created the{" "}
        <strong>World Wide Web</strong>, a revolutionary way of linking
        documents through hyperlinks on top of the existing Internet. His vision
        was simple but transformative: a web of information accessible by anyone
        with an internet connection.
      </p>

      <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Image Placeholder: Tim Berners-Lee at CERN]
      </div>

      <p>
        Instead of remembering numeric IP addresses, users could now type
        memorable domain names like <em>google.com</em> or{" "}
        <em>microsoft.com</em>. This gave rise to the modern URL and the birth
        of top-level domains such as <strong>.com</strong>, <strong>.org</strong>
        , and <strong>.gov</strong>. Soon after, the concept of{" "}
        <strong>email</strong> became mainstream, forever changing how people
        communicated.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        The Digital Communication Era
      </h2>
      <p>
        The 1990s and 2000s ushered in the digital communication revolution.
        Instant messaging, internet telephony (like early Skype), and online
        shopping platforms such as Amazon and eBay transformed the internet into
        a global marketplace. Social networks — from MySpace to Facebook,
        Twitter (now X), and Instagram — became digital meeting places that
        shaped culture and politics.
      </p>

      <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Image Placeholder: Evolution of Social Media Platforms]
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        The Smart World & Internet of Things (IoT)
      </h2>
      <p>
        Today, the Internet has evolved beyond screens. With the rise of{" "}
        <strong>Artificial Intelligence (AI)</strong> and the{" "}
        <strong>Internet of Things (IoT)</strong>, everyday objects — from
        refrigerators to security cameras — are now connected. Homes, offices,
        and cities are becoming “smart,” with appliances communicating in real
        time to create seamless digital environments.
      </p>

      <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Image Placeholder: Smart Home / IoT Illustration]
      </div>

      <p>
        From voice-controlled lights to self-driving cars, IoT is redefining
        modern convenience. However, this interconnectivity introduces new
        challenges — especially concerning privacy and cybersecurity.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cyber Awareness: Digital Privacy Matters
      </h2>
      <p>
        While the internet connects billions, it also exposes vulnerabilities.
        Cybercrime, phishing scams, data breaches, and social engineering
        attacks have become commonplace. Even trusted platforms like Facebook
        have faced scandals over data misuse, as seen in the 2018{" "}
        <strong>Cambridge Analytica</strong> incident.
      </p>

      <div className="w-full h-56 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
        [Image Placeholder: Cybersecurity Awareness Visual]
      </div>

      <p>
        In 2025, cybersecurity is a global priority. With the rise of deepfakes,
        identity theft, and AI-driven scams, users must remain vigilant. Strong
        passwords, two-factor authentication (2FA), antivirus software, and
        regular system updates are essential to protect one’s digital identity.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        How to Stay Safe Online in 2025
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Use complex, unique passwords and change them regularly.</li>
        <li>Enable <strong>2FA</strong> on all accounts.</li>
        <li>Check for secure <strong>HTTPS</strong> connections.</li>
        <li>Install and update antivirus software.</li>
        <li>Clear browser cookies and cache frequently.</li>
        <li>Avoid clicking suspicious links or attachments in emails.</li>
        <li>
          Review app permissions and third-party access under{" "}
          <strong>OAuth2</strong> settings.
        </li>
      </ul>

      <p className="mt-6">
        The internet is a remarkable invention — a fusion of engineering,
        creativity, and human connection. But like any tool, its value depends
        on how responsibly we use it. As we move deeper into the era of
        automation and AI, our greatest responsibility lies in maintaining trust
        and privacy in the digital world we’ve built.
      </p>

      {/* Closing Section */}
      <footer className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Impilo Digital Media Group · Originally
          Published: March 2021 · Updated: October 2025
        </p>
      </footer>
    </article>
  );
}
