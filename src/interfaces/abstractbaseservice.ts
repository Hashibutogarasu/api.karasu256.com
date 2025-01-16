import { UpdateDto, DeleteDto } from "./basecontroller.dto";
import { BaseService } from "./baseservice";

export abstract class AbstractBaseService<T> implements BaseService<T> {
  abstract getAll(...args: any[]): Promise<T[]>;
  abstract get(dto: any, ...args: any[]): Promise<T | T[]>;
  abstract create(dto: any, ...args: any[]): Promise<void | T>;
  abstract update(dto: UpdateDto<T>, ...args: any[]): Promise<void | T>;
  abstract delete(params: DeleteDto, ...args: any[]): Promise<void>;

}