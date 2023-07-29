import { CookingCourse } from "./courses/cookingCourse";
import { PaintingCourse } from "./courses/paintingCourse";

// This is may factory class that can be access by client
class CourseFactory {
  public static createCourse(courseName: string) {
    switch (courseName) {
      case "cooking":
        return new CookingCourse();
      case "painting":
        return new PaintingCourse();
      default:
        return null;
    }
  }
}

// Dummy client request
console.log("Cooking course modules");
const cookingClassInstance = CourseFactory.createCourse("cooking");
console.log(cookingClassInstance?.getModules());

console.log("Painting course modules");
const paintingClassInstance = CourseFactory.createCourse("painting");
console.log(paintingClassInstance?.getModules());
