//import module
import { PrismaClient } from "@prisma/client";

//generate client
const database = new PrismaClient();

//export client
export default database;