// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login, logout, create_account, window_close, window_minimize, window_toggle_fullscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn login(username: String, password: String) -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn logout() -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn create_account(username: String, password: String) -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn window_close() -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn window_minimize() -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn window_toggle_fullscreen() -> Result<(), String> {
    Ok(())
}