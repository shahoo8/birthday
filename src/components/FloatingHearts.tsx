import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = [
    { size: 16, left: "10%", delay: "0s", duration: "6s" },
    { size: 20, left: "20%", delay: "1s", duration: "7s" },
    { size: 14, left: "35%", delay: "2s", duration: "5s" },
    { size: 18, left: "50%", delay: "0.5s", duration: "8s" },
    { size: 12, left: "65%", delay: "1.5s", duration: "6s" },
    { size: 22, left: "80%", delay: "2.5s", duration: "7s" },
    { size: 16, left: "90%", delay: "0.8s", duration: "5s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: heart.left,
            top: `${20 + (index * 10)}%`,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
