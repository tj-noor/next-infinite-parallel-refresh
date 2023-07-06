export default function Layout({
  parallelA,
  parallelB,
}: {
  parallelA: React.ReactNode;
  parallelB: React.ReactNode;
}) {
  return (
    <main>
      <h3>{`(parallelA)`}</h3>
      <div>{parallelA}</div>
      <h3>{`(parallelB)`}</h3>
      <div>{parallelB}</div>
    </main>
  );
}
