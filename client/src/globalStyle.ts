import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html{
	
	
	min-height: 100vh;
    font-size: 'Inter';
	
  }

  @media screen and (min-width: 650px) {
		body{
			
		}
		
	}
  	@media screen and (min-width: 768px) {
		body{
		
			//height: 100vh;
		}
		
	}

	@media screen and (min-width: 1200px){
		body{
		
		}
		
	}
	
  *{
    box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	
  }


`;

type FlexProps = {
    justify?: string,
    align?: string,
    padding?: string,
    gap?:string,
    margin?: string,
    position?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    minHeight?: string,
    maxHeight?:string,
    wrap?: string
}

export const Row = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div<FlexProps>`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const AppContainer = styled.div`
	padding: 0 40px;
`

export default GlobalStyle