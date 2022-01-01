const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '1200px',
  laptopL: '1440px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.laptopL})`,
};
