import { GetBySlugDto } from "@/types/dto/getbyslug";
import { BaseController } from "./basecontroller";
import { UpdateDto, DeleteDto } from "./basecontroller.dto";

export abstract class WithSlugController<T> implements BaseController<T> {
  abstract getAll(dto: any): Promise<T[]>;
  abstract get(dto: any): Promise<T>;
  abstract getBySlug(dto: GetBySlugDto): Promise<T>;
  abstract create(dto: any): Promise<void>;
  abstract update(dto: UpdateDto<T>): Promise<void>;
  abstract delete(params: DeleteDto): Promise<void>;
}