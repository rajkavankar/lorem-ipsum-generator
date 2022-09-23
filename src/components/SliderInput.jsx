import React, { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { RangeContext } from "../Context/RangeContext"

const SliderInput = () => {
  const { range, setRange, generateRandom } = useContext(RangeContext)

  const handleChange = (e) => {
    setRange(e.target.value)
  }

  return (
    <div>
      <h2>Words: {range}</h2>
      <Form.Range min='1' max='500' value={range} onChange={handleChange} />
      <Button variant='danger' onClick={generateRandom}>
        Generate Random
      </Button>
    </div>
  )
}

export default SliderInput
