import { Container } from "@/styles/global";
import { styled } from "../../../../../../stitches.config";


export const NewsLetterWrapper = styled('div',{
    borderTop: '1px solid #141414',
    borderBottom:' 1px solid #141414',
    background: '$grey100',
    width: '100%',
    padding: '1rem 0'
});
export const NewsLetterContainer = styled(Container,{
    fontFamily: '$arimo',
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    h2:{
        fontSize: '$2xl',
        textTransform: 'uppercase',
        fontWeight: '$bold',
    },
    '@mobileL': {
        flexDirection: 'column',
        '& > div':{
            width: '100%'
        }
    }, 
});
export const NewsLetterForm = styled('form',{
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    flex: '1',

    button:{
        all: 'unset',
        fontSize: '$xs',
        textTransform: 'uppercase',
        fontFamily: '$default',
        fontWeight: '$semiBold',
        color: '$white',

        padding: '0.69rem 1.06rem',
        background: '$black',

        '&:hover':{
            cursor: 'pointer',
            opacity: '.9'
        }
    },
    '@mobileL': {
        width: '100%'
    }, 
});
export const NewsLetterInput = styled('div',{
    display: 'flex',
    alignItems: 'center',
    padding: '0.69rem 1.12rem',
    border: '1px solid #A7A7A7;',
    gap: '$4',
    flex: '1',

    input:{
        all: 'unset',
        width: '100%'
    },   
});
