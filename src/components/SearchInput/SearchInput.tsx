import searchIcon from "@/assets/icons/search_icon.svg";
import "./SearchInput.scss";

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const SearchInput = ({
  placeholder = "Введите запрос...",
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="search-input">
      <img src={searchIcon} alt="Search" className="search-input__icon" />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="search-input__field"
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  );
};
