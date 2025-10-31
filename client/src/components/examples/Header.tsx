import Header from '../Header';
import { ThemeProvider } from "@/hooks/use-theme";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header onNavigate={(section) => console.log(`Navigating to ${section}`)} />
    </ThemeProvider>
  );
}
