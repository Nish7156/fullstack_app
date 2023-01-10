'use strict';

/**
 * showcase router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes: [
      {
       method: 'POST',
       path: '/showcase',
       handler: 'showcase.create',
       config: {
         policies: [],
         middlewares: [],
       },
      },
    ],
  };

module.exports = createCoreRouter('api::showcase.showcase');
