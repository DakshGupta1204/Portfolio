import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600" />
      <motion.div
        initial={{ backgroundPosition: "0 0" }}
        animate={{
          backgroundPosition: ["0 0", "200% 0"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
        className={cn(
          "relative rounded-xl border border-transparent bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 p-1",
          className
        )}
      >
        <div className="relative rounded-[11px] bg-zinc-900 px-8 py-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};