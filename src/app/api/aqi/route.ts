import { NextRequest, NextResponse } from "next/server";

const AQICN_TOKEN = "b8a6d8e234e1e18cbcf2a034e24958eca5aab2c3";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat") || "13.75";
  const lng = searchParams.get("lng") || "100.5";

  try {
    const res = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${AQICN_TOKEN}`,
      { next: { revalidate: 600 } } // cache for 10 minutes
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch AQI data from AQICN" },
        { status: 502 }
      );
    }

    const data = await res.json();

    if (data.status !== "ok") {
      return NextResponse.json(
        { error: data.data || "AQICN returned an error" },
        { status: 502 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error fetching AQI data" },
      { status: 500 }
    );
  }
}
