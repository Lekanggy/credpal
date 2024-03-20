import styled from "styled-components"
import { Row } from "../globalStyle"
import Logo from '../assets/c6.png'

const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    ul{
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
    }

    li {
        font-family: "Axiforma";
        font-weight: 600;
        line-height: 24.75px;
        font-size: 14px;
    }
`
const Left = styled(Row)`
    align-items: center;
    gap: 20px;
    img{
        width: 109px;
        height: 25px;
        object-fit: cover;
    }

    


`
const Right = styled(Row)`
    .get{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #274fED;
        padding: 10px;
        border-radius: 6px;
        height: 30px;
        width: 100px;
        color: #fff;
    }
`

const Header = () => {
  return (
    <NavHeader>
        <Left>
            <img src={Logo} alt="logo-credpal"/>
            <ul>
                <li>Personal</li>
                <li>Retail</li>
                <li>Business</li>
            </ul>

        </Left>
        <Right>
            <ul>
                <li>FAQS</li>
                <li>Sign in</li>
                <li className="get">
                    Get App
                </li>
            </ul>
        </Right>
    </NavHeader>
  )
}

export default Header