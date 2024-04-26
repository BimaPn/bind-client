export const appPath = (path: string) => {
 return `${process.env.NEXT_PUBLIC_APP_NAME}${path}`
}
export const comparePath = (path1: string, path2:string) => {
   return appPath(path1).includes(appPath(path2))
}
