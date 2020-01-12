'use strict';

const Controller = require('egg').Controller;
const room = 'default_room';

class ChatController extends Controller {
    async index(){
      // 1） 普通接收消息，发送
      // const message = this.ctx.args[0];
      // console.log('s')
      // console.log('chat :', message + ' : ' + process.pid);
      // // const say = await this.ctx.service.queryAdminConf.queryLoanFlag();
      // const say = "收到服务器的结果：";
      // this.ctx.socket.emit('res', say);

      // 2） 利用命名空间去搞
      const {app, socket, logger, helper} = this.ctx;
         const id = socket.id;
         console.log('id=',id);
         const nsp = app.io.of('/');
         // 根据id给指定连接发送消息
         nsp.sockets[id].emit('res', "hello ....");
         // 指定房间连接信息列表
         nsp.adapter.clients([room], (err, clients) => {
             console.log(JSON.stringify(clients));
         });
         //  给指定房间的每个人发送消息
         this.ctx.app.io.of('/').to(room).emit('online', this.ctx.socket.id+ "上线了");
         // 断开连接
        //  this.ctx.socket.disconnect();
    }
}
module.exports = ChatController;
