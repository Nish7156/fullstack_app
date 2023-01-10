'use strict';

/**
 * showcase controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = {
    async create(ctx) {
      return await strapi
        .service("api::showcase.showcase")
        .create(ctx.request.body);
    },
  };

module.exports = createCoreController('api::showcase.showcase');
