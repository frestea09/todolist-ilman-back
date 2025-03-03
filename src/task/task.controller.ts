import { Controller, Get, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getTask(@Query('page') page: number, @Query('limit') limit: number) {
    // return { page, limit };
    return this.taskService.getAllTask(Number(page), Number(limit));
  }
}
