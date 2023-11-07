import { prisma } from '@/services/db-client';
import { GUEST } from '@prisma/client';
import { NextResponse } from 'next/server';

interface ConfirmationData {
  guestName: string;
  type: GUEST;
}
export async function POST(req: Request) {
  try {
    const confirmData: ConfirmationData = await req.json();
    const confirm = await prisma.confirmation.create({
      data: confirmData,
    });
    return NextResponse.json({
      message: 'Submitted successfully',
      data: confirm,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Error when submit confirmation',
      },
      { status: 500 },
    );
  }
}
