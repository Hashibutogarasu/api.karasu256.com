export interface IBasePublicCaS<T> {
  getAll(): Promise<T[]>;
  get(query: any): Promise<T[]>;
  getOne(query: any): Promise<T>;
}