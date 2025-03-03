import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  id: number;
  @ApiProperty()
  taskName: string;
  @ApiProperty()
  taskCreatedAt: Date;
  @ApiProperty()
  author: string;
  @ApiProperty()
  doDateTask: Date;
  @ApiProperty()
  updateTaskTime: Date;
  @ApiProperty()
  deleteTaskTime: Date;
  @ApiProperty({
    description: 'Description of task',
    default: 'kosong',
  })
  taskDescription: string;
  @ApiProperty()
  deleteFlag: Boolean;
}
