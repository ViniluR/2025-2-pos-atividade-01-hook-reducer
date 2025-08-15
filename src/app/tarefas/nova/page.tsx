"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import FormularioTarefa from "../../../components/FormularioTarefa";
import type { Tarefa } from "../../../types/tarefa";

export default function NovaTarefaPage() {
  const router = useRouter();

  function adicionarTarefa(tarefa: Tarefa) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    router.push('/tarefas');
  }

  return (
    <div>
        <Link href="/tarefas" style={{
          display: 'inline-block',
          margin: '1em 0 0 1em',
          background: '#0a2342',
          color: '#e9ecf7',
          border: 'none',
          borderRadius: '.5em',
          padding: '.5em 1.2em',
          fontWeight: 500,
          textDecoration: 'none',
          boxShadow: '0 2px 8px #0002',
          transition: 'background 0.2s',
        }}>← Voltar</Link>
      <h1 style={{ textAlign: 'center', margin: '0 1em 0', color: '#e9ecf7', fontSize: '24px' }}>Adicionar nova tarefa</h1>
      <FormularioTarefa onAdicionar={adicionarTarefa} />
    </div>
  );
}
