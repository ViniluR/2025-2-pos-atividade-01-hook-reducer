
import { promises as fs } from 'fs';
import path from 'path';
import type { Tarefa } from "../../types/tarefa";

import TarefasClient from "../../components/TarefasClient";

export default async function TarefasPage() {
  const filePath = path.join(process.cwd(), "src/app/tarefas/tarefas.json");
  // Importação do JSON feita no server-side abaixo
  const data = await fs.readFile(filePath, "utf-8");
  const tarefas: Tarefa[] = JSON.parse(data);
  return <TarefasClient tarefasIniciais={tarefas} />;
}

