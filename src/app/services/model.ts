import { inject } from "@angular/core";
import { TodosService } from "./todos.service";

export interface Todo {
   id: number;
   text: string;
   done?: boolean;
   ix?: number;
}


export interface TodoChanges {
   id: number;
   done?: boolean;
   ix?: number;
   text?: string;
}
