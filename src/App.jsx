import "./App.css"
import Main from "./Sections/Main/Main"
import HelpingPeople from "./Sections/HelpingPeople/HelpingPeople"
import AppRating from "./Sections/AppRating/AppRating"
import Credit from "./Sections/Credit/Credit"
import CreditCarousel from "./Sections/CreditCarousel/CreditCarousel"
import Footer from "./Sections/Footer/Footer"
import Steps from "./Sections/Steps/Steps-1"
import StepsSecond from "./Sections/StepsSecond/Steps-1"


function App() {

  return (
    <div>
      <Main />
      <HelpingPeople />
      <Steps />
      <StepsSecond />
      <AppRating />
      <CreditCarousel />
      <Credit />
      <Footer />
    </div>
  )
}

export default App
