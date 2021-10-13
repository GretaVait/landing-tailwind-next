import { useEffect, useState, useRef } from "react"
import dynamic from 'next/dynamic'
// import { FixedSizeList as List } from 'react-window'
import { loadStripe } from "@stripe/stripe-js/pure"
import { Elements } from "@stripe/react-stripe-js"
const Checkout = dynamic(() => import('../components/Checkout'))
import { QuestionWrapper, QuestionGroup, Question, Option } from "../components/MultiChoice"

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`)

const SelectPlan = ({ selection }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({})

  useEffect(() => {
    console.log(selectedOptions)
  }, [selectedOptions])

  return (
    <section>
      <div className={`fixed top-0 left-0 w-full h-full bg-black z-10 pointer-events-none transition duration-200 ${modalOpen ? 'opacity-50' : 'opacity-0'}`} />
      <div className="container">
        
      <QuestionWrapper selectedOptions={selectedOptions} onOptionSelect={((selectedOptions) => { setSelectedOptions( selectedOptions ) })}>
        {
          selection.length > 0 &&
          selection.map((selectionItem, i) => (
            <QuestionGroup questionNumber={i} key={i}>

              <Question>{selectionItem.question}</Question>
              {
                selectionItem.answer.map((answerItem, j) => (
                  <Option value={answerItem.title} active={selectedOptions[i] == answerItem.title} key={j}>
                    {answerItem.title}
                    {answerItem.description}
                  </Option>
                ))
              }
            </QuestionGroup>
          ))
        }
      </QuestionWrapper>

      <div className={`fixed top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 bg-white px-4 py-16 w-full max-w-lg transition duration-200 z-20 ${modalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Elements stripe={stripePromise}>
          <Checkout closeModal={() => { setModalOpen(false) }} />
        </Elements>
      </div>
      
      <div className="text-center">
        <button onClick={() => { setModalOpen(true) }}>Buy Coffee</button>
      </div>

      </div>
    </section>
  )
}

export default SelectPlan