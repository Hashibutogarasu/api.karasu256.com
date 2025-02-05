export interface IBasePublicCaS<T> {
  get(query: any): Promise<T[]>;
  getOne(query: any): Promise<T>;
}