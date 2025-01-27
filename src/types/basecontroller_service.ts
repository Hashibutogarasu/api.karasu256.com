export interface IBaseControllerAndService {
  get(params: any): Promise<any[]>;
  getOne(params: any): Promise<any>;
  create(dto: any): Promise<any>;
  update(dto: any): Promise<void>;
  delete(dto: any): Promise<void>;
}