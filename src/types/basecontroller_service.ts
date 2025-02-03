export interface IBaseControllerAndService {
  get(query: any): Promise<any[]>;
  getOne(query: any): Promise<any>;
  create(dto: any): Promise<any>;
  update(dto: any): Promise<void>;
  delete(dto: any): Promise<void>;
}