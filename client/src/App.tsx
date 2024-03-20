//import './App.css'

import Description from "./components/Description"
import Header from "./components/Header"
import GlobalStyle, { AppContainer } from "./globalStyle"


function App() {
  
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <Header/>
        <Description/>
    
      </AppContainer>
    </>
   
  )
}

export default App
