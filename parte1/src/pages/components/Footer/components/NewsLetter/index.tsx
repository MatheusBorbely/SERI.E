import React from 'react'
import Image from 'next/image'

import Email from '@/assets/icons/footer/email.svg'
import { NewsLetterContainer, NewsLetterForm, NewsLetterInput, NewsLetterWrapper } from './styles'

export function NewsLetter() {
  return (
    <NewsLetterWrapper>
        <NewsLetterContainer>
            <div>
                <h2>Newsletter</h2>
                <span>Cadastre seu e-mail e receba <strong>novidades!</strong></span>
            </div>
            <NewsLetterForm>
                <NewsLetterInput>
                    <Image src={Email.src} width={Email.width} height={Email.height} alt='envelope' />
                    <input type="email" name="email" id="email" />
                </NewsLetterInput>
                <button type="submit">cadastrar</button>
            </NewsLetterForm>
        </NewsLetterContainer>
    </NewsLetterWrapper>   
  )
}
