import "./App.css"
import Main from "./Sections/Main/Main"
import HelpingPeople from "./Sections/HelpingPeople/HelpingPeople"
import AppRating from "./Sections/AppRating/AppRating"
import Credit from "./Sections/Credit/Credit"
import CreditCarousel from "./Sections/CreditCarousel/CreditCarousel"
import Footer from "./Sections/Footer/Footer"


function App() {

  return (
    <div>
      <Main />
      <HelpingPeople />
      <AppRating />
      <CreditCarousel />
      <Credit />
      <Footer />
    </div>
  )
}

export default App
