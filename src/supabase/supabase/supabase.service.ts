import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL')!;
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY')!;

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }
  async listTables() {
    const query = `
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public';
  `;

    const { data, error } = await this.supabase.rpc('execute_sql', {
      sql: query,
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  // Contoh method untuk mendapatkan data dari tabel
  async getData(tableName: string) {
    const { data, error } = await this.supabase.from('product').select('* ');
    return data;
  }

  // Contoh method untuk menambah data
  async addData(tableName: string, data: any) {
    const { data: newData, error } = await this.supabase
      .from(tableName)
      .insert([data]);
    if (error) {
      throw new Error(error.message);
    }
    return newData;
  }
}
