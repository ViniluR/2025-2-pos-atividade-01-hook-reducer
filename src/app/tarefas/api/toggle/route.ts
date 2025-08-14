import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function PATCH(req: NextRequest) {
  try {
    const { id, concluida } = await req.json();
    const filePath = path.join(process.cwd(), 'src/app/tarefas/tarefas.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const tarefas = JSON.parse(data);
    const idx = tarefas.findIndex((t: any) => t.id === id);
    if (idx === -1) {
      return NextResponse.json({ error: 'Tarefa não encontrada' }, { status: 404 });
    }
    tarefas[idx].concluida = concluida;
    await fs.writeFile(filePath, JSON.stringify(tarefas, null, 2));
    return NextResponse.json({ success: true, tarefa: tarefas[idx] });
  } catch (e) {
    return NextResponse.json({ error: 'Erro ao atualizar tarefa' }, { status: 500 });
  }
}
