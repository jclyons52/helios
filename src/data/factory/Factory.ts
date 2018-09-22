export interface IFactory<T> {
    create(entity: Partial<T>): T
    createMany(count: number, entity?: Partial<T>): T[]
}

export abstract class Factory<T> implements IFactory<T> {
    public createMany(count = 1, defaults: Partial<T> = {}): T[] {
      return Array(count).fill(undefined).map(() => this.create(defaults))
    }
  
    public abstract create(params: Partial<T>): T
  }