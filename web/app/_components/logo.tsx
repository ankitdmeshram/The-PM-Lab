import Image from "next/image";
import logoFull from "../_assets/logo-full.png";
import logoMark from "../_assets/logo-mark.png";

/** The flask mark on its own, for small spaces like the header. */
export function LogoMark({ className }: { className?: string }) {
  return <Image src={logoMark} alt="" className={className} priority />;
}

/** The full circular badge with "The PM Lab" and "Learn | Apply | Grow". */
export function LogoBadge({ className }: { className?: string }) {
  return <Image src={logoFull} alt="The PM Lab: Learn, Apply, Grow" className={className} />;
}
