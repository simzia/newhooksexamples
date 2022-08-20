export interface userType {
    email: string,
    password: string,
}
export interface userList {
    users: userType[]
}
export interface todoType {
    todoList: string
}