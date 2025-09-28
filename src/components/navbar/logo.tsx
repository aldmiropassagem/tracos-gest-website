import Image from "next/image";

export const Logo = () => (
   <Image
      src='/assets/logo.svg'
      alt='Traços Gest'
      width={100}
      height={100}
      className='w-16 h-16'
      priority
      sizes='(max-width: 768px) 50vw, 33vw'
      loading='eager'
      quality={100}
      style={{ objectFit: "cover" }}
   />
);
