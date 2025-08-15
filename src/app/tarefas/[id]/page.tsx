
"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import FormularioTarefa from "../../../components/FormularioTarefa";
import type { Tarefa } from "../../../types/tarefa";
import Link from "next/link";

export default function EditarTarefaPage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [tarefa, setTarefa] = useState<Tarefa | null>(null);

  useEffect(() => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const encontrada = tarefas.find((t: Tarefa) => t.id === id);
    if (encontrada) setTarefa(encontrada);
    else router.push('/tarefas');
  }, [id, router]);

  function editarTarefa(tarefaEditada: Tarefa) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const idx = tarefas.findIndex((t: Tarefa) => t.id === id);
    if (idx !== -1) {
      tarefas[idx] = tarefaEditada;
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
    router.push('/tarefas');
  }

  if (!tarefa) return null;

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
      <h1 style={{ textAlign: 'center', marginBottom: '1em', color: '#e9ecf7', fontSize: '24px' }}>Editar tarefa</h1>
      <FormularioTarefa
        onAdicionar={editarTarefa}
        textoBotao="Salvar alterações"
        titulo={tarefa.titulo}
        descricao={tarefa.descricao}
      />
    </div>
  );
}
