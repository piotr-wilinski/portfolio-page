const size = {
  mobile: '480px',
  tablet: '768px',
  smallScreen: '1024px',
  desktops: '1200px',
  largeScreens: '1201px'
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  smallScreen: `(max-width: ${size.smallScreen})`,
  desktops: `(max-width: ${size.desktops})`
};