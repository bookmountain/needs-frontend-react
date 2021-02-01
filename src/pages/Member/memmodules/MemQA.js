import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MemShop.scss'

import { useSelector } from 'react-redux'
import { BsQuestionSquareFill } from 'react-icons/bs'

import { Button, Collapse, Accordion, Card } from 'react-bootstrap'
import { GoPlusSmall } from 'react-icons/go'

const MemQA = (props) => {
  const [open, setOpen] = useState(false)
  const [memqa, setMemQA] = useState([])

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/qa?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemQA(res.data)
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className="memQA">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <BsQuestionSquareFill />
              </p>
              <p>常見問題</p>
            </div>
          </div>

          <div className="container questionSec">
            <div className="questionContent mt-3">
              {memqa.map((item, index) => {
                return (
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          {item.question}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{item.answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemQA
