type Props = {
  className?: string;
  children: React.ReactNode;
}

export default function Container({children, className}: Props) {
  return (
    <>
      <main className={`px-6 md:px-16 lg:px-34 py-10 md:py-22 ${className}`}>
        {children}
      </main>
    </>
  )
}