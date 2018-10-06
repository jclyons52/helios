import {getRepository, Repository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Class } from "../types";

export class RestController<T> {

    private repository: Repository<T>;
    constructor(classRef: Class<T>) {
        this.repository = getRepository(classRef);
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        // @ts-ignore
        await this.repository.removeById(request.params.id);
    }

}