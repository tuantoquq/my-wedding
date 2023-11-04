import { prisma } from '@/services/db-client';
import { WishData } from '@/services/types';
import { NextResponse } from 'next/server';
export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return NextResponse.json({
      message: 'Fetch comments successfully',
      data: comments,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Error when fetching comments',
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const addCommentDto: WishData = await req.json();
    console.log(addCommentDto);
    const comment = await prisma.comment.create({
      data: addCommentDto,
    });
    return NextResponse.json({
      message: 'Add comment successfully',
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Error when add comment',
      },
      { status: 500 },
    );
  }
}
