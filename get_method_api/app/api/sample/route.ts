import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Ballay Ballay" }, { status: 201 }); // By default status will be 200
}
