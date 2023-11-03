import fs from 'fs';
import { NextRequest } from 'next/server';
import path from 'path';
import { toDo } from '../lib/types';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  const fileContents = fs.readFileSync(filePath, 'utf8');

  const data = JSON.parse(fileContents);

  return Response.json({data})
}

export async function POST(request: NextRequest) {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const currentData = JSON.parse(fileContents);

  const highestId = currentData.reduce((maxId :number, item : toDo) => Math.max(maxId, item.id), 0);

  const data : toDo = await request.json()
  
  const newTask = {
    id: highestId + 1,
    task: data.task,
    dueDate: data.dueDate
  };

  currentData.push(newTask);
  fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));

  return Response.json({"status":201,message: 'Task added successfully!'})
}

export async function DELETE(request: NextRequest){
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const currentData = JSON.parse(fileContents);

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const parsedId = id !== null ? parseInt(id) : null;

  const updatedData = currentData.filter((item : toDo) => item.id !== parsedId)

  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

  return Response.json({"status": 204, message: "Task completed successfully!"})

}