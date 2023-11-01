import { AddCommentDto } from '@/app/dtos/comment.dto';
import { prisma } from '@/libs/db-client';
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
    const addCommentDto: AddCommentDto = await req.json();
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
