import { getAllSocialLinks, getSocialTitle } from '../helpers/socialLinksHelper';
import { FaGithub, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

const Footer = () => {
  const socialLinks = getAllSocialLinks();

  console.log('Number of social links:', socialLinks.length);
  console.log('Social links data:', socialLinks);

  return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="text-amber-200 font-bold text-xl mb-4 md:mb-0">Ahmed Bestun</div>
          <div className="flex space-x-6 items-center">
            {socialLinks.length > 0 ? (
                socialLinks.map((social) => {
                  const Icon = iconMap[social.platform] || FaLink;
                  return (
                      <a
                          key={social.platform}
                          href={social.url}
                          className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
                          title={getSocialTitle(social.platform)}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <span className="sr-only">{getSocialTitle(social.platform)}</span>
                        <Icon className="text-xl" aria-hidden="true" />
                      </a>
                  );
                })
            ) : (
                <p className="text-gray-400">No social links available</p>
            )}
          </div>
        </div>
      </footer>
  );
};

export default Footer;
