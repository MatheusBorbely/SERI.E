import { globalCss, styled  } from '../../stitches.config';

export const globalStyles = globalCss({

    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$white',
        color: '$black',
        lineHeight: '$base',
        '-webkit-font-smoothing': 'antialiased',
        fontSize: '$4'
    },

    'body, input, textarea, button': {
        fontFamily: '$default',
        fontWeight: 400,
        fontSize: '$md'
    },

    ':focus': {
        outline: 'transparent !important',
        boxShadow: `0 0 2px #F2994A`,
    },

    'li, a': {
        listStyle: 'none',
        textDecoration: 'none'
    },
    '@tablet': {
        html:{
            fontSize: '87.5%',
        },
    }
});
export const Container = styled('section', {
    width: '1170px',
    margin: '0 auto',
    maxWidth: '100%',
    padding: '0 $4',
});