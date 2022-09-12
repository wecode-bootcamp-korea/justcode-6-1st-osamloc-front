import Header from "../Header";
import Footer from "../Footer/Footer";

function LayOut(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}

export default LayOut;