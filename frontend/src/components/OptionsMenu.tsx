import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function OptionsMenu() {
    return (
        <Select>
          <SelectTrigger className="w-fit border-0">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h0m0 6h0m0 6h0"/>
          </svg>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Download</SelectItem>
              <SelectItem value="banana">Duplicate</SelectItem>
              <SelectItem value="grapes">Delete</SelectItem>
              <SelectItem value="blueberry">Edit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
    
}

export default OptionsMenu