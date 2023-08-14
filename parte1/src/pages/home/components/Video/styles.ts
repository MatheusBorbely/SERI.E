import { styled } from "../../../../../stitches.config";
import BackgroundImage from '@/assets/video/background-video.svg'

export const VideoContainer = styled('section',{
    backgroundImage: `url(${BackgroundImage.src})`, 
    backgroundColor: '$black700',
    display: 'flex',
    alignItems: 'center',
    gap: '1.94rem',
    padding: '4.56rem 0 6rem 0',
    flexDirection: 'column',
    marginTop: '5.94rem',

    '& > h2':{
        color: '$white',
        fontSize: '1.75rem',
        textTransform: 'uppercase',
        fontWeight: '$black',
        letterSpacing: '.14rem',
    },
    '@mobileL': {
        padding: '4.56rem $4 6rem $4',
    },  
});
export const VideoThumbnail = styled('article',{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '630px',
    maxWidth: '100%',
    
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '1.88rem',
        gap: '1.8rem',
        position: 'absolute',
        top: '1rem',
        zIndex: 2,

        div:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$black700',
            borderRadius: '$full',
            height: '3rem',
            width: '3rem'
        },

        h4:{
            color: '$white',
            fontFamily: '$roboto',
            fontSize:'1.375rem',
            fontWeight: '$bold'
        }
    }
});
export const VideoIcon = styled('div',{
    position: 'absolute'
});
