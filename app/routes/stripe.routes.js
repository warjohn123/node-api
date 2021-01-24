module.exports = (app) => {
    const stripe = require('../controllers/stripe.controller');
    app.post('/stripe', stripe.payment)
}
