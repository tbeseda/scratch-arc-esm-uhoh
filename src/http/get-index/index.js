const uhoh = require('./uhoh')

exports.handler = async function http (req) {
  return {
    body: req,
    uhoh,
  }
}
