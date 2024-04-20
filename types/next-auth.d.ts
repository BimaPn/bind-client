import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface Session{
        user : {
            id: string | number,
            username : string,
            name : string,
            email : string,
            isVerified : boolean,
            profile_picture : string,
            role : string,
            access_token : string
        }
    }
}