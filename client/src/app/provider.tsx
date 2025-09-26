import { QueryProvider } from "@/common/providers/query-provider";
import { ThemeProvider } from "@/common/providers/theme-provider";
import { Toaster } from "react-hot-toast";

interface ProviderLayoutProps {
  children: React.ReactNode;
}

const ProviderLayout = ({ children }: ProviderLayoutProps) => {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  );
};

export default ProviderLayout;
