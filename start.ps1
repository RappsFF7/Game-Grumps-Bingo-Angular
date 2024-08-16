Push-Location "build-scripts"
& ".\3_config_node.ps1"
if (-Not (Test-Path -Path $env:APP_NODE_MODULES_PATH)) {
    & ".\4_app_dependencies.ps1"
}
& ".\6_app-start.ps1"
Pop-Location