import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
    theme: {
        fonts: {
            default: 'Montserrat, sans-serif',
            roboto: 'Roboto, sans-serif',
            arimo:'Arimo, sans-serif',
        },
     
        space: {
            px: '1px',
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            10: '2.5rem',
        },

        fontSizes: {
            xxs: '.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '2xxl': '2.5rem',
        },

        fontWeights: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
            black: '900'
        },

        lineHeights: {
            base: '160%',
        },
  
        colors: {
            white: '#FFFFFF',

            black: '#000000',
            black700: '#141414',

            grey100: '#F9F9F9',
            grey500: '#BBB',

            orange: '#F2994A'
        },
        
        radii: {
            full: '99999px',
        }, 
    },
    media: {
        mobile: '(max-width: 520px)',
        mobileL: '(max-width: 768px)',
        tablet: '(max-width: 1024px)',
    },
})