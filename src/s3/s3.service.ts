import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
  constructor(
    private readonly configService: ConfigService,
  ) { }

  get S3() {
    return new S3Client({
      region: 'auto',
      endpoint: `https://${this.configService.get('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: this.configService.get('CLOUDFLARE_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('CLOUDFLARE_SECRET_ACCESS_KEY'),
      },
    });
  }

  uploadFile(file: Express.Multer.File): Promise<{ url: string; key: string; }> {
    return new Promise((resolve, reject) => {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

      const key = `galleries/${formattedDate}/${file.originalname}`;

      const command = new PutObjectCommand({
        Bucket: this.configService.get('CLOUDFLARE_BUCKET'),
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      this.S3.send(command)
        .then((data) => {
          resolve({
            url: `${this.configService.get('CLOUDFLARE_PUBLIC_URL')}/${file.originalname}`,
            key,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  deleteFile(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const command = new DeleteObjectCommand({
        Bucket: this.configService.get('CLOUDFLARE_BUCKET'),
        Key: key,
      });

      this.S3.send(command)
        .then((data) => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
