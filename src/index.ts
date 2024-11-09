import { DatabaseEntity } from "@mds-coding/database-entity";
import { DatabaseQuery } from "@mds-coding/database-query";

export abstract class DatabaseProviderAbstract {
  abstract connect(): Promise<void>
  abstract disconnect(): Promise<void>
  abstract insert<T>(entity: DatabaseEntity<T>): Promise<T>
  abstract updateOne<T>(query: DatabaseQuery<T>, fieldsToUpdate: Partial<T>): Promise<T>
  abstract updateMany<T>(query: DatabaseQuery<T>, fieldsToUpdate: Partial<T>): Promise<T[]>
  abstract findOne<T>(query: DatabaseQuery<T>): Promise<T>
  abstract findMany<T>(query: DatabaseQuery<T>): Promise<T[]>
}
