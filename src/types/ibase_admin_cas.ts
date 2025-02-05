import { CreateDto, DeleteDto, UpdateDto } from "@/utils/dto";

export interface IBaseAdminCaS<T> {
  create(dto: CreateDto<any>): Promise<T>;
  update(dto: UpdateDto<T>): Promise<void>;
  delete(dto: DeleteDto): Promise<void>;
}