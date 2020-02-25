# manual step: install node to <project_directory>\node_install

# project
$env:PROJECT_PATH = $PSScriptRoot + "\.."

# node
$env:NODE_INSTALL_PATH = $env:PROJECT_PATH + "\node_install"
$env:NODE_MODULES_PATH = $env:NODE_INSTALL_PATH + "\node_modules"
$env:Path += ";" + $env:NODE_INSTALL_PATH + "\"

# app
$env:APP_NAME = "app-ggb"
$env:APP_PATH = $env:PROJECT_PATH + "\" + $env:APP_NAME