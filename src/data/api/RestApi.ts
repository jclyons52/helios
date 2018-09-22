
export interface IRestApi<T> {
    find(fields: Partial<T>): Promise<T[]>
    get(id: number): Promise<T>
    save(entity: T): Promise<T>
    delete(entity: T): Promise<boolean>
}