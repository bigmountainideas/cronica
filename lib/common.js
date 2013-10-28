var common = {};


common.configure = function( env, cb){
  if( process.env.NODE_ENV==env){
    cb&&cb();
  }
};




module.exports = common;