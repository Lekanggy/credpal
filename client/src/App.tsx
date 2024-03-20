//import './App.css'

import Description from "./components/Description"
import Header from "./components/Header"
import WhyOur from "./components/WhyOur"
import GlobalStyle, { AppContainer } from "./globalStyle"


function App() {
  
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <Header/>
        <Description/>
        <WhyOur/>
      </AppContainer>
    </>
   
  )
}

export default App
