import { ApiExtension } from "@nestjs/swagger";

export function AutoOperationName(): ClassDecorator {
  return (target: any) => {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
      if (descriptor) {
        const extension = ApiExtension('x-operation-name', key);
        descriptor = extension(target, key, descriptor) as TypedPropertyDescriptor<any>;
        Object.defineProperty(target.prototype, key, descriptor);
      }
    }
  };
}