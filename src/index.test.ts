import { DatabaseEntity } from "@mds-coding/database-entity";
import { DatabaseQuery } from "@mds-coding/database-query";
import { DatabaseProviderAbstract } from ".";

class DatabaseProviderTest extends DatabaseProviderAbstract {
  constructor(public hello: string, public world: string) {
    super();
  }
  connect(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  disconnect(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  insert<T>(entity: DatabaseEntity<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  updateOne<T>(query: DatabaseQuery<T>, fieldsToUpdate: Partial<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  updateMany<T>(query: DatabaseQuery<T>, fieldsToUpdate: Partial<T>): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne<T>(query: DatabaseQuery<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findMany<T>(query: DatabaseQuery<T>): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}

test("`DatabaseProviderAbstract` can be used", () => {
  const database = new DatabaseProviderTest("hello", "world");
  expect(database).toBeDefined();
});
