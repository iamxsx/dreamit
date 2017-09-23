/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    campaginId: {
      type: 'objectid',
      required: true
    },
    contestantName: {
      type: 'string',
      required: true
    },
    contestantPhone: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string'
    },
    posterUrl: {
      type: 'string',
      required: true
    },
    votes: {
      type: 'interger',
      required: true
    },
    rank: {
      type: 'integer',
      required: true
    },
    isForbidden: {
      type: 'boolean'
    }
  }
};

