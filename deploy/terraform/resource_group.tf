resource "azurerm_resource_goup" "metargrab" {
  name     = "metargrab-${var.region_short}-${var.environment_short}-rg"
  location = "Uk South"
}
