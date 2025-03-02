export interface IBasePublicCaS<T> {
  getAll(query: any): Promise<T[]>;
  get(query: any): Promise<T[]>;
  getOne(query: any): Promise<T>;
}