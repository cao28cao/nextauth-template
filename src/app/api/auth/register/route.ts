import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from '@vercel/postgres'

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();
        // validate email and password
        console.log({username, email, password})
        const hashedPassword = await hash(password, 10);
        const response = await sql`
            INSERT INTO users (username, email, password) 
            VALUES (${username}, ${email}, ${hashedPassword})
        `;
        

    } catch (err) {
        console.log(err);
    }
    return NextResponse.json({ message: "success" });
}