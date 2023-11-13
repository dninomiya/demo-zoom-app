import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-16 flex items-center border-b px-4">
      <Link href="/">LOGO</Link>
      <span className="flex-1"></span>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/lp">サービスについて</Link>
      </Button>
    </header>
  );
}
