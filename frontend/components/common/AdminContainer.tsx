type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AdminContainer({ children, className }: Props) {
  return (
    <>
      <main className={`px-4 sm:px-6 md:px-9.5 py-4 sm:py-6 md:py-9.5 ${className}`}>
        {children}
      </main>
    </>
  );
}
