import ShotsFilter from "@/components/ShotsFilter";
import { FilterContextProvider } from "@/contexts/ShotsFilterContext";

export default  function Page(){
    return (
        <>
           <FilterContextProvider>
                <ShotsFilter />
           </FilterContextProvider>
        </>
    )
}