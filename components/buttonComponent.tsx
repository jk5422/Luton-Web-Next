import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonComponentProps = {
  name: string;
  classnames?: string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default function ButtonComponent({
  name,
  classnames,
  ...props
}: ButtonComponentProps) {
  return (
    <Button
      className={cn(
        classnames,
        "bg-Black-200 text-lg rounded-sm transition-all duration-500 ease-[cubic-bezier(0.19, 1, 0.22, 1)] hover:bg-Black-300 shadow-none"
      )}
      {...props}
    >
      {name}
    </Button>
  );
}
