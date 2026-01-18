import SubtitleContext from "@/contexts/subtitle-context";
import { ThemeProvider } from "@/contexts/theme-provider/theme-provider.client";
import { PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <SubtitleContext>{children}</SubtitleContext>
    </ThemeProvider>
  );
};

export default Providers;
