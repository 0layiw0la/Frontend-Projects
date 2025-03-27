import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function RollingImageSlider({ img1, img2, img3, img4, index, onNext }) {
  const images = [img1, img2, img3, img4];
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        imgRef.current,
        { y: "100%", opacity: 0, rotate: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
      )
        .to(imgRef.current, { rotate: 70, duration: 0.5 }) // Roll right
        .to(imgRef.current, { rotate: -40, duration: 0.5 }) // Roll left
        .to(imgRef.current, { rotate: 0, duration: 0.5 }) // Reset rotation
        .to(imgRef.current, { y: "+=0", duration: 1 }) // Pause longer
        .to(imgRef.current, { y: "-150%", opacity: 0, duration: 0.8, ease: "power2.in" }) // Move up smoothly
        .eventCallback("onComplete", onNext); // Notify parent to change image

    }
  }, [index]);

  return (
    <div className="relative w-[28vw] h-[28vw] overflow-hidden flex items-center">
      <img
        className="absolute w-full h-auto m-auto object-cover bg-inherit"
        key={index}
        ref={imgRef}
        src={images[index]}
        alt="Rolling Image"
      />
    </div>
  );
}
