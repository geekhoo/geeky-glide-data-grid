# Read the package.json file
$packageJson = Get-Content -Raw -Path "package.json" | ConvertFrom-Json 

# Extract the devDependencies
$devDependencies = $packageJson.devDependencies

# Loop through each devDependency and install the latest version
foreach ($dependency in $devDependencies.PSObject.Properties.Name) {
    Write-Host "Installing latest version of $dependency..."
    npm install --save "$dependency@latest"
}