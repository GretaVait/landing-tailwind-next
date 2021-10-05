import { useState } from "react"
// import { FixedSizeList as List } from 'react-window'

const SelectPlan = () => {
  const [preference, setPreference] = useState({
    title: '',
    id: -1
  })
  // const [type, setType] = useState({
  //   title: '',
  //   id: -1
  // })
  // const [grams, setGrams] = useState({
  //   title: '',
  //   id: -1
  // })
  // const [grind, setGrind] = useState({
  //   title: '',
  //   id: -1
  // })
  // const [frequency, setFrequency] = useState({
  //   title: '',
  //   id: -1
  // })

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
    ],
    // type: [
    //   {
    //     title: 'Single Origin',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Decaf',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Blended',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    // ],
    // grams: [
    //   {
    //     title: '250g',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: '500g',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: '1000g',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    // ],
    // grind: [
    //   {
    //     title: 'Wholebean',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Filter',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Cafeterie',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    // ],
    // frequency: [
    //   {
    //     title: 'Every week',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Every 2 weeks',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    //   {
    //     title: 'Every month',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //   },
    // ],
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
        
      {/* <Card 
        title="What type of coffee?" 
        optionsArr={optionsArr.type} 
        options={type} 
        setOptions={setType}
      />
        
      <Card 
        title="How much would you like?" 
        optionsArr={optionsArr.grams} 
        options={grams} 
        setOptions={setGrams}
      />
        
      <Card 
        title="Want us to grind them?" 
        optionsArr={optionsArr.grind} 
        options={grind} 
        setOptions={setGrind}
      />
        
      <Card 
        title="How often should we deliver?" 
        optionsArr={optionsArr.frequency} 
        options={frequency} 
        setOptions={setFrequency}
      /> */}

      {/* {
        preference.title && type.title && grams.title && grind.title && frequency.title &&
          <div className="bg-black p-8 rounded-lg">
            <p className="uppercase text-grey mb-4">Order summary</p>
            <h2 className="text-white-yellow">"I drink my coffee as <span className="text-green">{preference.title}</span>, with a <span className="text-green">{type.title}</span> type of bean. <span className="text-green">{grams.title}</span> ground ala <span className="text-green">{grind.title}</span>, sent to me <span className="text-green">{frequency.title}</span>."</h2>
          </div>
      } */}

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