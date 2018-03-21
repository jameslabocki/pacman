var service_host = 'localhost'
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if(process.env.MONGO_SERVICE_HOST) {
    service_host = process.env.MONGO_SERVICE_HOST
}

var database = {
    url: `mongodb://${service_host}:27017/pacman`,
    options: {
        readPreference: 'secondaryPreferred'
    }
};

if(process.env.MONGO_REPLICA_SET) {
    database.options.replicaSet = process.env.MONGO_REPLICA_SET
}

exports.database = database;
