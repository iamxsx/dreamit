let RedisUtil = require('../utils/RedisUtil')

/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: (req, rep) => {
    params = req.body

    Campaign.create(params).exec((err, records) => {
      if (err) {
        rep.serverError(err);
      } else {
        rep.ok('success')
      }
    })
  },

  init: (res, rep) => {
    RedisUtil.set('this_is_my_redis_key', 123);
    let value = RedisUtil.get('this_is_my_redis_key');
    rep.send('value = ' + value)
  }
};

