import React from 'react'
import { Column, Row } from '../globalStyle'
import Img from '../assets/c5.png'
import styled from 'styled-components'

const Container = styled(Row)`
justify-content: space-between;
    align-items: center;
    img{
        width: 527px; 
        height: 537px;
        object-fit: cover;
    }
`
const Left = styled(Column)`
    justify-content: center;
    align-items: flex-start;
    p{
        font-family: 'Axiforma';
        font-size: 64px;
        font-weight: 900;
        line-height: 83.71px;
        text-align: left;
        padding: 0 10px;
        width: 600px;

    }

    .enjoy{
        display: inline-block;
        color: #274fed;
    }

    .invest{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        padding: 20px;
        background: #274fed;
        border-radius: 8px;
        color: #fff;
        box-shadow: 0px 14px 11px -12px #86C4F152;
    }
`




const Description = () => {
  return (
    <Container>
        <Left>
            <p>
              <span className='enjoy'>Enjoy</span>High Yield Fixed Deposit Invesment

            </p>
            <span className='invest'>Enjoy 18% investment returns</span>
        </Left>
        <img src={Img} alt='mother-child'/>
    </Container>
  )
}

export default Description