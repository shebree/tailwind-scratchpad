import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

function SearchBar() {
	return (
		<div className="flex top-0 left-0 fixed p-2 md:max-w-[350px] w-full h-full">
			<Command className="flex rounded-lg border shadow-md max-h-fit">
				<CommandInput placeholder="Search" />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>Places</CommandItem>
						<CommandItem>People</CommandItem>
						<CommandItem>Pathways</CommandItem>
						<CommandItem>Plethora</CommandItem>
						<CommandItem>Plenum</CommandItem>
						<CommandItem>Places</CommandItem>
						<CommandItem>People</CommandItem>
						<CommandItem>Pathways</CommandItem>
						<CommandItem>Plethora</CommandItem>
						<CommandItem>Plenum</CommandItem>
						<CommandItem>Places</CommandItem>
						<CommandItem>People</CommandItem>
						<CommandItem>Pathways</CommandItem>
						<CommandItem>Plethora</CommandItem>
						<CommandItem>Plenum</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	);
}

export default SearchBar;
