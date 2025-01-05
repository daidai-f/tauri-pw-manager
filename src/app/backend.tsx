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
export const create_account = (username: string, password: string) =>
  call("create_account", { username, password });
export const window_close = () => call("window_close");
export const window_minimize = () => call("window_minimize");
export const window_toggle_fullscreen = () => call("window_toggle_fullscreen");
