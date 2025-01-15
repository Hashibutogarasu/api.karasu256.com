import { BaseController } from "./basecontroller";
import { UpdateDto, DeleteDto } from "./basecontroller.dto";

export abstract class AbstractBaseController<T> implements BaseController<T> {
  abstract getAll(): T[] | Promise<T[]>;
  abstract get(dto: any): Promise<T>
  abstract create(dto: any): Promise<void>;
  abstract update(dto: UpdateDto<T>): Promise<void>
  abstract delete(params: DeleteDto): Promise<void>;
}