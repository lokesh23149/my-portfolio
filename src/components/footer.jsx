export default function Footer() {

  const config={
    footer:"Lokeshwaran V 2025" 
  }
  return (
    <footer className="flex justify-center bg-gradient-to-r from-slate-800 to-slate-900 p-4">
      <div className="text-slate-200 font-semibold tracking-wide">
        &copy;{config.footer}
      </div>
    </footer>
  );
}
