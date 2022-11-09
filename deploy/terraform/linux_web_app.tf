resource "azurerm_linux_web_app" "metargrab_web_app" {
  name            = "metargrab-${var.environment}-lwa"
  location        = azurerm_resource_group.metargrab.location
  service_plan_id = azurerm_service_plan.metargrab_serviceplan.id

  site_config {

  }
}
