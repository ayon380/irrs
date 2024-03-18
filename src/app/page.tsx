import Image from "next/image";

export default function Home() {
  return (
    <div className="main1 relative">
      <Image
        src="/vb.jpg"
        alt="Background Image"
        // layout="fill"
        height={1000}
        width={2000}
        // objectFit="cover"
        className="absolute inset-0 top-0"
      />
      <div className="z-10"> {/* Your content goes here */}</div>
    </div>
  );
}
