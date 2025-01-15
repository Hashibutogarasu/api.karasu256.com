import { DeleteDto, UpdateDto } from "./basecontroller.dto";

export interface BaseService<T> {
  getAll(): T[] | Promise<T[]>;
  get(dto: any): T | Promise<T>;
  create(dto: any): void | Promise<void>;
  update(dto: UpdateDto<T>): void | Promise<void>;
  delete(params: DeleteDto): void | Promise<void>;
}