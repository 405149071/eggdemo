'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);

  // socket, 指向app/io/controller/chat.js的index方法
  io.route('chat', app.io.controller.chat.index);
};
