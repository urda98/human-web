import Image from "next/image";

type PhoneShotProps = {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
};

export function PhoneShot({ src, alt, label, priority }: PhoneShotProps) {
  return (
    <figure className="phone-shot">
      <div className="phone-frame">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="phone-image"
          priority={priority}
          sizes="(max-width: 640px) 200px, 220px"
        />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
