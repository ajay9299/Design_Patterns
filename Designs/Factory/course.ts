export abstract class Course {
  protected modules: string[] = [];

  constructor() {
    this.createCourse();
  }

  public getModules() {
    return this.modules;
  }

  abstract createCourse(): void;
}
