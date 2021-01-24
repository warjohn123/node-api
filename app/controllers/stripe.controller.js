const stripe = require('stripe')('sk_test_ovCDckSqzhNznZczktjjr6sl');

exports.payment = async(req, res) => {
    console.log('stripe', stripe);

    const customer = await stripe.customers.create({
        email: 'customer@example.com',
    });

    // const charge = await stripe.charges.create({
    //     amount: 2000,
    //     currency: 'usd',
    //     source: 'tok_mastercard'
    // })
    res.json({success: true, customer: customer});
}