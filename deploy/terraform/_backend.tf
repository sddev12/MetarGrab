terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate"
    storage_account_name = "sddevtfstate"
    container_name       = "tfstate"
    key                  = "metargrab"
  }
}