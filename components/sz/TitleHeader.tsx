export default function TitleHeader({ title }: { title: string }) {
  return (
    <div className="mt-11.75 mb-6 h-25 border-b border-border">
      <div className="max-w-340 mx-auto h-full flex items-center">
        <h1 className="text-3xl font-medium">{title}</h1>
      </div>
    </div>
  );
}
