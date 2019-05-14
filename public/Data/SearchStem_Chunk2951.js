define({"plu":{"createinvoiceplugin":[449],"sendinvoiceplugin":[449],"updatepaymentstatusplugin":[449],"updateorderplugin":[449],"refundpaymentplugin":[449,611],"cancelorderplugin":[449],"youreventlistenerplugin":[454],"consolelogplugin":[454,923],"getdataimporterplugins":[458,685,742,751,755,757,758,759,760,761,764,766,767,776,777,791,929,946,951,961,964,983,986,993,1007],"companydataimportplugin":[458],"dataimportplugininterface":[458],"adddataimporterplugins":[458],"datasetwriterplugininterface":[458,615],"createproductabstractwriterplugins":[458],"productabstractbulkpdowriterplugin":[458],"productabstractpropelwriterplugin":[458,615],"my_plugins":[460],"aplugin":[460],"bplugin":[460],"itemtaxcalculatorplugin":[465,714],"anotherbundleplugininterface":[465],"groupplugin":[466],"useragentformexpanderplugin":[466,741,962],"useragenttableconfigexpanderplugin":[466,741,962],"usertableactionexpanderplugin":[466],"useragenttabledataexpanderplugin":[466,741,962],"synchronizationstoragequeuemessageprocessorplugin":[468,822,823],"synchronizationsearchqueuemessageprocessorplugin":[468],"extracttextplugin":[480],"provideplugin":[480,835],"uglifyjsplugin":[480],"resourcerouteplugininterface":[496,497,645,719,720,721,725,727,728,729,730,731,732,733,734,736,737,738,739,740,828,832,906,914,934,937,942,979,982],"getresourcerouteplugins":[496,645,719,720,721,725,727,728,729,730,731,732,733,734,736,737,738,739,740,828,832,906,914,934,937,942,979,982],"cartsresourcerouteplugin":[496,645],"cartitemsresourcerouteplugin":[496,645],"wishlistsresourcerouteplugin":[496,740,828,937],"featureresourcerelationshipplugin":[496],"featureresourcerouterplugin":[496],"resourcewithparentplugininterface":[496],"resourcerelationshipplugininterface":[496],"myresourcerouteplugin":[497],"getuserproviderplugins":[497,719],"oauthuserproviderplugininterface":[497,719],"getscopeproviderplugins":[497,719],"oauthscopeproviderplugininterface":[497,719],"plusserver":[520,521,525],"addsubformplugincollection":[530,586,602],"$paymentsubformplugincollection":[530],"subformplugincollection":[530,551,554,570,571,579,585,586,597,602,866,872,878],"adyencreditcardsubformplugin":[530],"adyensofortsubformplugin":[530],"adyendirectdebitsubformplugin":[530],"adyenklarnainvoicesubformplugin":[530],"adyenprepaymentsubformplugin":[530],"adyenidealsubformplugin":[530],"adyenpaypalsubformplugin":[530],"adyenalipaysubformplugin":[530],"adyenwechatpaysubformplugin":[530],"addpaymentmethodhandlerplugincollection":[530,586,602],"stephandlerplugincollection":[530,551,554,555,556,558,570,571,579,585,586,597,602,866,872,878],"adyenpaymenthandlerplugin":[530],"$plugins":[530,545,551,586,760,964],"adyendosaveorderplugin":[530],"adyenpostsavehookplugin":[530],"extendcommandplugins":[530,787],"extendconditionplugins":[530,787],"authorizeplugin":[530,545,585,586],"cancelplugin":[530,545],"captureplugin":[530,545,585,586,588,590,594,597,600],"cancelorrefundplugin":[530],"condition_plugins":[530,534,535,538,545,554,585,586,597,602,818,819],"isauthorizedandcapturedplugin":[530],"isauthorizedplugin":[530],"iscanceledplugin":[530],"iscancellationreceivedplugin":[530],"iscancellationfailedplugin":[530],"iscapturedplugin":[530],"iscapturereceivedplugin":[530],"iscapturefailedplugin":[530],"isrefundedplugin":[530,611],"isrefundreceivedplugin":[530],"isrefundfailedplugin":[530],"adyenpaymentmethodfilterplugin":[531],"getpaymentmethodfilterplugins":[531,558,787],"getcustomerpagewidgetplugins":[532,811],"cancelordercommandplugin":[534,535,538,551],"closeordercommandplugin":[534,535,538],"refundordercommandplugin":[534,535,538],"reauthorizeexpiredordercommandplugin":[534,535,538],"capturecommandplugin":[534,535,538,554,560],"updatesuspendedordercommandplugin":[534,535,538],"updateauthorizationstatuscommandplugin":[534,535,538],"updatecapturestatuscommandplugin":[534,535,538],"updaterefundstatuscommandplugin":[534,535,538],"isclosedconditionplugin":[534,535,538],"iscloseallowedconditionplugin":[534,535,538],"iscancelledconditionplugin":[534,535,538,551],"iscancelnotallowedconditionplugin":[534,535,538],"iscancelledorderconditionplugin":[534,535,538],"isopenconditionplugin":[534,535,538],"isdeclinedconditionplugin":[534,535,538],"ispendingconditionplugin":[534,535,538],"issuspendedconditionplugin":[534,535,538],"isauthexpiredconditionplugin":[534,535,538],"isauthtransactiontimedoutconditionplugin":[534,535,538],"iscompletedconditionplugin":[534,535,538],"plug":[534,554,865,871,877],"amazonpayconfirmorderpreconditionplugin":[534],"amazonpaysaveorderplugin":[534],"afterpaysaveorderplugin":[545],"isauthorizationcompletedplugin":[545,585,586],"iscancellationcompletedplugin":[545],"iscapturecompletedplugin":[545],"isrefundcompletedplugin":[545],"addcommandplugins":[545,586],"sendorderconfirmationplugin":[545,586,638],"sendordershippedplugin":[545,586,638],"addconditionplugins":[545,586],"storeorderplugin":[549],"isstoreordersuccessfulplugin":[549],"billpaycustomerhandlerplugin":[551],"provideplugins":[551,585,779,995],"plugin_customer_step_handler":[551],"billpayinvoicesubformplugin":[551],"billpaypaymenthandlerplugin":[551],"plugin_shipment_handler":[551,558],"plugin_shipment_form_data_provider":[551],"$shipmentplugins":[551,555,556,558,602],"shipmentplugins":[551,555,556],"plugin_shipment_step_handler":[551,555,556],"billpaysaveorderplugin":[551],"isinvoicepaidconditionplugin":[551],"ispreauthorizedconditionplugin":[551],"isitemcancelledconditionplugin":[551],"preauthorizecommandplugin":[551,554,560],"invoicecreatedcommandplugin":[551],"cancelitemcommandplugin":[551],"payonehandlerplugin":[554,570],"$paymentsubformplugin":[554,570,571,579,585],"payoneinvoicesubformplugin":[554],"payonesecurityinvoicesubformplugin":[554],"payonecreditcardsubformplugin":[554],"payonedirectdebitsubformplugin":[554],"payoneewalletsubformplugin":[554],"payoneepsonlinetransfersubformplugin":[554],"payoneprepaymentsubformplugin":[554],"checkout_plugins":[554,571,585,597,867,873,879],"checkoutplugincollection":[554,571,585,597,867,873,879],"payoneprecheckplugin":[554],"checkout_pre_check_plugins":[554,597,787,867,873,879],"payonesaveorderplugin":[554],"checkout_order_saver_plugins":[554,571,585,597,787,867,873,879],"payonepostsavehookplugin":[554],"checkout_post_save_plugins":[554,571,585,597],"preauthorizationisapprovedconditionplugin":[554,560],"authorizationisapprovedconditionplugin":[554,560],"captureisapprovedconditionplugin":[554,560],"refundisapprovedconditionplugin":[554],"refundispossibleconditionplugin":[554],"preauthorizationiserrorconditionplugin":[554,560],"authorizationiserrorconditionplugin":[554,560],"preauthorizationisredirectconditionplugin":[554,560],"authorizationisredirectconditionplugin":[554,560],"paymentisappointedconditionplugin":[554],"paymentiscaptureconditionplugin":[554],"paymentispaidconditionplugin":[554],"paymentisunderpaidconditionplugin":[554],"paymentisoverpaidconditionplugin":[554],"paymentisrefundconditionplugin":[554],"authorizecommandplugin":[554,560],"cancelcommandplugin":[554],"capturewithsettlementcommandplugin":[554],"refundcommandplugin":[554],"getshipmentformdataproviderplugin":[555,556],"payonepaymentmethodfilterplugin":[558],"paymentmethodfilterplugininterface":[558],"preauthorizationisapprovedplugin":[559],"preauthorizationiserrorplugin":[559],"preauthorizationisredirectplugin":[559],"captureisapprovedplugin":[559],"authorizationisapprovedplugin":[559],"authorizationiserrorplugin":[559],"authorizationisredirectplugin":[559],"refundisapprovedplugin":[559],"refundispossibleplugin":[559],"preauthorizawithsettlementcommandplugin":[560],"captureiserrorconditionplugin":[560],"payonecashondeliverysubformplugin":[570],"computoppaymenthandlerplugin":[571,579],"creditcardsubformplugin":[571],"paypalsubformplugin":[571],"directdebitsubformplugin":[571,865,866],"sofortsubformplugin":[571],"paydirektsubformplugin":[571],"idealsubformplugin":[571],"easycreditsubformplugin":[571,602],"paynowsubformplugin":[571,579],"computopsaveorderplugin":[571],"computoppostcheckplugin":[571],"$pimpleplugin":[585],"heidelpaysofortsubformplugin":[585,586],"heidelpaypaypalauthorizesubformplugin":[585,586],"heidelpaypaypaldebitsubformplugin":[585,586],"heidelpayidealsubformplugin":[585,586],"heidelpayeasycreditsubformplugin":[585],"heidelpaycreditcardsecuresubformplugin":[585,586],"heidelpayhandlerplugin":[585,586],"isdebitcompletedplugin":[585,586],"iscaptureapprovedplugin":[585,586,597],"debitplugin":[585,586],"heidelpaysaveorderplugin":[585,586],"heidelpaypostsaveplugin":[585,586,588,590,591,593],"$subformplugincollection":[586,602],"$stephandlerplugincollection":[586,602],"heidelpaycreditcardhandlerplugin":[586],"baseabstractplugin":[588,590,591,593],"checkoutpostcheckplugininterface":[588,590,591,593],"$paymenthandlerplugins":[597],"payolutionhandlerplugin":[597],"$paymentsubformplugins":[597],"payolutioninstallmentsubformplugin":[597],"payolutioninvoicesubformplugin":[597],"preauthorizeplugin":[597,600],"reauthorizeplugin":[597,600],"revertplugin":[597,600],"ispreauthorizationapprovedplugin":[597,600],"isreauthorizationapprovedplugin":[597,600],"isreversalapprovedplugin":[597,600],"payolutionprecheckplugin":[597],"payolutionsaveorderplugin":[597],"payolutionpostcheckplugin":[597],"iscaptureapprovedplungin":[600],"subformplugin":[602],"stephandlerplugin":[602],"easycredithandlerplugin":[602],"isorderconfirmedplugin":[602],"easycreditorderidentifierplugin":[602],"getshipmentplugins":[602],"cartnotequoteitemnotewidgetplugin":[602],"cartnotequotenotewidgetplugin":[602],"checkoutvoucherformwidgetplugin":[602],"seeorderplacesubmitpermissionplugin":[602,756],"productcategorywidgetplugin":[602],"productalternativewidgetplugin":[602],"productreplacementforwidgetplugin":[602],"productreviewwidgetplugin":[602],"similarproductswidgetplugin":[602],"productcmsblockwidgetplugin":[602],"confirmdeliveryplugin":[611],"confirmpaymentplugin":[611],"cancelpaymentplugin":[611],"ispaymentconfirmedplugin":[611],"isdeliveryconfirmedplugin":[611],"iscancellationconfirmedplugin":[611],"configurationplugins":[615],"defaultakeneopimconfigurationprofileplugin":[615],"attributedataimporterplugin":[615],"productabstractdataimporterplugin":[615],"productdataimporterplugin":[615],"$writerplugins":[615],"datasetwriterplugininterface|array":[615],"writerplugins":[615],"$writerplugin":[615],"product_abstract_propel_writer_plugins":[615],"addproductabstractpropelwriterplugins":[615],"productabstractstorepropelwriterplugin":[615],"customerregistrationmailtypeplugin":[622,904,919],"customerrestoredpasswordconfirmationmailtypeplugin":[622],"episervercustomermailplugin":[622],"episervernewslettersubscriptionmailplugin":[622],"newslettersubscribedmailtypeplugin":[622],"newsletterunsubscribedmailtypeplugin":[622],"customerchangeprofilemailtypeplugin":[622],"getpostcustomerregistrationplugins":[622,631],"mailtypeplugininterface":[622,631,919,988],"episerverneworderplugin":[622],"episerverordercanceledplugin":[622],"episerverpaymentnotreceivedplugin":[622],"episervershippingconfirmationplugin":[622],"getcheckoutbreadcrumbplugin":[626,778],"getproductpromotionmapperplugin":[626,779],"inxmailpostcustomerregistrationplugin":[631],"postcustomerregistrationplugininterface":[631],"inxmailcustomerrestorepasswordmailtypeplugin":[631],"inxmailneworderplugin":[631],"inxmailordercanceledplugin":[631],"inxmailpaymentnotreceivedplugin":[631],"inxmailshippingconfirmationplugin":[631],"logglyloggerqueuemessageprocessorplugin":[632],"addfilesystembuilderplugincollection":[635],"plugin_collection_filesystem_builder":[635],"newrelicmonitoringextensionplugin":[636,675],"sevensendersorderplugin":[638],"sevensendersshipmentplugin":[638],"sevenordersorderplugin":[638],"sevenordersshipmentplugin":[638],"issuccessfulpreviousorderresponseconditionplugin":[638],"issuccessfulpreviousshipmentresponseconditionplugin":[638],"tidewaysmonitoringextensionplugin":[640],"getquotecollectionreaderplugin":[645],"cartquotecollectionreaderplugin":[645],"getquotecreatorplugin":[645],"singlequotecreatorplugin":[645],"quotecollectionreaderplugininterface":[645],"quotecreatorplugininterface":[645],"getcustomerpostregisterplugins":[645],"updatecartcustomerreferenceplugin":[645],"customerpostregisterplugininterface":[645],"guestcartitemsresourcerouteplugin":[645],"guestcartsresourcerouteplugin":[645],"getvalidaterestrequestplugins":[645,719],"anonymouscustomeruniqueidvalidatorplugin":[645],"getcontrollerbeforeactionplugins":[645,719,736,934],"setanonymouscustomeridcontrollerbeforeactionplugin":[645],"getresourcerelationshipplugins":[645,727,728,729,730,731,733,734,736,738,740,934,937],"cartitemsproductsrelationshipplugin":[645],"validaterestrequestplugininterface":[645,719],"controllerbeforeactionplugininterface":[645,719,736,934],"itemswithproductoptionsanddiscountsgrosspricecalculatorplugin":[651,714],"itemswithproductoptionsanddiscountstaxcalculatorplugin":[651,714],"expensetaxcalculatorplugin":[651,714],"itemsubtotalaggregatorplugin":[651,707],"ordertaxtotalcalculationplugin":[651,707],"calculatebundlepriceplugin":[651],"gethydrateorderplugins":[651],"discounttotalamountwithproductoptionsaggregatorplugin":[651,707],"itemswithproductoptionsanddiscountstaxaggregatorplugin":[651,707],"orderdiscountswithproductoptionsaggregatorplugin":[651,707],"ordertaxamountwithproductoptionsanddiscountsaggregatorplugin":[651,707],"productoptiondiscountsaggregatorplugin":[651,707],"expensetotalaggregatorplugin":[651,707],"grandtotalaggregatorplugin":[651,707],"itemgrosspriceaggregatorplugin":[651,707],"itemtaxamountaggregatorplugin":[651,707],"orderexpensetaxamountaggregatorplugin":[651,707],"subtotalorderaggregatorplugin":[651,707],"productoptionsgrosspriceaggregatorplugin":[651,707],"subtotalwithproductoptionsaggregatorplugin":[651,692],"discounttotalamountaggregatorplugin":[651,707],"itemdiscountsorderaggregatorplugin":[651,707],"orderdiscountsaggregatorplugin":[651,707],"orderexpenseswithdiscountsaggregatorplugin":[651,707],"orderexpensetaxwithdiscountsaggregatorplugin":[651,707],"ordergrandtotalwithdiscountsaggregatorplugin":[651,707],"sessionquotestoragestrategyplugin":[652],"omspostsavehookplugin":[655],"productbundleordersaverplugin":[655],"customerordersaveplugin":[655],"paymentsaverplugin":[655],"paymentordersaverplugin":[655],"cmsversionpostsaveplugininterface":[656],"cmsversiontransferexpanderplugininterface":[656],"cmsversionpagecollectorsearchplugin":[656],"cmsversionpagecollectorstorageplugin":[656],"search_plugins":[656,792,793,940],"usercmsversionpostsaveplugin":[656],"usercmsversiontransferexpanderplugin":[656],"gettransferexpanderplugins":[656],"storerelationtoggleformtypeplugin":[657,662,671,691,751],"getstorerelationformtypeplugin":[657,671,751],"createstorerelationformtypeplugin":[662,691],"cmspagecollectorparametermapexpanderplugin":[663],"cmspagecollectordataexpanderplugininterface":[663],"customerunsubscribeplugin":[670],"getcustomeranonymizerplugins":[670,765],"storequotetransferexpanderplugin":[671],"getquotetransferexpanderplugins":[671,761,986],"quotetransferexpanderplugininterface":[671,761,986],"setdiscountconfigurationexpanderplugins":[671],"setdiscountpostcreateplugins":[671],"setdiscountpostupdateplugins":[671],"filterbycalculatorplugin":[671],"plugin_calculator_fixed":[671],"expensetaxwithdiscountscalculatorplugin":[672,714],"monitoringextensionplugininterface":[675],"cartlistpermissiongroupwidgetplugininterface":[676],"productbundleitemcounterwidgetplugininterface":[676],"cartdeletecompanyuserslistwidgetplugininterface":[676],"carttoshoppinglistwidgetplugininterface":[676],"zedrequestmetadataproviderplugin":[677],"availabilityhandlerplugin":[680],"priceproductabstractaftercreateplugin":[683,686],"priceproductabstractafterupdateplugin":[683,686],"priceproductabstractreadplugin":[683,686],"priceproductconcreteaftercreateplugin":[683,686],"priceproductconcreteafterupdateplugin":[683,686],"priceproductconcretereadplugin":[683,686],"priceproductdataimportplugin":[685,764],"getpricedimensionstoragereaderplugins":[685,758,946],"priceproductfilterplugininterface":[685,758,764,946],"pricedimensionabstractsaverplugininterface":[685,758,946],"pricedimensionconcretesaverplugininterface":[685,758,946],"pricedimensionquerycriteriaplugininterface":[685,758,946],"priceproductdimensionexpanderstrategyplugininterface":[685,758,946],"priceproductstoragepricedimensionplugininterface":[685,758,946],"pricedimensionabstractsaverplugin":[685],"pricedimensionconcretesaverplugin":[685],"priceproductstoragepricedimensionplugin":[685],"productpricequeryexpanderplugin":[686,816],"facetqueryexpanderplugin":[686,816,932,944,953,976],"productabstractaftercreateplugin":[686],"imagesetproductabstractaftercreateplugin":[686],"productabstractafterupdateplugin":[686],"imagesetproductabstractafterupdateplugin":[686],"productabstractreadplugin":[686],"imagesetproductabstractreadplugin":[686],"productconcreteaftercreateplugin":[686],"imagesetproductconcreteaftercreateplugin":[686],"productconcreteafterupdateplugin":[686],"imagesetproductconcreteafterupdateplugin":[686],"productconcretereadplugin":[686],"imagesetproductconcretereadplugin":[686],"productsearchproductconcreteaftercreateplugin":[686],"productsearchproductconcreteafterupdateplugin":[686],"productsearchproductconcretereadplugin":[686],"stockproductconcreteaftercreateplugin":[686],"stockproductconcreteafterupdateplugin":[686],"stockproductconcretereadplugin":[686],"taxsetproductabstractaftercreateplugin":[686],"taxsetproductabstractafterupdateplugin":[686],"taxsetproductabstractreadplugin":[686],"productabstractplugincreateinterface":[686],"getproductabstractbeforecreateplugins":[686],"getproductabstractaftercreateplugins":[686],"productabstractpluginreadinterface":[686],"getproductabstractreadplugins":[686],"productabstractpluginupdateinterface":[686],"getproductabstractbeforeupdateplugins":[686],"getproductabstractafterupdateplugins":[686],"productconcreteplugincreateinterface":[686],"getproductconcretebeforecreateplugins":[686],"getproductconcreteaftercreateplugins":[686],"productconcretepluginreadinterface":[686],"getproductconcretereadplugins":[686,701],"productconcretepluginupdateinterface":[686,742],"getproductconcretebeforeupdateplugins":[686,742],"getproductconcreteafterupdateplugins":[686,701],"cartbundleitemsprereloadplugin":[687],"getprereloadplugins":[687,760,791,964],"productbundlepriceaggregatorplugin":[687,707],"productconcretepagemapexpanderplugininterface":[690,791],"getconcreteproductpagemapexpanderplugins":[690,791],"productconcreteproductlistpagemapexpanderplugin":[690,791],"productconcretepagedataexpanderplugininterface":[690,791],"getproductconcretepagedataexpanderplugins":[690,791],"productconcreteproductlistpagedataexpanderplugin":[690,791],"priceformtypeplugin":[691],"moneyformtypeplugin":[691],"createmoneyformtypeplugin":[691],"moneycollectionformtypeplugin":[692,711],"createmoneycollectionformtypeplugin":[692,711],"productoptionvaluepriceexistscartprecheckplugin":[693],"cartprecheckplugin":[693],"cartprecheckplugininterface":[693,767,791,951],"productsearchconfigextensioncollectorplugin":[699,1005],"createsearchconfigexpanderplugins":[699,708,1005],"productvalidityreadplugin":[701],"productvalidityupdateplugin":[701],"getcalculatorplugins":[707],"searchconfigexpanderplugininterface":[708,1005],"moneycollectiontypeplugin":[711],"discounttotalswithproductoptionscalculatorplugin":[714],"taxtotalamountwithproductoptionsanddiscountscalculatorplugin":[714],"glueserviceproviderplugin":[719,724],"formatresponseheadersplugininterface":[719],"getformatresponseheadersplugins":[719],"accesstokensresourcerouteplugin":[719],"accesstokenvalidatorplugin":[719],"formatauthenticationerrorresponseheadersplugin":[719],"refreshtokensresourcerouteplugin":[719],"customeroauthscopeproviderplugin":[719],"customeroauthuserproviderplugin":[719],"abstractalternativeproductsresourcerouteplugin":[720,942],"concretealternativeproductsresourcerouteplugin":[720,942],"categoriesresourcerouteplugin":[721,725,914,982],"categoryresourcerouteplugin":[721,725,914,982],"productdiscontinuedconcreteproductsresourceexpanderplugin":[722],"concreteproductsresourceexpanderplugininterface":[722],"getconcreteproductsresourceexpanderplugins":[722],"resourceroutepluginsproviderplugin":[723],"resourcerelationshipcollectionproviderplugin":[723],"resourceroutepluginsproviderplugininterface":[723],"getresourceroutepluginproviderplugins":[723],"resourcerelationshipcollectionproviderplugininterface":[723],"getresourcerelationshipcollectionproviderplugins":[723],"navigationsresourcerouteplugin":[725],"salespaymentmethodtypeinstallerplugin":[726],"installerplugininterface":[726,745,748,756,760,766,767,776,777,928,929,951,961,964,1007],"getinstallerplugins":[726,745,748,756,760,766,767,776,777,928,929,951,961,964,1007],"abstractproductpricesrouteplugin":[727,731],"concreteproductpricesrouteplugin":[727,731],"abstractproductsproductpricesresourcerelationshipplugin":[727,731],"concreteproductsproductpricesresourcerelationshipplugin":[727,731],"abstractproductsresourcerouteplugin":[728,906,942,979],"concreteproductsresourcerouteplugin":[728,906,942,979],"abstractproductsproductimagesetsresourcerelationshipplugin":[728,730],"concreteproductsproductimagesetsresourcerelationshipplugin":[728,730],"abstractproductimagesetsrouteplugin":[728,730],"concreteproductimagesetsrouteplugin":[728,730],"abstractproductavailabilitiesrouteplugin":[729],"concreteproductavailabilitiesrouteplugin":[729],"abstractproductavailabilitiesresourcerelationshipplugin":[729],"concreteproductavailabilitiesresourcerelationshipplugin":[729],"relatedproductsrouteplugin":[732],"upsellingproductsforcartrouteplugin":[732],"upsellingproductsforguestcartrouteplugin":[732],"relatedproductsresourcerouteplugin":[732],"cartupsellingproductsresourcerouteplugin":[732],"guestcartupsellingproductsresourcerouteplugin":[732],"producttaxsetsresourcerouteplugin":[733],"productsproducttaxsetsresourcerelationshipplugin":[733],"productlabelsrelationshipbyresourceidplugin":[734],"productlabelsresourcerouteplugin":[734],"validaterestrequestattributesplugin":[735],"restrequestvalidatorplugininterface":[735],"getrestrequestvalidatorplugins":[735],"setcustomerbeforeactionplugin":[736,934],"customersresourcerouteplugin":[736,934],"addressesresourcerouteplugin":[736,934],"customerforgottenpasswordresourcerouteplugin":[736,934],"customerrestorepasswordresourcerouteplugin":[736,832,934],"customerpasswordresourcerouteplugin":[736,934],"customerstoaddressesrelationshipplugin":[736,934],"ordersresourcerouteplugin":[737],"catalogsearchabstractproductsresourcerelationshipplugin":[738,982],"catalogsearchsuggestionsabstractproductsresourcerelationshipplugin":[738,982],"catalogsearchresourcerouteplugin":[738,982],"catalogsearchsuggestionsresourcerouteplugin":[738,982],"storesresourcerouteplugin":[739],"wishlistitemsresourcerouteplugin":[740,937],"wishlistitemsconcreteproductsresourcerelationshipplugin":[740,937],"wishlistrelationshipbyresourceidplugin":[740,937],"userformexpanderplugininterface":[741,748,962],"getuserformexpanderplugins":[741,748,962],"usertableconfigexpanderplugininterface":[741,962],"getusertableconfigexpanderplugins":[741,962],"usertabledataexpanderplugininterface":[741,962],"getusertabledataexpanderplugins":[741,962],"productalternativesynchronizationdataplugin":[742],"productreplacementforsynchronizationdataplugin":[742],"synchronizationdataplugininterface":[742,756,758,766,767,777,791,946,951,961,1007],"getsynchronizationdataplugins":[742,756,758,766,767,777,791,946,951,961,1007],"productalternativedataimportplugin":[742],"productconcretepluginupdate":[742],"productconcreteformedittabsexpanderplugin":[742],"productconcreteeditformexpanderplugin":[742],"productconcreteformeditdataproviderexpanderplugin":[742],"productformtransfermapperexpanderplugin":[742],"productalternativeguiproductconcretepluginupdate":[742],"productconcreteformedittabsexpanderplugininterface":[742],"getproductconcreteformedittabsexpanderplugins":[742],"productconcreteeditformexpanderplugininterface":[742],"getproductconcreteeditformexpanderplugins":[742],"productconcreteformeditdataproviderexpanderplugininterface":[742],"getproductconcreteformeditdataproviderexpanderplugins":[742],"getproductformtransfermapperexpanderplugins":[742],"discontinuedcheckalternativeproductapplicableplugin":[743],"alternativeproductapplicableplugininterface":[743,744],"getalternativeproductapplicablecheckplugins":[743,744],"getalternativeproductapplicableplugins":[743,744],"availabilitycheckalternativeproductapplicableplugin":[744],"productalternativeproductlabelconnectorinstallerplugin":[745],"postproductalternativecreateplugin":[745],"postproductalternativedeleteplugin":[745],"productalternativelabelupdaterplugin":[745],"postproductalternativecreateplugininterface":[745],"getpostproductalternativecreateplugins":[745],"postproductalternativedeleteplugininterface":[745],"getpostproductalternativedeleteplugins":[745],"approvequotepermissionplugin":[747],"placeorderpermissionplugin":[747],"requestquoteapprovalpermissionplugin":[747],"permissionplugininterface":[747,756,776,777,929,961],"getpermissionplugins":[747,756,776,777,929,961],"quoteapprovalexpanderplugin":[747],"removequoteapprovalsbeforequotedeleteplugin":[747],"quotewriteplugininterface":[747,761,776,929,986],"getquotedeletebeforeplugins":[747,776,929],"quoteexpanderplugininterface":[747],"getquoteexpanderplugins":[747],"quoteapprovalcheckoutprecheckplugin":[747],"checkoutprecheckplugininterface":[747,867,873,879],"getcheckoutprecheckplugins":[747],"translatorinstallerplugin":[748],"translationplugin":[748],"translatortwigplugin":[748],"userlocalelocaleplugin":[748],"localeapplicationplugin":[748],"assignuserlocalepresaveplugin":[748],"userlocaletransferexpanderplugin":[748],"userlocaleformexpanderplugin":[748],"translationplugininterface":[748],"gettranslationplugins":[748],"twigplugininterface":[748],"gettwigplugins":[748],"localeplugininterface":[748],"getlocaleplugin":[748],"userpresaveplugininterface":[748],"getuserpresaveplugins":[748],"usertransferexpanderplugininterface":[748],"getusertransferexpanderplugins":[748],"cartchangetransferquantitynormalizerplugin":[749],"cartchangetransfernormalizerplugininterface":[749],"getcartbeforeprechecknormalizerplugins":[749],"categoryimagesynchronizationdataplugin":[750],"categoryimagesetcreatorplugin":[750],"categoryimagesetexpanderplugin":[750],"categoryimagesetupdaterplugin":[750],"removecategoryimagesetrelationplugin":[750],"categoryimageformplugin":[750],"categoryimageformtabexpanderplugin":[750],"categoryrelationdeleteplugininterface":[750],"getrelationdeletepluginstack":[750],"$deleteplugins":[750],"categorytransferexpanderplugininterface":[750],"getcategorypostreadplugins":[750],"getcategoryformplugins":[750,784],"categoryupdateafterplugininterface":[750],"getcategorypostupdateplugins":[750],"categorycreateafterplugininterface":[750],"getcategorypostcreateplugins":[750],"categoryformtabexpanderplugininterface":[750],"getcategoryformtabexpanderplugins":[750],"cmspagestoredataimportplugin":[751],"cmsblockcontentwidgetplugin":[752],"cmscontentwidgetplugininterface":[752,782],"getcmscontentwidgetplugins":[752,782],"productlistqueryexpanderplugin":[753,754,976],"queryexpanderplugininterface":[753,754,810,816,932,944,953,976],"createcatalogsearchcountqueryexpanderplugins":[753,754],"storequeryexpanderplugin":[754,793,816,944],"localizedqueryexpanderplugin":[754,793,816,944],"sortedcmspagequeryexpanderplugin":[754],"paginatedcmspagequeryexpanderplugin":[754],"sortedcmspagesearchresultformatterplugin":[754],"paginatedcmspageresultformatterplugin":[754],"rawcmspagesearchresultformatterplugin":[754],"createcmspagesearchqueryexpanderplugins":[754],"resultformatterplugininterface":[754,926,932,944,953],"createcmspagesearchresultformatterplugins":[754],"createcmspagesearchcountqueryexpanderplugins":[754],"fulltextsearchproductstabplugin":[754],"fulltextsearchcmspagetabplugin":[754],"fulltextsearchtabplugininterface":[754],"createfulltextsearchplugins":[754],"businessonbehalfcompanyuserdataimportplugin":[755,983],"defaultcompanyusercustomertransferexpanderplugin":[755,983],"isonbehalfcustomertransferexpanderplugin":[755,983],"customertransferexpanderplugininterface":[755,759,765,776,777,786,929,961,983,993],"getcustomertransferexpanderplugins":[755,759,765,776,777,786,929,961,983,993],"customeraccesssynchronizationdataplugin":[756],"customeraccessinstallerplugin":[756],"seepricepermissionplugin":[756],"seeaddtocartpermissionplugin":[756],"seewishlistpermissionplugin":[756],"seeshoppinglistpermissionplugin":[756],"customeraccesspermissionstorageplugin":[756],"permissionstorageplugininterface":[756,776,777,929,961],"getpermissionstorageplugins":[756,776,777,929,961],"merchantrelationshipdataimportplugin":[757],"merchantrelationshiphydrateplugin":[757],"companyuserhydrationplugininterface":[757],"getcompanyuserhydrationplugins":[757],"priceproductabstractmerchantrelationsynchronizationdataplugin":[758,946],"priceproductconcretemerchantrelationsynchronizationdataplugin":[758,946],"priceproductmerchantrelationshipdataimportplugin":[758,946],"merchantrelationshippricequerycriteriaplugin":[758,946],"merchantrelationshippricedimensionabstractwriterplugin":[758,946],"merchantrelationshippricedimensionconcretewriterplugin":[758,946],"merchantrelationshippriceproductdimensionexpanderstrategyplugin":[758,946],"merchantrelationshippriceproductfilterplugin":[758,946],"priceproductmerchantrelationshipstoragedimensionplugin":[758,946],"merchantrelationshipproductabstractformexpanderplugin":[758,946],"merchantrelationshipproductconcreteformexpanderplugin":[758,946],"productabstractformexpanderplugininterface":[758,946],"getproductabstractformexpanderplugins":[758,946],"productconcreteformexpanderplugininterface":[758,946],"getproductconcreteformexpanderplugins":[758,946],}});