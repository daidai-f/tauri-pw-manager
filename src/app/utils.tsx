import { useEffect, useState, createContext } from "react";
import {
  IconButton,
  AlertColor,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export type Page = "login" | "signup" | "main";

export type PageProps = {
  goToPage: (p: Page) => void;
  showAlert: (m: string, severity?: AlertColor) => void;
};

export const PageContext = createContext<PageProps>({} as PageProps);

export function useAsyncEffect(
  effect: () => Promise<void>,
  deps: React.DependencyList
) {
  useEffect(() => {
    effect().catch(console.error);
  }, deps);
}

export function PasswordField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
}) {
  const [show, setShow] = useState(false);
  const endAdornment = (
    <InputAdornment position="end">
      <Tooltip title={show ? "hide" : "show"}>
        <IconButton onClick={() => setShow(!show)} edge="end">
          {show ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
      type={show ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment,
        },
      }}
    />
  );
}
