"use client";

import { useReducer } from "react";
import Link from "next/link";
import { tarefasReducer } from "../../lib/tarefasReducer";

import type { Tarefa } from "../../types/tarefa";
import TarefaItem from "../../components/tarefa";

const tarefasIniciais: Tarefa[] = [
  {
    id: "1",
    titulo: "Estudar React",
    descricao: "Ler documentação do useReducer",
    concluida: false,
  },
  {
    id: "2",
    titulo: "Fazer atividade",
    descricao: "Implementar CRUD de tarefas",
    concluida: false,
  },
  {
    id: "3",
    titulo: "Revisar código",
    descricao: "Verificar padrões e boas práticas no projeto",
    concluida: false,
  },
  {
    id: "4",
    titulo: "Testar aplicação",
    descricao: "Executar testes manuais nas páginas de tarefas",
    concluida: false,
  },
  {
    id: "5",
    titulo: "Documentar funções",
    descricao: "Adicionar comentários explicativos no reducer",
    concluida: false,
  },
  {
    id: "6",
    titulo: "Enviar para o GitHub",
    descricao: "Fazer commit e push das alterações finais",
    concluida: false,
  },
  {
    id: "7",
    titulo: "Apresentar atividade",
    descricao: "Mostrar o funcionamento para o professor",
    concluida: false,
  },
];

export default function TarefasPage() {
  const [tarefas, dispatch] = useReducer(tarefasReducer, tarefasIniciais);

  function handleToggle(id: string) {
    dispatch({ type: "concluir", id });
  }

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          marginBottom: '1.5em',
        }}
      >
        <div></div>
        <h1 style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}>Lista de Tarefas</h1>
        <Link
          href="/tarefas/nova"
          style={{
            background: '#0a2342',
            color: '#fff',
            border: 'none',
            borderRadius: '.5em',
            padding: '.7em 1.5em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: 400,
            boxShadow: '0 2px 8px #0002',
            transition: 'background 0.2s',
            marginLeft: 'auto',
          }}
          title="Adicionar nova tarefa"
        >
          {/* <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#0a2342"/>
            <line x1="12" y1="7" x2="12" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="7" y1="12" x2="17" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg> */}
          + Nova tarefa
        </Link>
      </div>
      {tarefas.length === 0 ? (
        <p style={{ color: 'gray', marginTop: '2em' }}>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5em',
            padding: 0,
            listStyle: 'none',
          }}
        >
          {tarefas.map((t) => (
            <TarefaItem key={t.id} tarefa={t} onToggle={handleToggle} />
          ))}
        </ul>
      )}
    </div>
  );
}
