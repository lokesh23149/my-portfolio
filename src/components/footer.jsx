export default function Footer() {

  const config={
    footer:"lokii 2025" 
  }
  return (
    <footer className="flex justify-center bg-gray-600 p-2">
      
      <div className="text-white font-bold">&copy;{config.footer}</div>
    </footer>
  );
}
