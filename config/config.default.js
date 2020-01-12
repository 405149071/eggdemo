/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    io: {
      // namespace命名空间配置为/
      namespace: {
        '/': {
          // 预处理器中间件, 我们这里配置了一个auth, 进行权限判断, 它对应的文件是/app/io/middleware/auth.js, 这里可以配置多个文件, 用逗号隔开
          connectionMiddleware: ['auth'], //这里我们可以做一些权限校验之类的操作
          packetMiddleware: [], // 通常用于对消息做预处理，又或者是对加密消息的解密等操作
        },
      }
    }

  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578799554641_8584';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
