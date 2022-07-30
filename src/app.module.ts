import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule,CategoryModule],
})
export class AppModule {}
