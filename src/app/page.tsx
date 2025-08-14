import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Atividade 1 do 2o bimestre com hook reducer e shadcnui</h2>
      <nav style={{ marginTop: '2em' }}>
        <ul style={{ display: 'flex', gap: '1em', listStyle: 'none', padding: 0 }}>
          <li><Link href="/tarefas">Lista de Tarefas</Link></li>
        </ul>
      </nav>
    </>
  );
}
