export const metadata = {
  title: "About us",
  description: "The best movies on the best framework",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}
