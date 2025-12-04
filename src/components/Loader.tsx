import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
