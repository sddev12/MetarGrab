# MetarGrab.com

## Infrastructure As Code

### Terraform v1.3.4

[terraform](https://www.terraform.io/downloads.html) / [terrafun](https://github.com/dougbw/pwsh-terrafun) \(terraform version manager\)

[az cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) \(terraform auth\)

## Naming Convention
In order to easily identify Azure resources they should follow the described naming convention, using the short notation for resources which don't accept `-` eg. Storage Account & Container Registry.

`[app_name]-[region_short]-[environment_short]-[resource_type]`

`[app_name][region_short][environment_short][resource_type]`

### App name

Name of the application resources are related to

### Region

| region        | region_short  |
|---------------|---------------|
| UK South      | UKS           |

### Environment

The environment scope from the following mapping

| environment       | environment_short |
|-------------------|-------------------|
| development       | dev               |
| prod              | prod              |

## Resource type

The resource identifier from the following mapping

| resource          | resource_short    |
|-------------------|-------------------|
| app service plan  | asp               |
| linux Web App     | lwa               |
| resource group    | rg                |
