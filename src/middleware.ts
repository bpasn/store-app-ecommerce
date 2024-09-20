import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;
    console.log(process.env.NEXT_PUBLIC_CLIENT_SECRET)
    if (req.headers.get("x-api") !== process.env.NEXT_PUBLIC_CLIENT_SECRET) {
        return new NextResponse("Access Denied", { status: 403 });
    }

    const referer = req.headers.get("referer") || "";

    if (!referer.startsWith(allowedOrigin!)) {
        return new NextResponse("Access Denied", { status: 403 });
    }

    return NextResponse.next();

}

export const config = {
    matcher: ['/api/:path*'],
};