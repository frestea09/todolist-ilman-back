import { Controller, Get, Post, Body } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('data')
  async getData() {
    return this.supabaseService.getData('product');
  }
  @Get('tables')
  async getTables() {
    return this.supabaseService.listTables();
  }
  @Post('data')
  async addData(@Body() body: any) {
    return this.supabaseService.addData('product', body);
  }
}
