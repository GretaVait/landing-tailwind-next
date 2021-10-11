import { useEffect, useState, useRef } from "react"
import dynamic from 'next/dynamic'
// import { FixedSizeList as List } from 'react-window'
import { loadStripe } from "@stripe/stripe-js/pure"
import { Elements } from "@stripe/react-stripe-js"
const Checkout = dynamic(() => import('../components/Checkout'))
import { QuestionWrapper, QuestionGroup, Question, Option } from "../components/MultiChoice"

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`)

const SelectPlan1 = ({ selection }) => {
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

      {/* {
        selection.length > 0 &&
          <div className="bg-black p-8 rounded-lg">
            <p className="uppercase text-grey mb-4">Order summary</p>
            <h2 className="text-white-yellow">"I drink my coffee as <span className="text-green">{preference.title}</span>, with a <span className="text-green">{type.title}</span> type of bean. <span className="text-green">{grams.title}</span> ground ala <span className="text-green">{grind.title}</span>, sent to me <span className="text-green">{frequency.title}</span>."</h2>
          </div>
      } */}
      
      <div className="text-center">
        <button onClick={() => { setModalOpen(true) }}>Buy Coffee</button>
      </div>

      </div>
    </section>
  )
}

export default SelectPlan1