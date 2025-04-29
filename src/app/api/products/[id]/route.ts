import axiosInstance from "@/libs/axios";
import { NextRequest } from "next/server";

// Must accept `params` to get dynamic route variables
export async function GET(request: NextRequest, { params }: { params: {  id: string } }) {
  try {
    const { id } = await params;

    const response = await axiosInstance.get(
      `https://dummyjson.com/products/${id}`
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
