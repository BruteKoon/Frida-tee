console.log("test start")

var mcNotify = Module.findExportByName("libMcClient.so", "mcNotify");
var mcOpenTrustlet = Module.findExportByName("libMcClient.so", "mcOpenTrustlet");
var mcMap =  Module.findExportByName("libMcClient.so", "mcMap");
var mcWaitNotification =  Module.findExportByName("libMcClient.so", "mcWaitNotification");
const PYMODE = false;


var CACHE_LOG ="";
function log(type, message) {
    if(message.toString() == CACHE_LOG.toString()) return; // Let's hide duplicate logs...

    CACHE_LOG = message;
    if(PYMODE) {
        send({'type':type, 'message': message});
    } else {
        console.log('[' + type + '] ' + message);
    }
}

Interceptor.attach(mcWaitNotification, {
	onEnter: function(args) {
		console.log("mc")
		//console.log(args[0])
		//console.log(args[1])
		//console.log(args[2])
		//console.log(args[3])
		
		var buf = ptr('0x7fd7b6c858')
		
		log("INFO", "\n" + hexdump(buf, {
                                length: 256,
                                ansi: true,}) + "\n"
                );
		
	}
})



