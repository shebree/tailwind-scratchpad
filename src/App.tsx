import "./App.css";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ThemeProvider } from "@/components/theme-provider";
import MapComponent from "@/components/map";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MapComponent className="map"/>
        <Command className="rounded-lg border shadow-md md:max-w-[350px] md:max-h-fit fixed top-2 left-2">
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Places</CommandItem>
              <CommandItem>People</CommandItem>
              <CommandItem>Pathways</CommandItem>
              <CommandItem>Plethora</CommandItem>
              <CommandItem>Plenum</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ThemeProvider>
    </>
  );
}

export default App;
