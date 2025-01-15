import { UpdateDto, DeleteDto } from "./basecontroller.dto";
import { BaseService } from "./baseservice";

export abstract class AbstractBaseService<T> implements BaseService<T> {
  abstract getAll(): Promise<T[]>;
  abstract get(dto: any): Promise<T>;
  abstract create(dto: any): Promise<void>;
  abstract update(dto: UpdateDto<T>): Promise<void>;
  abstract delete(params: DeleteDto): Promise<void>;

}