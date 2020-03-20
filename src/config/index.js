const path = require("path")
require("dotenv").config({
  path: path.resolve(".env"),
})

const config = {
  stripeSk: process.env.STRIPE_PK,
  stripePk: process.env.STRIPE_SK,
  sucessRedirect: process.env.SUCCESS_REDIRECT,
  cancelRedirect: process.env.CANCEL_REDIRECT,
}

module.exports = { config }
