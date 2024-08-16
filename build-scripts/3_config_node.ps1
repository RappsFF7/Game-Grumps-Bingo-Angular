# project
$env:PROJECT_PATH = $PSScriptRoot + "\.."

# node
$env:NODE_INSTALL_FILE = $env:PROJECT_PATH + "\build-scripts\2_node-v12.16.1-win-x64.zip"
$env:NODE_INSTALL_PATH = $env:PROJECT_PATH + "\node_install"
$env:NODE_MODULES_PATH = $env:NODE_INSTALL_PATH + "\node_modules"
$env:Path += ";" + $env:NODE_INSTALL_PATH + "\"

# app
$env:APP_NAME = "app-ggb"
$env:APP_PATH = $env:PROJECT_PATH + "\" + $env:APP_NAME
$env:APP_NODE_MODULES_PATH = $env:APP_PATH + "\node_modules"

# install npm
if (-Not (Test-Path -Path $env:NODE_INSTALL_PATH)) {
    Expand-Archive "$env:NODE_INSTALL_FILE" -DestinationPath "$env:NODE_INSTALL_PATH"
}