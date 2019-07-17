define({"678":{i:0.00185774049661175,u:"../module_migration_guides/mg-cms-block-collector.htm",a:" Upgrading from Version 1.* to Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional guide to migration  here . ...",t:"Migration Guide - CMS Block Collector"},"679":{i:0.00167305140301219,u:"../module_migration_guides/mg-cms-block-gui.htm",a:" Upgrading from Version 1.* to Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},"680":{i:0.000386623598709086,u:"../module_migration_guides/mg-cms-collector.htm",a:" Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"681":{i:0.000306572484799112,u:"../module_migration_guides/mg-cmspagesearch.htm",a:"Upgrading from Version 1.* to Version 2.* Version 2.0.0 of the CmsPageSearch module introduces the  multi-store functionality . The multi-store CMS page feature enables management of CMS page display per store via a store toggle control in the Admin UI. To avoid the BC break, a synchronization ...",t:"Migration Guide - CmsPageSearch"},"682":{i:0.000306572484799112,u:"../module_migration_guides/mg-cmsstorage.htm",a:"Upgrading from Version 1.* to Version 2.* Version 2.0.0 of the CmsStorage module introduces the  multi-store functionality . The multi-store CMS page feature enables management of CMS page display per store via a store toggle control in the Admin UI. The main BC breaking changes are: Synchronization ...",t:"Migration Guide - CmsStorage"},"683":{i:0.00168123111431482,u:"../module_migration_guides/mg-collector.htm",a:" Upgrading from Version 5.* to Version 6.* The general concept of collectors, and collector queries are enhanced to support multi-store. The following classes were altered to support the multi-store concept: AbstractCollector AbstractDatabaseCollector AbstractPdoCollector AbstractPropelCollector ...",t:"Migration Guide - Collector   "},"684":{i:0.000306572484799112,u:"../module_migration_guides/mg-companyuser.htm",a:"Upgrading from version 1.0.0 to 2.0.0 CompanyUser module version 2.0.0 brings one major change - new is_active column in spy_company_user database table. The main purpose of this field is to store information about company users and make it possible to enable/disable them. Also, CompanyUserTransfer ...",t:"Migration Guide - CompanyUser"},"685":{i:0.000306572484799112,u:"../module_migration_guides/mg-console.htm",a:" Upgrading from Version 3.* to Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console  "},"686":{i:0.000306572484799112,u:"../module_migration_guides/mg-customer-reorder-widget.htm",a:"Migration Guide - CustomerReorderWidget Upgrading from version 4.* to 6.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - CustomerReorderWidget | Spryker"},"687":{i:0.000904015135338146,u:"../module_migration_guides/mg-currency.htm",a:" Upgrading from Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency    "},"688":{i:0.000306572484799112,u:"../module_migration_guides/mg-customer.htm",a:"   Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table ...",t:"Migration Guide - Customer  "},"689":{i:0.000436866046282543,u:"../module_migration_guides/mg-discount.htm",a:"Discount Module Migration guide contains instructions on how to migrate the Discoiunt module to major versions in Spryker Commerce OS.",t:"Migration Guide - Discount | Spryker"},"690":{i:0.000306572484799112,u:"../module_migration_guides/mg-discount-promotion.htm",a:"Migration Guide - DiscountPromotion Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - DiscountPromotion | Spryker"},"691":{i:0.000306572484799112,u:"../module_migration_guides/mg-discount-promotion-widget.htm",a:"Migration Guide - DiscountPromotionWidget Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please ...",t:"Migration Guide - DiscountPromotionWidget | Spryker"},"692":{i:0.000436866046282543,u:"../module_migration_guides/mg-discount-calculator-connector.htm",a:" Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to the separate repository in spryker/calculation-migration. To learn how to migrate to the new structure see,  Migration Guide - Calculation ...",t:"Migration Guide - DiscountCalculatorConnector  "},"693":{i:0.000306572484799112,u:"../module_migration_guides/mg-discount-sales-aggregator-connector.htm",a:" Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.   See also: Learn how to migrate Discount Learn how to migrate DiscountCalculatorConnector Get a general idea about Discount Learn how to apply a discount ...",t:"Migration Guide - DiscountSalesAggregatorConnector  "},"694":{i:0.000306572484799112,u:"../module_migration_guides/mg-environment-config.htm",a:" The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of the configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration  "},"695":{i:0.000306572484799112,u:"../module_migration_guides/mg-manual-order-entry-gui.htm",a:"Migration Guide - ManualOrderEntryGui Upgrading from version 0.5.* to 0.7.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ManualOrderEntryGui | Spryker"},"696":{i:0.000306572484799112,u:"../module_migration_guides/mg-monitoring.htm",a:"Upgrading from Version 1.* to Version 2.* For BC reasons the initial version of this module had dependencies to spryker/new-relic and the spryker/new-relic-api modules. In this version we removed this hard dependency. If you still want to use NewRelic as monitoring service you can use the ...",t:"Migration Guide - Monitoring"},"697":{i:0.000306572484799112,u:"../module_migration_guides/mg-multi-cart-page.htm",a:"The guide will walk you through the process of migrating the MultiCartPage module to the new version.",t:"Migration Guide - MultiCartPage | Spryker"},"698":{i:0.00375860349049711,u:"../module_migration_guides/mg-multi-currency.htm",a:"Migration Guide - Multi-Currency  Migrating System to Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n ...",t:"Migration Guide - Multi Currency"},"699":{i:0.00204375264902602,u:"../module_migration_guides/mg-navigation.htm",a:" Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module  "},"700":{i:0.00204375264902602,u:"../module_migration_guides/mg-navigation-gui.htm",a:" Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module  "},"701":{i:0.000306572484799112,u:"../module_migration_guides/mg-offer.htm",a:"Migration Guide - Offer Upgrading from version 0.1.* to 0.3.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if ...",t:"Migration Guide - Offer | Spryker"},"702":{i:0.000306572484799112,u:"../module_migration_guides/mg-offer-gui.htm",a:"Migration Guide - OfferGui Upgrading from version 0.1.* to 0.3.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - OfferGui | Spryker"},"703":{i:0.000567159607765975,u:"../module_migration_guides/mg-oms.htm",a:" Upgrading from version 8.* to 10.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - OMS    "},"704":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-packaging-unit-storage.htm",a:"Migration Guide - ProductPackagingUnitStorage Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - PackagingUnitStorage | Spryker"},"705":{i:0.000306572484799112,u:"../module_migration_guides/mg-payment.htm",a:" Upgrading from Version 3.* to Version 4.* In the Payment module version 4 we have added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer ...",t:"Migration Guide - Payment    "},"706":{i:0.000306572484799112,u:"../module_migration_guides/mg-persistent-cart.htm",a:"Migration Guide - PersistentCart Upgrading from version 1.* to 3.0.0\n  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PersistentCart | Spryker"},"707":{i:0.00348723141733138,u:"../module_migration_guides/mg-price.htm",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"708":{i:0.000534774869918039,u:"../module_migration_guides/mg-price-cart-connector.htm",a:"Upgrading from version 4.* to 6.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Price Cart Connector"},"709":{i:0.000306572484799112,u:"../module_migration_guides/mg-priceproduct.htm",a:"This topic covers the information related to the migration procedure for PriceProduct module when upgrading from Version 1.* to Version 2.*.",t:"Migration Guide - PriceProduct | Spryker"},"710":{i:0.000306572484799112,u:"../module_migration_guides/mg-price-product-storage.htm",a:"Migration Guide - PriceProductStorage Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductStorage | Spryker"},"711":{i:0.000306572484799112,u:"../module_migration_guides/mg-price-product-volume.htm",a:"Migration Guide - PriceProductVolume Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductVolume | Spryker"},"712":{i:0.000306572484799112,u:"../module_migration_guides/mg-price-product-volume-gui.htm",a:"Migration Guide - PriceProductVolumeGui Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - PriceProductVolumeGui | Spryker"},"713":{i:0.00184431613948053,u:"../module_migration_guides/mg-product.htm",a:"Upgrading from Version 5.* to Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"714":{i:0.000819523453412741,u:"../module_migration_guides/mg-product-bundle.htm",a:"Upgrading from version 4.* to 6.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Bundle"},"715":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-details-page.htm",a:"Migration Guide - ProductDetailPage Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductDetailPage | Spryker"},"716":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-discount-connector.htm",a:"Migration Guide - ProductDiscountConnector Upgrading from version 3.* to 5.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductDiscountConnector | Spryker"},"717":{i:0.000641703715080684,u:"../module_migration_guides/mg-product-label.htm",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"718":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-label-discount-connector.htm",a:"Migration Guide - ProductLabelDiscountConnector Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductLabelDiscountConnector | Spryker"},"719":{i:0.000819523453412741,u:"../module_migration_guides/mg-product-label-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label GUI"},"720":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-list-search.htm",a:"Migration Guide - ProductListSearch Upgrading from Version 1.* to Version 2.* The main goal of ProductListSearch 2.x.x is to add support of Concrete Products search introduced in ProductPageSearch 3.x.x. To complete the migration, follow the steps below: Update spryker/product-page-search ^3.2.0 ...",t:"Migration Guide - ProductListSearch | Spryker"},"721":{i:0.0011224802345296,u:"../module_migration_guides/mg-product-management.htm",a:"Upgrading from version 0.* to 0.18.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - ProductManagement"},"722":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-measurement-unit.htm",a:"Migration Guide - ProductMeasurementUnit Upgrading from version 2.* to 4.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductMeasurementUnit | Spryker"},"723":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-measurement-unit-widget.htm",a:"Migration Guide - ProductMeasurementUnitWidget Upgrading from version 0.6.* to 0.8.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductMeasurementUnitWidget | Spryker"},"724":{i:0.00130319244639906,u:"../module_migration_guides/mg-product-option.htm",a:"Upgrading from version 6.* to 8.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Option"},"725":{i:0.000904015135338146,u:"../module_migration_guides/mg-product-option-cart-connector.htm",a:"Upgrading from version 5.* to 7.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Product Option Cart Connector"},"726":{i:0.000350003671960255,u:"../module_migration_guides/mg-product-option-discount-connector.htm",a:"Upgrading from Version 2.* to Version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product Label Gui  ",t:"Migration Guide - ProductOptionDiscountConnector"},"727":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-option-exporter.htm",a:"Upgrading from version 2.* to version 3.* The ProductOptionExporter  module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate  Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product ...",t:"Migration Guide - ProductOptionExporter"},"728":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-packaging-unit.htm",a:"Migration Guide - ProductPackagingUnit Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductPackagingUnit | Spryker"},"729":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-packaging-unit-widget.htm",a:"Migration Guide - ProductPackagingUnitWidget Upgrading from version 0.2.* to 0.4.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductPackagingUnitWidget | Spryker"},"730":{i:0.000827746730732838,u:"../module_migration_guides/mg-product-page-search.htm",a:"Migration Guide - ProductPageSearch Upgrading from Version 2.* to 3.* ProductPageSearch 3.0.0 got separate search index for Concrete Products. It includes database table and ElasticSearch index. To perform the migration, follow the steps: Run the database migration: vendor/bin/console propel:install ...",t:"Migration guide - ProductPageSearch | Spryker"},"731":{i:0.000762055237223676,u:"../module_migration_guides/mg-product-relation.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . We have changed Zed table to use PriceProductFacade for retrieving product prices. We have also changed ...",t:"Migration Guide - Product Relation"},"732":{i:0.000534774869918039,u:"../module_migration_guides/mg-product-relation-collector.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we added support for multi-currency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},"733":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-search.htm",a:"Upgrading from Version 3.* to Version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"734":{i:0.000665068431401471,u:"../module_migration_guides/mg-product-set-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we have support multi-currency. First of all make sure you  have migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you overwrote ...",t:"Migration Guide - Product Set GUI"},"735":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-validity.htm",a:"Installing Version 1.* The Product Validity module is responsible for (de)activation of products for (or starting from) a certain period of time. Follow the instructions below to have the module up and running in your shop. Database Changes \n            We have added a new  spy_product_validity ...",t:"Migration Guide - Product Validity"},"736":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-quantity.htm",a:"Migration Guide - ProductQuantity Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductQuantity | Spryker"},"737":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-quantity-data-import.htm",a:"Migration Guide - ProductQuantityDataImport Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. ...",t:"Migration Guide - ProductQuantityDataImport | Spryker"},"738":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-quantity-storage.htm",a:"Migration Guide - ProductQuantityStorage Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductQuantityStorage | Spryker"},"739":{i:0.000306572484799112,u:"../module_migration_guides/mg-product-search-widget.htm",a:"Migration Guide - ProductSearchWidget Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  ...",t:"Migration Guide - ProductSearchWidget | Spryker"},"740":{i:0.000306572484799112,u:"../module_migration_guides/mg-quick-order.htm",a:"Migration Guide - QuickOrder Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - QuickOrder | Spryker"},"741":{i:0.000306572484799112,u:"../module_migration_guides/mg-quick-order-page.htm",a:"The guideline provides the steps how to migrate QuickOrder module from version 1.0.0 to version 2.0.0.",t:"Migration Guide - QuickOrderPage  | Spryker"},"742":{i:0.00274007529959628,u:"../module_migration_guides/mg-quote.htm",a:" Upgrading from Version 1.* to Version 2.* The new version of Quote module provides the ability to save customer quote into the database and get it. Quote storage strategy (session, database) can be changed in Spryker\\Shared\\Quote\\QuoteConfig::getStorageStrategy. If you’re migrating the Quote module ...",t:"Migration Guide - Quote  "},"743":{i:0.000306572484799112,u:"../module_migration_guides/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"744":{i:0.000306572484799112,u:"../module_migration_guides/mg-refund.htm",a:" Upgrading from Version 4.* to Version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund    "},"745":{i:0.00609326580457673,u:"../module_migration_guides/mg-sales.htm",a:" Upgrading from version 8.* to 10.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions. ...",t:"Migration Guide - Sales    "},"746":{i:0.000306572484799112,u:"../module_migration_guides/mg-sales-quantity.htm",a:"Upgrading from version 1.* to 3.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  if you have any questions.",t:"Migration Guide - SalesQuantity"},"747":{i:0.000306572484799112,u:"../module_migration_guides/mg-sales-split.htm",a:"Migration Guide - SalesSplit Upgrading from version 3.* to 5.0.0  In order to dismantle the Horizontal Barrier and enable partial module updates on projects, Technical Release took place. Public API of source and target major versions are equal. No migration efforts are required. Please  contact us  ...",t:"Migration Guide - SalesSplit | Spryker"},});