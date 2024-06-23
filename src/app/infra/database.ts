import { Connection, createConnection } from "mongoose";

declare global {
  var mongooseConnection: Connection | null;
}

global.mongooseConnection = global.mongooseConnection || null;

export default () => {
  if(global.mongooseConnection) return global.mongooseConnection

  global.mongooseConnection = createConnection("mongodb://localhost:27017", {
    autoIndex: true,
    dbName: 'Recipe',
    autoCreate: true
  })
  
  return global.mongooseConnection;
}

