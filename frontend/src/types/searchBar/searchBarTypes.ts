export type SearchBarProps = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search:string
};
  
export type SearchState = {
  query:string
}

export const SearchInitialState: SearchState = {
  query:""
  
}