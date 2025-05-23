import Image from "next/image";

export const Logo = () => (
   <Image
      src='/assets/gest-logo.jpeg'
      alt='Traços Gest'
      width={100}
      height={100}
      className='w-16 h-16'
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      loading='eager'
      quality={100}
      style={{objectFit: "cover"}}
      />
);
