import { DeleteDto, UpdateDto } from "./basecontroller.dto";

export interface BaseController<T> {
  getAll(dto: any, ...args: any[]): T[] | Promise<T[]>;
  get(dto: any, ...args: any[]): T | Promise<T | T[]>;
  create(req: any, dto: any, ...args: any[]): void | Promise<void | T>;
  update(dto: UpdateDto<T>, ...args: any[]): void | Promise<void | T>;
  delete(params: DeleteDto, ...args: any[]): void | Promise<void>;
}