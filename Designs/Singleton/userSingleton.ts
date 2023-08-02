class User {
  private static instance: User;
  private static userName: string = "Ram";
  private static userEmail: string = "ram@gmail.com";
  private constructor() {}

  public static getInstance(): User {
    if (!this.instance) {
      this.instance = new User();
    }
    return this.instance;
  }

  public getUserInfo() {
    return {
      name: User.userName,
      email: User.userEmail,
    };
  }
}

const newInstanceOfUser = User.getInstance();
const newInstanceOfUserAgain = User.getInstance();
console.log(newInstanceOfUser === newInstanceOfUserAgain);
