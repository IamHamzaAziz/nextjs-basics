import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    // const body = await req.json();
    // console.log(body);

    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Hurrah" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
