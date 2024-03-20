import styled from "styled-components"
import { Column } from "../globalStyle"
import C1 from '../assets/cr1.png'
import C4 from '../assets/c4.png'
import C3 from '../assets/c3.png'
import C2 from '../assets/c2.png'

const Container = styled(Column)`
    padding-top: 6rem;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .header{
        font-family: Axiforma;
        font-size: 40px;
        font-weight: 900;
        line-height: 67.72px;
        text-align: left;
    }

    .title{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-family: Axiforma;
        font-size: 16px;
        font-weight: 400;
        line-height: 24.07px;
        text-align: center;
        width: 580px;

    }

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 80px;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }

    .display-icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .display-icon img{
        width: 93px;
        height: 92px;
        object-fit: cover;
    }

    .display-icon .sm-txt{
        font-family: Axiforma;
        font-size: 14px;
        font-weight: 700;
        line-height: 23.03px;
        text-align: left;

    }
`

const WhyOur = () => {
  return (
    <Container>
        <p className="header">Why Our Fixed Deposit Investment?</p>
        <span className="title">
            Let your money work for you. Fix your money for specific periods 
            and get high interest 
            rates with our secure fixed deposits.
        </span>
        <div className="wrapper">
            <div className="display-icon">
                <img src={C1} alt=""/>
                <span className="sm-txt">18% Hight Interest Rate</span>
            </div>
            <div className="display-icon">
                <img src={C4} alt=""/>
                <span className="sm-txt">Regulated by CBN</span>
            </div>
            <div className="display-icon">
                <img src={C3} alt=""/>
                <span className="sm-txt">Insured by the NDIC</span>
            </div>
            <div className="display-icon">
                <img src={C2} alt=""/>
                <span className="sm-txt">Instant Withdrawal</span>
            </div>
        </div>
       
    </Container>
  )
}

export default WhyOur