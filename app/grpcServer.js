var PROTO_FILE_PATH = 'E:\\from_end\\grpc_demo\\proto\\Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.yuwei.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service,{
    getRealNameByUsername : getRealNameByUsername,
    getStudentsByAge : getStudentsByAge,
    getStudentWrapperByAges : getStudentWrapperByAges,
    biTalk : biTalk

});

server.bind('localhost:8899',grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log("username: " + call.request.username);

    callback(null,{realname: 'yuwei'});
}

function getStudentsByAge(){

}
function getStudentWrapperByAges(){

}

function biTalk(){

}

