const stripe = require('stripe')('sk_test_51OTS9kSJUJHYXIjO9URl6w9fHisbxKfZQmT94KwBmJCHqt3YQ7bkAHKYp1lIH9eg0RO4dRVhCmoP9S1DITM5bbFR00Tc2aeziA');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
});

  res.redirect(303, session.url);
});