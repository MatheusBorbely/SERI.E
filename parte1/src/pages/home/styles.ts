import { styled } from "../../../stitches.config";
import BackgroundImage from '@/assets/background.png'


export const HomeContainer = styled('main',{
    paddingBottom: '5.88rem',
    
    h2:{
        color: '$black',
        fontSize: '1.75rem',
        fontWeight: '$bold',
        letterSpacing: '.28rem',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});
export const HomeCentralHalfBannerList = styled('section',{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    
    '& > article':{
        paddingTop: '54.30%',
        '@mobileL': {
            paddingTop: '95.3%',
        }, 
    },
    '@mobile': {
        gridTemplateColumns: '1fr',
    }, 
});
export const HomeProductContainer = styled('section',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3.5rem',
    gap: '1.6rem', 
    flexDirection: 'column',
});
export const HomeProductList = styled('section',{
    width:'100%',
});
export const HomeCentralHalfBanner = styled('section',{
    backgroundImage: `url(${BackgroundImage.src})`, 
    backgroundPositionY: '-150px',

    h2:{
        padding: '2.6rem 0 1.5rem 0',
    }
});
