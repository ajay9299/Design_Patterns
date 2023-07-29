import { Course } from "../course";

export class PaintingCourse extends Course {
  createCourse(): void {
    this.modules.push("Painting_Course_Demo");
    this.modules.push("Painting_Course_Read_Doc");
    this.modules.push("Painting_Course_Video_Doc");
    this.modules.push("Painting_Course_Practice_Doc");
  }
}
