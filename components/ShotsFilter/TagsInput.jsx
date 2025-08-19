import { Search } from "lucide-react";
import { useFilterContext } from "@/contexts/ShotsFilterContext";
import { useState } from "react";

export default function TagInput(){
    const {tags, setTags} = useFilterContext()
    const [value, setValue] = useState(tags)

    
    return(
        <div>
            <div className="text-sm font-semibold">
                Tags
            </div>
            <div className="flex items-center gap-2 border-[1.5px] border-gray-300 rounded-lg px-4 filter-input mt-4">
                <Search className="size-4.5 text-gray-400" />
                <input 
                    type="text" 
                    className="outline-none flex-1 p-3 text-sm"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onBlur={() => setTags(value)}
                />
            </div>
        </div>
    )
}