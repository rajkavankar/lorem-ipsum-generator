import React, { useContext, useState } from "react"
import { Card } from "react-bootstrap"
import { RangeContext } from "../Context/RangeContext"
import Clipboard from "react-clipboard.js"
import { FaCopy, FaCheck } from "react-icons/fa"
import words from "../Data/Words"

const DisplayCard = () => {
  const { range } = useContext(RangeContext)
  const [copyString, setCopyString] = useState(`copy`)
  const [icon, setIcon] = useState(<FaCopy />)

  const handleCopy = () => {
    setCopyString("copied")
    setIcon(<FaCheck />)

    setTimeout(() => {
      setCopyString("copy")
      setIcon(<FaCopy />)
    }, 3000)
  }

  return (
    <Card style={{ position: "relative" }} className='mt-3 shadow-sm'>
      <Clipboard
        style={{ position: "absolute", top: 0, right: 0 }}
        className='btn btn-dark'
        onClick={handleCopy}
        data-clipboard-text={words.slice(0, range).join(" ")}>
        {copyString} {icon}
      </Clipboard>

      <Card.Body className='mt-4'>{words.slice(0, range).join(" ")}</Card.Body>
    </Card>
  )
}

export default DisplayCard
