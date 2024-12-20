import { DataSource } from "typeorm";
import { typeormConfig } from "../../config/db/typeorm.config";

const source = new DataSource(typeormConfig as any);

source.initialize();

export default source;
