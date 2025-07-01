import { Logo } from '@/components/Logo';

export default function Preloader() {
  return (
    <div id="preloader" className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
}
