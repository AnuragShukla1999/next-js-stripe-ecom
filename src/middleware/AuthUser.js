import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

const AuthUser = async (req) => {
    const token = req.headers.get("Authorization")?.split(" ")[1];

    if (!token) return false;

    try {
        const extractAuthUserInfo = jwt.verify(token, process.env.jwt_secret);

        if (extractAuthUserInfo) return extractAuthUserInfo;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default AuthUser;