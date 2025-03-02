import { DeleteObjectCommand, GetObjectAttributesCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
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

  async uploadFile(file: Express.Multer.File): Promise<{ url: string; key: string; }> {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const key = `galleries/${formattedDate}/${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: this.configService.get('CLOUDFLARE_BUCKET'),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.S3.send(command);

    return {
      url: `${this.configService.get('CLOUDFLARE_PUBLIC_URL')}/${key}`,
      key: command.input.Key
    };
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
