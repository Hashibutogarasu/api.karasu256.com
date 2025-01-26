export interface IBaseControllerAndService {
  get(...args: any[]): Promise<any>;
  create(...args: any[]): Promise<any>;
  update(...args: any[]): Promise<any>;
  delete(...args: any[]): Promise<any>;
}