import Link from "next/link";
import type { Tarefa } from "../types/tarefa";

interface TarefaProps {
  tarefa: Tarefa;
  onToggle: (id: string) => void;
}

export default function TarefaItem({ tarefa, onToggle }: TarefaProps) {
  return (
    <li
      style={{
        marginBottom: "1em",
        cursor: "pointer",
        padding: "1em",
        backgroundColor: '#222f45ff',
        borderRadius: '.5em',
        boxShadow: '0 6px 18px #0004',
        opacity: tarefa.concluida ? 0.6 : 1,
        textDecoration: tarefa.concluida ? "line-through" : "none",
        transition: "all 0.2s",
        position: 'relative',
        minHeight: '6em',
      }}
      onClick={() => onToggle(tarefa.id)}
      title="Clique para alternar o status da tarefa"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{tarefa.titulo}</strong>
        <div style={{ display: 'flex', gap: '0.2em' }} onClick={e => e.stopPropagation()}>
          <Link
            href={`/tarefas/${tarefa.id}`}
            title="Editar tarefa"
            style={{
              color: '#e9ecf7',
              background: 'none',
              border: 'none',
              borderRadius: '0.3em',
              padding: '0.1em 0.1em',
              fontSize: '1.1em',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13.5V16h2.5l7.06-7.06-2.5-2.5L4 13.5z" stroke="#fff" strokeWidth="1.5" fill="none"/>
              <path d="M14.85 7.15a1 1 0 0 0 0-1.41l-1.59-1.59a1 1 0 0 0-1.41 0l-1.13 1.13 2.5 2.5 1.13-1.13z" stroke="#fff" strokeWidth="1.5" fill="none"/>
            </svg>
          </Link>
          <Link
            href={`/tarefas/${tarefa.id}/apagar`}
            title="Apagar tarefa"
            style={{
              color: '#e9ecf7',
              background: 'none',
              border: 'none',
              borderRadius: '0.3em',
              padding: '0.1em 0.1em',
              fontSize: '1.2em',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="5" x2="15" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="15" y1="5" x2="5" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>
      <p>{tarefa.descricao}</p>
      <span style={{ color: tarefa.concluida ? 'green' : 'orange' }}>
        {tarefa.concluida ? 'Concluída' : 'Pendente'}
      </span>
    </li>
  );
}
