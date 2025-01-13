import { DataSource } from "typeorm";
import { typeormConfig } from "./typeorm.config";

const source = new DataSource(typeormConfig as any);

source.initialize();

export default source;
