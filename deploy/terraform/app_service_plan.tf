resource "azurerm_service_plan" "metargrab_serviceplan" {
  name                = "metargrab-${var.region_short}-${var.environment_short}-asp"
  resource_group_name = azurerm_resource_goup.metargrab.name
  location            = azurerm_resource_goup.metargrab.location
  os_type             = "Linux"
  sku_name            = "B1"
}
