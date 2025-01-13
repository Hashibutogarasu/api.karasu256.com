import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodType } from 'zod';
import { ZodValidationPipe as NestJSZodValidationPipe } from 'nestjs-zod';
export class ZodValidationPipe extends NestJSZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {
    super(schema);
  }

  // transform(value: unknown, metadata: ArgumentMetadata) {
  //   try {
  //     this.schema.parse(value);
  //   } catch (error) {
  //     throw new BadRequestException('Validation failed');
  //   }
  //   return value;
  // }
}