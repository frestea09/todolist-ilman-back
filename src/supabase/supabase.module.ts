import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseController } from './supabase/supabase.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Tambahkan ConfigModule di sini
  providers: [SupabaseService],
  controllers: [SupabaseController],
})
export class SupabaseModule {}
