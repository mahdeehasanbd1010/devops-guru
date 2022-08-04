import { CourseItemInList } from "./courses";

export class Student {
    public s_id!: string;
    public name!: string;
    public gender!: string;
    public year!: string;
    public course!: CourseItemInList[]
    
    constructor(){
    }
}