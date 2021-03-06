import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const Charge = async (req, res) => {
  const { id, amount } = req.body

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Coffee',
      payment_method: id,
      confirm: true
    })

    console.log(payment)

    return res.status(200).json({
      confirm: id
    })
  } catch(error) {
    console.log(error)
  }
}

export default Charge