// frontend/src/app/api/users/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    const result = await db.collection('users').insertOne(body);

    return NextResponse.json({ message: 'User inserted!', id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
