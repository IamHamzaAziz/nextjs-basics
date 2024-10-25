import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// export function GET(request: NextApiRequest, response: any) {
//   const { id } = response.params;

//   return NextResponse.json({ message: "Yay", id: id });
// }

export function GET(_: any, response: any) {
  const { id } = response.params;

  return NextResponse.json({ message: "Yay", id: id });
}
