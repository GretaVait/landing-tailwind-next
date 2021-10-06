import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from "axios"

const Checkout = ({ closeModal }) => {
  const stripe = useStripe()
  const elements = useElements()

  const handlePayment = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      const { id } = paymentMethod

      try {
        const { data } = await axios.post('/api/charge', {id, amount: 2000})
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    }
  }

  const options = {
    style: {
      base: {
        fontSize: '16px',
        fontFamily: `'Roboto', sans-serif`,
        color: '#2E373C',
        '::placeholder': {
          color: '#AAB2BD',
        },
      }
    },
    classes: {
      base: 'input',
      focus: 'input focus',
      invalid: 'input invalid'
    },
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement options={{ ...options, hidePostalCode: true}} />
      <div className="text-center flex align-center justify-between">
        <button disabled={!stripe}>Pay $20.00</button>
        <button className="secondary" onClick={closeModal}>Cancel</button>
      </div>
    </form>
  )
}

export default Checkout