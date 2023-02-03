resource "azurerm_network_security_group" "net_sec_group" {
  name                = "metargrab-${var.region_short}-${var.environment_short}-nsg"
  location            = azurerm_resource_goup.metargrab.location
  resource_group_name = azurerm_resource_goup.metargrab.name
}

resource "azurerm_virtual_network" "vnet" {
  name                = "metargrab-${var.region_short}-${var.environment.environment_short}-vnet"
  resource_group_name = azurerm_resource_goup.metargrab.name
  address_space       = ["10.0.0.0/16"]
  dns_servers         = []

  subnet {
    name = "stuxnet"
    address_prefix = ["10.0.1.0/24"]
  }
}
