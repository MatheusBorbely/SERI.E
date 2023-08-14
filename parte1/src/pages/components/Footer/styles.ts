import { Container } from "@/styles/global";
import { styled } from "../../../../stitches.config";

export const FooterWrapper = styled('footer',{
    fontFamily: '$arimo',
});
export const FooterContainer = styled(Container,{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3.13rem $4 3.5rem $4',

    div:{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.88rem',
        
        lineHeight:'92.4%',
        letterSpacing: '.05rem',

        h4:{
            fontSize: '$md',
            textTransform: 'uppercase',
            fontWeight: '$bold',    
        },
        ul:{
            display: 'flex',
            flexDirection: 'column',
            gap: '.44rem',

            a:{
                fontSize: '$sm',
                color: '$black',

                '&:hover':{
                    color: '$orange'
                }
            }
        },
        '&.redes-sociais ul':{
            flexDirection: 'row',
            gap: '.62rem',

            svg:{
                transition: 'transform .3s'
            },
            'svg:hover':{
                transform: 'scale(1.2)',
                
            },
            'svg.instagram:hover circle,svg.instagram:hover rect ':{
                stroke: '#E1306C',
            },
            'svg.instagram:hover circle:last-child ':{
                stroke: '#E1306C',
                fill: '#E1306C'
            },
            'svg.facebook:hover':{
                fill: '#3b5998'
            }
        }
    },
    '@mobile': {
        flexDirection: 'column',
        gap: '$10'
    },    
});
export const SubFooter = styled('section',{ 
    padding: '.66rem',
    backgroundColor: '$black',
    '& > div':{
        width: '1170px',
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0 $4',
        display: 'flex',
        justifyContent: 'space-between',
    },
    div:{
        display: 'flex',
        alignItems: 'center',
        gap: '$10',
    },
    span:{
        fontSize: '$sm',
        color: '$white'
    }
});
