const {
    NODE_ENV,
    MONGO_DB_NAME,
    MONGO_HOSTNAME,
    MONGO_USERNAME,
    MONGO_PASSWORD
} = process.env

const config = {
  PRODUCTION: {
    MONGO_URI: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:27017/${MONGO_DB_NAME}`,
  },
  TEST: {
    MONGO_URI: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:27017/${MONGO_DB_NAME}`,
  },
};
// eslint-disable-next-line no-console
console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
