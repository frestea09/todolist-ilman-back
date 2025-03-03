import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/task-dto/task-dto';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getTask(@Query('page') page: number, @Query('limit') limit: number) {
    // return { page, limit };
    return this.taskService.getAllTask(Number(page), Number(limit));
  }

  @Get('id/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }
  @Delete('id/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTaskById(id);
  }
  @Post()
  createTask(@Body() body: TaskDto) {
    return this.taskService.createTask(body);
  }
  @Put('id/:id')
  updateTask(@Param('id') id: number, @Body() body: TaskDto) {
    return this.taskService.updateTask(id, body);
  }
}
