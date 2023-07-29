import { Course } from "../course";

export class CookingCourse extends Course {
  createCourse(): void {
    this.modules.push("Cooking_Course_Demo");
    this.modules.push("Cooking_Course_Read_Doc");
    this.modules.push("Cooking_Course_Video_Doc");
    this.modules.push("Cooking_Course_Practice_Doc");
  }
}
