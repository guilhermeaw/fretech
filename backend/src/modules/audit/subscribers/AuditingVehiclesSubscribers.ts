import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
} from 'typeorm';
import AppDataSource from '@shared/database/ormconfig';
import { AuditLog } from '../entities/AuditLog';
import User from '../../users/entities/User';
import Vehicle from '../../vehicles/entities/Vehicle';
import UsersRepository from '../../users/repositories/UsersRepository';

@EventSubscriber()
export class AuditingVehiclesSubscribers
  implements EntitySubscriberInterface<unknown>
{
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  listenTo() {
    return Vehicle;
  }

  private async createAuditLog(action: string, _entity: unknown, user: User) {
    try {
      const auditLogRepository = AppDataSource.getRepository(AuditLog);

      const auditLog = new AuditLog();
      auditLog.action = action;
      auditLog.user_id = user.id;
      auditLog.tableName = 'Vehicle';
      auditLog.timestamp = new Date();

      await auditLogRepository.save(auditLog);

      return auditLog;
    } catch (e) {
      console.error('Erro ao criar o log de auditoria:', e);

      return e;
    }
  }

  async beforeInsert(event: InsertEvent<User>) {
    const userId = (global as any).currentUser.id;

    this.usersRepository
      .findById(userId)
      .then(user => {
        if (user) {
          this.createAuditLog('insert', event.entity, user);
        } else {
          console.error('Veículo não encontrado durante a inserção.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar o veículo durante a inserção:', error);
      });
  }

  async beforeUpdate(event: UpdateEvent<User>) {
    const userId = (global as any).currentUser.id;

    try {
      const user = await this.usersRepository.findById(userId);

      if (user) {
        await this.createAuditLog('update', event.entity, user);
      } else {
        console.error('Veículo não encontrado durante a atualização.');
      }
    } catch (error) {
      console.error('Erro ao buscar o veículo durante a atualização:', error);
    }
  }

  async beforeRemove(event: RemoveEvent<User>) {
    const userId = (global as any).currentUser.id;

    try {
      const user = await this.usersRepository.findById(userId);

      if (user) {
        await this.createAuditLog('remove', event.entity, user);
      } else {
        console.error('Veículo não encontrado durante a remoção.');
      }
    } catch (error) {
      console.error('Erro ao buscar o veículo durante a remoção:', error);
    }
  }
}
