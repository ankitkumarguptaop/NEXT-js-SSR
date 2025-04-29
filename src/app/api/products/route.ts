import axiosInstance from "@/libs/axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    console.log("✌️searchParams --->", searchParams);

    const search = searchParams.get("search") || "";
    console.log("✌️search --->", search);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);

    const skip = (page - 1) * limit;

    // const search="";
    // const limit=10;
    // const skip =0;

    const response = await axiosInstance.get(
      `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`
    );

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
