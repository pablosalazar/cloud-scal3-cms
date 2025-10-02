import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Cloud Scal3 Logo" width={120} height={50} />
      <span className="sr-only">Cloud Scal3</span>
    </div>
  );
}
