import localFont from 'next/font/local';

const schibstedGroteskFont = localFont({
  src: [
    {
      path: '../components/fonts/SchibstedGrotesk-Regular.ttf',
      weight: '500',
    },
    {
      path: '../components/fonts/SchibstedGrotesk-Medium.ttf',
      weight: '600',
    },
    {
      path: '../components/fonts/SchibstedGrotesk-SemiBold.ttf',
      weight: '700',
    },
    {
      path: '../components/fonts/SchibstedGrotesk-Bold.ttf',
      weight: '800',
    },
  ],
  variable: '--font-schibstedGrotesk',
});

export default schibstedGroteskFont;
