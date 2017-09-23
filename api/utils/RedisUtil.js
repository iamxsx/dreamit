let redis = require('redis')
let client = redis.createClient()


module.exports = {
  get: (key) => {
    client.get(key, (err, result) => {
      console.log(result)
    })
  },

  set: (key, value) => {
    client.set(key, value)
  }
}
