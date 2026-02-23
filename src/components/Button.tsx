interface ButtonProps {
  text: string;
  variant?: "primary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const variants: Record<"primary" , string> = {
  primary: `
    text-white
    bg-[#0d7ff2]
shadow-[0_0_15px_rgba(13,127,242,0.6)]
hover:shadow-[0_0_30px_rgba(13,127,242,0.9)]
    hover:scale-105
  `
};

export function Button({ text, variant = "primary",onClick }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";

  return <button onClick={onClick} className={`${base}  ${variants[variant]}`}>{text}</button>;
}

export default Button;
