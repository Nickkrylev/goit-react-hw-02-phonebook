import { FilterInput, FilterLabel } from "./Filter.styled"

export const Filter = ({filter, OnChange}) => {
    return (
            <FilterLabel>
                Find contacts by name
                 <FilterInput type="text" value={filter} onChange={OnChange} />
            </FilterLabel>
    )
}