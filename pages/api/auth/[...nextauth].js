import NextAuth from "next-auth";
import Providers from "next-auth/providers";


export const options = {
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        Providers.Google({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
        Providers.Twitter({
          clientId: process.env.TWITTER_ID,
          clientSecret: process.env.TWITTER_SECRET
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options);