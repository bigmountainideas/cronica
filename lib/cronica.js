var fs = require('fs')
  , _ = require('underscore')
  , child_process = require('child_process')
  , common = require('./common');



module.exports = function(options){

  var defaultOptions = {
    repo: process.cwd()
  };

  var cronica = {
    options: (options = _.extend( defaultOptions, options))
  };




  // cronica.environment = function(){
  //   return config[ process.env.NODE_ENV || 'development'];
  // };






  // cronica.environments = function(cb){
  //   execute( 'git branch', function(stdout){
  //     var b = stdout.match( /(.+)/igm)
  //       , branches = []
  //       , branch;
  //     for( var i in b){
  //       if( b[i].match(/\* .+/ig)){
  //         branch = b[i].replace('* ','');
  //       }
  //       branches.push( b[ i]);
  //     }
  //     cb&&cb( branches, branch);
  //   });
  // };







  // cronica.has = function(env){
  //
  //
  //
  //
  // };



  // cronica.create = function(env, cb){
  //
  //   execute( 'git branch ' + env, function(stdout,stderr){
  //
  //     console.log(stdout,stderr);
  //
  //   });
  //
  // };



  // cronica.use = function(env, cb){
  //
  //   execute( 'git checkout ' + env, function(stdout,stderr){
  //
  //     console.log(stdout,stderr);
  //
  //   });
  //
  // };


  cronica.commit = function(file, done){
    var msg = "[Content Revision] File was updated.";
    execute( 'git commit -m "' + msg + '" ' + file, options.repo, function(stdout,stderr){

      console.log(stdout,stderr);
      done();
    });

  };


  cronica.revert = function(file, done){
    execute( 'git checkout -- ' + file, function(stdout,stderr){

      console.log(stdout,stderr);
      done();

    });

  };



  // cronica.history = function(file, cb){
  //   execute( 'git log -- ' + file, function(stdout,stderr){
  //     if( stdout){
  //       cb&&cb( parseCommitHistory( stdout));
  //     }else {
  //       cb&&cb( stderr);
  //     }
  //   });
  // };



  //
  // console.log( process.env.NODE_ENV);
  //
  // //cronica.create( cronica.environment().name);
  // //cronica.use( cronica.environment().name);
  // cronica.history( 'app/models/iphone5.peb',function(rev,err){
  //   console.log(rev);
  // });






  // function parseCommitHistory( str){
  //   var messages = str.match( /(.+)/igm)
  //     , commits = []
  //     , commit;
  //   for( var i in messages){
  //     if( /^commit [a-z0-9]+/ig.test(messages[i])){
  //       commit = {
  //         "revision" : commits.length+1,
  //         "commit" : /^commit ([a-z0-9]+)/ig.exec(messages[i])[1]
  //       };
  //       commits.push( commit);
  //     }else if( /^Date: .+/ig.test(messages[i])){
  //       commit.date = /^Date: +(.+)/ig.exec(messages[i])[1];
  //     }else if( /^ +.+/ig.test(messages[i])){
  //       commit.message = /^ +(.+)/ig.exec(messages[i])[1];
  //     }
  //   }
  //   return commits;
  // };




  function execute(cmd, cwd, cb){
    child_process.exec(cmd,{
      cwd : cwd || options.repo || process.env.cwd()
    },function (error, stdout, stderr) {
      if (error !== null) {
        console.log('stderr: ' + stderr);
        console.log('exec error: ' + error);
      }cb&&cb(stdout,stderr);
    });
  }






  /*common.configure( 'development', function(){



  });*/


  /*
  cronica.watch = function(file){

    fs.watchFile(file, function(curr, prev) {
      console.log('the current mtime is: ' + curr.mtime);
      console.log('the previous mtime was: ' + prev.mtime);
      console.log(file);
    });
  };
  */



  /*cronica.chronicle = function(env){
    child_process.exec('git branch ' + env,{
      cwd : '../../Roq/bin/test_app'
    },function (error, stdout, stderr) {

      console.log( stdout);

      if (error !== null) {
        console.log('stderr: ' + stderr);
        console.log('exec error: ' + error);
      }
    });
    */
    /*fs.watch(process.env.PWD, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
        console.log('filename provided: ' + filename);
      } else {
        console.log('filename not provided');
      }
    });*/
  //};




  //cronica.watch(process.env.PWD + '/st/untitled.txt');
  //cronica.watch(process.env.PWD + '/st/test_file_2.txt');
  //cronica.chronicle();



  /*

  var currentBranch;





  child_process.exec('git branch',{
    cwd : '../../Roq/bin/test_app'
  },function (error, stdout, stderr) {

    var branches = stdout.match( /(.+)/igm);

    for( var i in branches){
      if( branches[i].match(/\* .+/ig)){
        currentBranch = branches[i].replace('* ','');
        break;
      }
    }

    console.log( currentBranch, branches);

    if (error !== null) {
      console.log('stderr: ' + stderr);
      console.log('exec error: ' + error);
    }
  });



  */

  return cronica;
}
