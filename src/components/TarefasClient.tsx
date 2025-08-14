"use client";

import { useReducer } from "react";
import { useTransition } from "react";
import Link from "next/link";
import { tarefasReducer } from "../lib/tarefasReducer";
import type { Tarefa } from "../types/tarefa";
import TarefaItem from "../components/tarefa";

interface Props {
	tarefasIniciais: Tarefa[];
}

export default function TarefasClient({ tarefasIniciais }: Props) {
	const [state, dispatch] = useReducer(tarefasReducer, tarefasIniciais);

		const [isPending, startTransition] = useTransition();

		async function handleToggle(id: string) {
			const tarefa = state.find((t) => t.id === id);
			if (!tarefa) return;
			const novaConcluida = !tarefa.concluida;
			// Atualiza localmente
			dispatch({ type: "concluir", id });
			// Atualiza no JSON via API
			startTransition(async () => {
				await fetch("/tarefas/api/toggle", {
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ id, concluida: novaConcluida }),
				});
			});
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
										color: '#e9ecf7',
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
										gap: '.7em',
									}}
									title="Adicionar nova tarefa"
									aria-label="Adicionar nova tarefa"
								>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 3v18M3 12h18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
									</svg>
									<span style={{ fontSize: '1.1em', fontWeight: 500 }}>Nova tarefa</span>
								</Link>
			</div>
			{state.length === 0 ? (
				<p style={{ color: '#b7c6e9', marginTop: '2em' }}>Nenhuma tarefa cadastrada.</p>
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
					{state.map((t) => (
						<TarefaItem key={t.id} tarefa={t} onToggle={handleToggle} />
					))}
				</ul>
			)}
		</div>
	);
}
