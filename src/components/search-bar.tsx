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
</Command>;
