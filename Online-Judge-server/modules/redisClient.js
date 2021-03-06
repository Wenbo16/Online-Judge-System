var redis = require('redis');
var Promise = require('bluebird');

Promise.promisifyAll(redis.RedisClient.prototype); 
Promise.promisifyAll(redis.Multi.prototype); 


var client = redis.createClient();


function set(key, value) {
    return client.setAsync(key, value);
}

function zincrby(key, incre, member) {
    return client.zincrbyAsync(key, incre, member);
}

function zrevrange(key, start, end) {
    return client.zrevrangeAsync(key, start, end);
}


function get(key) {
    return client.getAsync(key);
}


function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    get: get,
    zincrby: zincrby,
    zrevrange: zrevrange,
    set: set,
    expire: expire,
    quit: quit,
    redisPrint: redis.print
}