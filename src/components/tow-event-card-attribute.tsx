type Props = {
  name: string;
  value: string | null;
};

export function TowEventCardAttribute({ name, value }: Props) {
  return (
    <div>
      <h4 className="text-xl font-semibold tracking-tight">{name}</h4>
      <p>{value ?? '-'}</p>
    </div>
  );
}
