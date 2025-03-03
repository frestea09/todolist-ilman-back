import { Injectable } from '@nestjs/common';
import { NOMEM } from 'dns';
import { TaskDto } from 'src/dto/cat.dto/cat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllTask(page: number = 1, limit: number = 3) {
    const skip = (page - 1) * limit;
    const tasks = await this.prismaService.task.findMany({
      skip,
      take: Number(limit), // Ambil sejumlah limit data
      orderBy: { id: 'asc' }, // Urutkan berdasarkan tanggal terbaru (opsional)
    });
    const totalTasks = await this.prismaService.task.count(); // Total data dalam tabel
    const totalPages = Math.ceil(totalTasks / limit); // Total halaman
    return {
      data: tasks,
      pagination: {
        totalTasks,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  }
  async getTaskById(id: string) {
    return await this.prismaService.task.findUnique({
      where: { id: Number(id) },
    });
  }
  async deleteTaskById(id: string) {
    return await this.prismaService.task.delete({ where: { id: Number(id) } });
  }
  async createTask(body: TaskDto) {
    return await this.prismaService.task.create({
      data: {
        author: body?.author,
        doDateTask: body?.doDateTask,
        taskCreatedAt: body?.taskCreatedAt,
        taskName: body?.taskName,
        updateTaskTime: body?.updateTaskTime,
        deleteTaskTime: body?.deleteTaskTime,
      },
    });
  }
  async updateTask(id: number, body: TaskDto) {
    return await this.prismaService.task.update({
      where: { id: Number(id) },
      data: {
        author: body?.author,
        doDateTask: body?.doDateTask,
        taskCreatedAt: body?.taskCreatedAt,
        taskName: body?.taskName,
        updateTaskTime: body?.updateTaskTime,
        deleteTaskTime: body?.deleteTaskTime,
      },
    });
  }
}
