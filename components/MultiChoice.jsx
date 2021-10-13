const Question = ({ children }) => (
  <h1 className="mb-8 text-grey-dark">{children}</h1>
)

const QuestionWrapper = ({ children, onOptionSelect, selectedOptions }) => {
  
  const handleSelect = (e) => {
    const questionNumber = e.target.parentElement.parentElement.dataset.question
    const optionValue = e.target.dataset.value
    onOptionSelect({ ...selectedOptions, [questionNumber]: optionValue })
  }

  return (
    <div onClick={handleSelect} data-selected={JSON.stringify(selectedOptions)}>
      {children}
    </div>
  )
}

const QuestionGroup = ({ questionNumber, children }) => (
  <div data-question={questionNumber} className="mb-16">
    {children}
  </div>
)

const Option = ({ value, children, active }) => {
  return (
    <div className={`rounded-lg mb-4 transition duration-500 ease-in-out ${active ? 'bg-green' : 'bg-grey'}`}>
      <h2 data-value={value} className={`pt-8 pl-8 pr-8 mb-4 ${active ? 'text-white' : ''}`}>{children[0]}</h2>
      <p data-value={value} className={`pb-8 pl-8 pr-8 ${active ? 'text-grey' : ''}`}>{children[1]}</p>
    </div>
  )
}

export { Question, QuestionWrapper, QuestionGroup, Option }