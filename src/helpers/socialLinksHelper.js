export const socialLinks = {
  github: 'https://github.com/Juirs',
  linkedin: 'https://linkedin.com/in/ahmed-bestun-54b468388',
  email: 'mailto:ahmed.bestun97@gmail.com',
};
/**
 * Get all social links as an array with platform names
 * @returns {Array<{platform: string, url: string}>} Array of social link objects
 */
export const getAllSocialLinks = () => {
  return Object.keys(socialLinks).map(platform => ({
    platform,
    url: socialLinks[platform]
  }));
};

/**
 * Get social link title for a platform
 * @param {string} platform - The social platform name
 * @returns {string} Title or platform name if not found
 */
export const getSocialTitle = (platform) => {
  const titleMap = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    email: 'Email',
    instagram: 'Instagram',
    facebook: 'Facebook'
  };

  return titleMap[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
};