import React from "react"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import SliderInput from "./components/SliderInput"
import DisplayCard from "./components/DisplayCard"
import { RangeProvider } from "./Context/RangeContext"

const App = () => {
  return (
    <div className='wrapper bg-light'>
      <Container className='text-center pt-5 '>
        <h4>Lorem Ipsum Generator</h4>
        <RangeProvider>
          <SliderInput />
          <DisplayCard />
        </RangeProvider>
      </Container>
    </div>
  )
}

export default App
