define({"816":{i:0.000246323173716893,u:"../module_migration_guides/mg-discount-promotion.htm",a:"Migration Guide - DiscountPromotion Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - DiscountPromotion | Spryker"},"817":{i:0.000246323173716893,u:"../module_migration_guides/mg-discount-promotion-widget.htm",a:"Migration Guide - DiscountPromotionWidget Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please ...",t:"Migration Guide - DiscountPromotionWidget | Spryker"},"818":{i:0.000351010703420111,u:"../module_migration_guides/mg-discount-calculator-connector.htm",a:" Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to the separate repository in spryker/calculation-migration. To learn how to migrate to the new structure see,  Migration Guide - Calculation ...",t:"Migration Guide - DiscountCalculatorConnector  "},"819":{i:0.000246323173716893,u:"../module_migration_guides/mg-discount-sales-aggregator-connector.htm",a:" Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.   See also: Learn how to migrate Discount Learn how to migrate DiscountCalculatorConnector Get a general idea about Discount Learn how to apply a discount ...",t:"Migration Guide - DiscountSalesAggregatorConnector  "},"820":{i:0.000246323173716893,u:"../module_migration_guides/mg-environment-config.htm",a:" The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of the configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration  "},"821":{i:0.000246323173716893,u:"../module_migration_guides/mg-manual-order-entry-gui.htm",a:"Migration Guide - ManualOrderEntryGui Upgrading from Version 0.7.* to Version 0.8.0 In this new version of the ManualOrderEntryGui module, we have added support of split delivery. You can find more details about the changes on the  ManualOrderEntryGui module release  page. This release is a part of ...",t:"Migration Guide - ManualOrderEntryGui | Spryker"},"822":{i:0.000246323173716893,u:"../module_migration_guides/mg-monitoring.htm",a:"Upgrading from Version 1.* to Version 2.* For BC reasons, the initial version of this module had dependencies to spryker/new-relic and the spryker/new-relic-api modules. In this version, we have removed this hard dependency. If you still want to use New Relic as a monitoring service, you can use the ...",t:"Migration Guide - Monitoring"},"823":{i:0.000246323173716893,u:"../module_migration_guides/mg-multi-cart-page.htm",a:"The guide will walk you through the process of migrating the MultiCartPage module to the new version.",t:"Migration Guide - MultiCartPage | Spryker"},"824":{i:0.00301993829157424,u:"../module_migration_guides/mg-multi-currency.htm",a:"Migration Guide - Multi-Currency  Migrating System to Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n ...",t:"Migration Guide - Multi Currency"},"825":{i:0.00164211038812145,u:"../module_migration_guides/mg-navigation.htm",a:" Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module  "},"826":{i:0.00164211038812145,u:"../module_migration_guides/mg-navigation-gui.htm",a:" Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module  "},"827":{i:0.000246323173716893,u:"../module_migration_guides/mg-oauthcompanyuser.htm",a:"Upgrading from Version 1.x.x to 2.x.x OauthCompanyUser module version 2.0.0 brings two major changes: GLUE layer has been moved from Glue OauthCompanyUser to CompanyUserAuthRestApi (Migration Guide - CompanyUserAuthRestApi). OauthCompanyUserConfig::OAUTH_CLIENT_IDENTIFIER, ...",t:"Migration Guide - OauthCompanyUser"},"828":{i:0.000246323173716893,u:"../module_migration_guides/mg-offer.htm",a:"Migration Guide - Offer Upgrading from version 0.1.* to 0.3.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if ...",t:"Migration Guide - Offer | Spryker"},"829":{i:0.000246323173716893,u:"../module_migration_guides/mg-offer-gui.htm",a:"Migration Guide - OfferGui Upgrading from version 0.1.* to 0.3.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - OfferGui | Spryker"},"830":{i:0.000455698233123329,u:"../module_migration_guides/mg-oms.htm",a:" Upgrading from version 8.* to 10.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - OMS    "},"831":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-packaging-unit-storage.htm",a:"Migration Guide - ProductPackagingUnitStorage Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - PackagingUnitStorage | Spryker"},"832":{i:0.000246323173716893,u:"../module_migration_guides/mg-payment.htm",a:" Upgrading from Version 3.* to Version 4.* In the Payment module version 4 we have added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer ...",t:"Migration Guide - Payment    "},"833":{i:0.000246323173716893,u:"../module_migration_guides/mg-persistent-cart.htm",a:"Migration Guide - PersistentCart Upgrading from version 1.* to 3.0.0\n  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PersistentCart | Spryker"},"834":{i:0.00280189856327721,u:"../module_migration_guides/mg-price.htm",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"835":{i:0.000429677658280061,u:"../module_migration_guides/mg-price-cart-connector.htm",a:"Upgrading from version 4.* to 6.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Price Cart Connector"},"836":{i:0.000246323173716893,u:"../module_migration_guides/mg-priceproduct.htm",a:"This topic covers the information related to the migration procedure for PriceProduct module when upgrading from Version 1.* to Version 2.*.",t:"Migration Guide - PriceProduct | Spryker"},"837":{i:0.000351010703420111,u:"../module_migration_guides/mg-price-product-schedule.htm",a:"Migration Guide - PriceProductSchedule Upgrading from version 1.* to 2.0.0 Upgrade the PriceProductSchedule module to version 2.0.0:\n\t\t\t\t composer require spryker/price-product-schedule: \"^2.0.0\" --update-with-dependencies Generate transfers: console transfer:generate Estimated migration time: 5 ...",t:"Migration Guide - PriceProductSchedule | Spryker"},"838":{i:0.000351010703420111,u:"../module_migration_guides/mg-price-product-schedule-gui.htm",a:"Migration Guide - PriceProductScheduleGui Upgrading from version 1.* to 2.0.0 Upgrade the PriceProductScheduleGui module to version 2.0.0:\n\t\t\t\t\t composer require spryker/price-product-schedule-gui: \"^2.0.0\" --update-with-dependencies Generate transfers: console transfer:generate Estimated migration ...",t:"Migration Guide - PriceProductScheduleGui | Spryker"},"839":{i:0.000246323173716893,u:"../module_migration_guides/mg-price-product-storage.htm",a:"Migration Guide - PriceProductStorage Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductStorage | Spryker"},"840":{i:0.000246323173716893,u:"../module_migration_guides/mg-price-product-volume.htm",a:"Migration Guide - PriceProductVolume Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductVolume | Spryker"},"841":{i:0.000246323173716893,u:"../module_migration_guides/mg-price-product-volume-gui.htm",a:"Migration Guide - PriceProductVolumeGui Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductVolumeGui | Spryker"},"842":{i:0.00148185986039439,u:"../module_migration_guides/mg-product.htm",a:"Upgrading from Version 5.* to Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"843":{i:0.000658465758484635,u:"../module_migration_guides/mg-product-bundle.htm",a:"Upgrading from version 4.* to 6.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Bundle"},"844":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-details-page.htm",a:"Migration Guide - ProductDetailPage Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductDetailPage | Spryker"},"845":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-discount-connector.htm",a:"Migration Guide - ProductDiscountConnector Upgrading from version 3.* to 5.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductDiscountConnector | Spryker"},"846":{i:0.000515592360420592,u:"../module_migration_guides/mg-product-label.htm",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"847":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-label-discount-connector.htm",a:"Migration Guide - ProductLabelDiscountConnector Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductLabelDiscountConnector | Spryker"},"848":{i:0.000658465758484635,u:"../module_migration_guides/mg-product-label-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label GUI"},"849":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-list-search.htm",a:"Migration Guide - ProductListSearch Upgrading from Version 1.* to Version 2.* The main goal of ProductListSearch 2.x.x is to add support of Concrete Products search introduced in ProductPageSearch 3.x.x. To complete the migration, follow the steps below: Update spryker/product-page-search ^3.2.0 ...",t:"Migration Guide - ProductListSearch | Spryker"},"850":{i:0.000901883445455607,u:"../module_migration_guides/mg-product-management.htm",a:"Upgrading from version 0.* to 0.18.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - ProductManagement"},"851":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-measurement-unit.htm",a:"Migration Guide - ProductMeasurementUnit Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductMeasurementUnit | Spryker"},"852":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-measurement-unit-widget.htm",a:"Migration Guide - ProductMeasurementUnitWidget Upgrading from version 0.6.* to 0.8.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductMeasurementUnitWidget | Spryker"},"853":{i:0.00104708063303311,u:"../module_migration_guides/mg-product-option.htm",a:"Upgrading from version 6.* to 8.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Option"},"854":{i:0.000726352302828701,u:"../module_migration_guides/mg-product-option-cart-connector.htm",a:"Upgrading from version 5.* to 7.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Option Cart Connector"},"855":{i:0.000281219016951299,u:"../module_migration_guides/mg-product-option-discount-connector.htm",a:"Upgrading from Version 2.* to Version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product Label Gui  ",t:"Migration Guide - ProductOptionDiscountConnector"},"856":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-option-exporter.htm",a:"Upgrading from version 2.* to version 3.* The ProductOptionExporter  module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate  Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product ...",t:"Migration Guide - ProductOptionExporter"},"857":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-packaging-unit.htm",a:"Migration Guide - ProductPackagingUnit Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductPackagingUnit | Spryker"},"858":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-packaging-unit-widget.htm",a:"Migration Guide - ProductPackagingUnitWidget Upgrading from version 0.2.* to 0.4.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductPackagingUnitWidget | Spryker"},"859":{i:0.000665073292529764,u:"../module_migration_guides/mg-product-page-search.htm",a:"Migration Guide - ProductPageSearch Upgrading from Version 2.* to 3.* ProductPageSearch 3.0.0 got separate search index for Concrete Products. It includes database table and ElasticSearch index. To perform the migration, follow the steps: Run the database migration: vendor/bin/console propel:install ...",t:"Migration guide - ProductPageSearch | Spryker"},"860":{i:0.000612291438270832,u:"../module_migration_guides/mg-product-relation.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . We have changed Zed table to use PriceProductFacade for retrieving product prices. We have also changed ...",t:"Migration Guide - Product Relation"},"861":{i:0.000429677658280061,u:"../module_migration_guides/mg-product-relation-collector.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we added support for multi-currency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},"862":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-search.htm",a:"Upgrading from Version 3.* to Version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"863":{i:0.000534365187983279,u:"../module_migration_guides/mg-product-set-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we have support multi-currency. First of all make sure you  have migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you overwrote ...",t:"Migration Guide - Product Set GUI"},"864":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-validity.htm",a:"Installing Version 1.* The Product Validity module is responsible for (de)activation of products for (or starting from) a certain period of time. Follow the instructions below to have the module up and running in your shop. Database Changes \n            We have added a new  spy_product_validity ...",t:"Migration Guide - Product Validity"},"865":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-quantity.htm",a:"Migration Guide - ProductQuantity Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductQuantity | Spryker"},"866":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-quantity-data-import.htm",a:"Migration Guide - ProductQuantityDataImport Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductQuantityDataImport | Spryker"},"867":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-quantity-storage.htm",a:"Migration Guide - ProductQuantityStorage Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductQuantityStorage | Spryker"},"868":{i:0.000246323173716893,u:"../module_migration_guides/mg-product-search-widget.htm",a:"Migration Guide - ProductSearchWidget Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductSearchWidget | Spryker"},"869":{i:0.000246323173716893,u:"../module_migration_guides/mg-pub-and-sync.htm",a:"Upgrading from Version 0.* to Version 1.* Version 1 of the Storage and the Search modules Table Indexs In this version, Indexes were added to Storage and Search tables, this will increase the performance of Listeners and workers. Store and Redis Keys Currently, Spryker supports multi-store and this ...",t:"Migration Guide - Publish and Synchronization"},"870":{i:0.000246323173716893,u:"../module_migration_guides/mg-quick-order.htm",a:"Migration Guide - QuickOrder Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - QuickOrder | Spryker"},"871":{i:0.000246323173716893,u:"../module_migration_guides/mg-quick-order-page.htm",a:"The guideline provides the steps how to migrate QuickOrder module from version 1.0.0 to version 2.0.0.",t:"Migration Guide - QuickOrderPage  | Spryker"},"872":{i:0.00220160378485598,u:"../module_migration_guides/mg-quote.htm",a:" Upgrading from Version 1.* to Version 2.* The new version of Quote module provides the ability to save customer quote into the database and get it. Quote storage strategy (session, database) can be changed in Spryker\\Shared\\Quote\\QuoteConfig::getStorageStrategy. If you’re migrating the Quote module ...",t:"Migration Guide - Quote  "},"873":{i:0.00448986835318365,u:"../module_migration_guides/mg-quoterequest.htm",a:"Upgrading from Version 1.x.x to 2.x.x QuoteRequest module version 2.0.0 brings one major change - column is_latest_version_hidden has been replaced by is_latest_version_visible column in the spy_quote_request database table. Its main purpose is to make the parameter name more intuitive for the end ...",t:"Migration Guide - QuoteRequest"},"874":{i:0.002468943521752,u:"../module_migration_guides/mg-quoterequestagent.htm",a:"Migration Guide - QuoteRequestAgent Upgrading from Version 1.x.x to 2.x.x The one major change of QuoteRequestAgent 2.x.x is the dependency update for spryker/quote-request:^2.0.0 To migrate the module QuoteRequestAgent from version 1.0.0 to 2.0.0: Update spryker/quote-request:^2.0.0 by following ...",t:"Migration Guide - QuoteRequestAgent | Spryker"},"875":{i:0.000246323173716893,u:"../module_migration_guides/mg-quoterequestagentpage.htm",a:"Upgrading from Version 1.x.x to 2.x.x The only major change of the QuoteRequestAgentPage 2.x.x is the dependency update for spryker/quote-request-agent:^2.0.0 and spryker/quote-request:^2.0.0 Also, transfer property QuoteRequestTranser::isLatestVersionHidden was replaced by ...",t:"Migration Guide - QuoteRequestAgentPage"},"876":{i:0.000246323173716893,u:"../module_migration_guides/mg-quoterequestagentwidget.htm",a:"Upgrading from Version 1.x.x to 2.x.x The only major change of QuoteRequestAgentWidget 2.x.x is the dependency update for spryker/quote-request-agent:^2.0.0. To migrate, do the following: Update spryker/quote-request-agent to version ^2.0.0 by following the steps from  Migration Guide - ...",t:"Migration Guide - QuoteRequestAgentWidget"},"877":{i:0.000246323173716893,u:"../module_migration_guides/mg-quoterequestpage.htm",a:"Upgrading from Version 1.x.x to 2.x.x The only major change of the QuoteRequestPage 2.x.x is the dependency update for spryker/quote-request:^2.0.0. Also, transfer property QuoteRequestTranser::isLatestVersionHidden was replaced by QuoteRequestTransfer:isLatestVersionVisible. To migrate do the ...",t:"Migration Guide - QuoteRequestPage"},"878":{i:0.00215488093264235,u:"../module_migration_guides/mg-quoterequestwidget.htm",a:"Upgrading from Version 1.x.x to 2.x.x The only major change of the QuoteRequestWidget 2.x.x is the dependency update for the spryker/quote-request:^2.0.0 To migrate do the following: Update spryker/quote-request to version ^2.0.0 by following the steps from the  Migration Guide - QuoteRequest . ...",t:"Migration Guide - QuoteRequestWidget"},"879":{i:0.000246323173716893,u:"../module_migration_guides/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"880":{i:0.000246323173716893,u:"../module_migration_guides/mg-refund.htm",a:" Upgrading from Version 4.* to Version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund    "},"881":{i:0.00270574075663973,u:"../module_migration_guides/mg-sales.htm",a:" Upgrading from Version 10.* to Version 11.0.0 In this new version of the Sales module, we have added support of split delivery.  You can find more details about the changes on the  Sales module release  page. This release is a part of the Split delivery concept migration. When you upgrade this ...",t:"Migration Guide - Sales    "},"882":{i:0.000246323173716893,u:"../module_migration_guides/mg-sales-quantity.htm",a:"Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions.",t:"Migration Guide - SalesQuantity"},"883":{i:0.000246323173716893,u:"../module_migration_guides/mg-sales-split.htm",a:"Migration Guide - SalesSplit Upgrading from version 3.* to 5.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - SalesSplit | Spryker"},"884":{i:0.00127325272089558,u:"../module_migration_guides/mg-sales-aggregator.htm",a:" Upgrading from Version 4.* to Version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator    "},});