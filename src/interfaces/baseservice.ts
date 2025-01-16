import { DeleteDto, UpdateDto } from "./basecontroller.dto";

export interface BaseService<T> {
  getAll(...args: any[]): T[] | Promise<T[]>;
  get(dto: any, ...args: any[]): T | Promise<T | T[]>;
  create(dto: any, ...args: any[]): void | Promise<void | T>;
  update(dto: UpdateDto<T>, ...args: any[]): void | Promise<void | T>;
  delete(params: DeleteDto, ...args: any[]): void | Promise<void>;
}