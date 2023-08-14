import { styled } from "../../../../stitches.config";

export const TopBarContainer = styled('section',{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.56rem 0',
    backgroundColor: '$black700',
    borderBottom: '1px solid #373737',
    
    span:{
        color: '$white',
        fontSize: '$xxs',
        fontWeight: '$semiBold',
        letterSpacing: '$2'
    }
});