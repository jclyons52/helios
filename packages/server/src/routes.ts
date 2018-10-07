import { UserController } from "./controller/UserController";
import { NoteController } from "./controller/NoteController";
import { RestController } from "./controller/RestController";
import { Class } from "./types";

export const Routes = [
    ...getRestRoutes("users", UserController),
    ...getRestRoutes("notes", NoteController)

];

function getRestRoutes<T>(prefix: string, controller: Class<RestController<T>>) {
    return [{
        method: "get",
        route: `/${prefix}`,
        controller: controller,
        action: "all"
    }, {
        method: "get",
        route: `/${prefix}/:id`,
        controller: controller,
        action: "one"
    }, {
        method: "post",
        route: `/${prefix}`,
        controller: controller,
        action: "save"
    }, {
        method: "delete",
        route: `/${prefix}`,
        controller: controller,
        action: "remove"
    }]
}