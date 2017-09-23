/**
 * Campaign.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'dreamMongoServer',
  tableName: 'campaign',
  autoPK: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    startTime: {
      type: 'datetime',
      required: true
    },
    endTime: {
      type: 'datetime',
      required: true
    },
    campaignUrl: {
      type: 'string',
      required: true
    },
    isPublished: {
      type: 'boolean',
      required: true
    },
  },

  autoCreatedAt: true,
  autoUpdatedAt: true
};

