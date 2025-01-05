import { invoke, InvokeArgs } from "@tauri-apps/api/core";

export type Credentials = { username: string; password: string };

interface ApiResponse<T> {
  ok: true;
  value: T;
}

interface ApiError {
  ok: false;
  error: string;
}

async function call<T = undefined>(
  fn: string,
  args?: InvokeArgs
): Promise<ApiResponse<T> | ApiError> {
  try {
    return { ok: true, value: await invoke<T>(fn, args) };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export const login = (username: string, password: string) =>
  call("login", { username, password });
export const logout = () => call("logout");