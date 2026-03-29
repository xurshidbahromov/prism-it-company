import { Button } from "@/components/ui/BaseButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ButtonWithIconProps {
  href?: string;
  className?: string;
}

const ButtonWithIconDemo = ({ href, className }: ButtonWithIconProps) => {
  const t = useTranslations('CTA');
  const content = (
    <Button className={`relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-700 ease-in-out hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer ${className || ""}`}>
      <span className="relative z-10 transition-all duration-700 ease-in-out">
        {t('primaryButton')}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-700 ease-in-out group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default ButtonWithIconDemo;
