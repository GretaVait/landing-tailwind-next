import { useState } from "react"

const SelectPlan = () => {
  const [preference, setPreference] = useState({
    title: '',
    id: -1
  })
  

  const optionsArr = {
    preference: [
      {
        title: 'Capsule',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Filter',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Espresso',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
    ]
  }

  return (
    <section>
      <div className="container">
        
      <Card 
        title="How do you drink your coffee?" 
        optionsArr={optionsArr.preference} 
        options={preference} 
        setOptions={setPreference}
      />
        
      

      </div>
    </section>
  )
}

const Card = ({ title, optionsArr, options, setOptions }) => {

  return (
    <div className="mb-12">
      <h1 className="mb-8">{title}</h1>
      {
        optionsArr.map((item, index) => (
          <Options 
            title={item.title}
            description={item.description}
            active={options.id === index}
            setActive={() => { setOptions({ title: item.title, id: index }) }}
            key={index}
          />
        ))
      }
    </div>
  )
}

const Options = ({ title, description, setActive, active }) => {
  return (
    <div className={`p-8 rounded-lg mb-4 transition duration-500 ease-in-out ${active ? 'bg-green text-white' : 'bg-grey'}`} onClick={setActive}>
      <h2 className={`mb-4 ${active ? 'text-white' : ''}`}>{title}</h2>
      <p className={`${active ? 'text-grey' : ''}`}>{description}</p>
    </div>
  )
}

export default SelectPlan