import { BaseController } from "./basecontroller";
import { UpdateDto, DeleteDto } from "./basecontroller.dto";

export abstract class AbstractBaseController<T> implements BaseController<T> {
  abstract getAll(dto: any, ...args: any[]): Promise<T[]>;
  abstract get(dto: any, ...args: any[]): Promise<T | T[]>;
  abstract create(req: any, dto: any, ...args: any[]): Promise<void | T>;
  abstract update(dto: UpdateDto<T>, ...args: any[]): Promise<void | T>;
  abstract delete(params: DeleteDto, ...args: any[]): Promise<void>;
}