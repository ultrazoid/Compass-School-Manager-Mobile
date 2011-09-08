function NKApplication()
{
	this.setStatusBarStyle = NKSetStatusBarStyle;
	this.vibrate = NKAppVibrate;
	this.setIdleTimerDisabled = NKSetIdleTimerDisabled;
	this.setBadgeCount = NKAppSetBadgeCount;
	this.iPhoneOSVersion = NKAppGetiPhoneOSVerion;
    this.getCurrentLocale = NKAppGetCurrentLocale;
	this.getDeviceType = NKGetDeviceType;
}

function NKPasteboard()
{
	this.getString = NKPasteboardGetString;
	this.setString = NKPasteboardSetString;
	this.getURL = NKPasteboardGetURL;	
	this.setURL = NKPasteboardSetURL;
}

function NKModalWindow()
{
	this.show = NKModalWindowShow;
	this.dismiss = NKModalWindowDismiss;
	this.setFrame = NKModalWindowSetFrame;
	this.setAlpha = NKModalWindowSetAlpha;
	this.addControl = NKModalWindowAddControl;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKSMSComposer()
{
	this.setRecipient = NKSMSComposerSetRecipient;
	this.setBody = NKSMSComposerSetBody;
	this.show = NKSMSComposerShow;
}

function NKSMSComposerShow()
{
	CallNKitAction("NKSMSComposerShow");
}

function NKSMSComposerSetRecipient(recipient)
{
	CallNKitAction("NKSMSComposerSetRecipient?value="+recipient);
}

function NKSMSComposerSetBody(body)
{
	CallNKitAction("NKSMSComposerSetBody?value="+ encodeURIComponent(body));
}

function NKMailComposer()
{
	this.show = NKMailComposerShow;
	this.setSubject = NKMailComposerSetSubject;
	this.setRecipient = NKMailComposerSetRecipient;
    this.setCC = NKMailComposerSetCC;
    this.setBCC = NKMailComposerSetBCC;
	this.setBody = NKMailComposerSetBody;
	this.addImage = NKMailComposerAddImage;
}

function NKMailComposerAddImage(image)
{
	CallNKitAction("NKMailComposerAddImage?id="+image.id);
}

function NKMailComposerShow()
{
	CallNKitAction("NKMailComposerShow");
}

function NKMailComposerSetSubject(subject)
{
	CallNKitAction("NKMailComposerSetSubject?value="+encodeURIComponent(subject));
}

function NKMailComposerSetRecipient(recipient)
{
	CallNKitAction("NKMailComposerSetRecipient?value="+encodeURIComponent(recipient));
}

function NKMailComposerSetCC(cc)
{
    CallNKitAction("NKMailComposerSetCC?value="+encodeURIComponent(cc));
}

function NKMailComposerSetBCC(bcc)
{
    CallNKitAction("NKMailComposerSetBCC?value="+encodeURIComponent(bcc));
}

function NKMailComposerSetBody(body, isHTML)
{
	CallNKitAction("NKMailComposerSetBody?value="+encodeURIComponent(body)+"&isHTML="+isHTML);
}

function NKModalWindowSetAlpha(value)
{
	CallNKitAction("NKModalWindowSetAlpha?id="+this.id+"&value="+value);
}

function NKModalWindowSetFrame(x, y, width, height)
{
	CallNKitAction("NKModalWindowSetFrame?id="+this.id+"&x="+x+"&y="+y+"&width="+width+"&height="+height);
}

function NKModalWindowAddControl(control)
{
	CallNKitAction("NKModalWindowAddControl?id="+this.id+"&control="+control.id);
}

function NKModalWindowShow()
{
	CallNKitAction("NKModalWindowShow?id="+this.id);
}

function NKModalWindowDismiss()
{
	CallNKitAction("NKModalWindowDismiss?id="+this.id);
}

function NKGetLibraryVersion()
{
	return CallNKitAction("NKGetLibraryVersion?sync=yes");
}

function NKPreloadPage(pageName, callback)
{
	return CallNKitAction("NKPreloadPage?sync=yes"+"&value="+encodeURIComponent(pageName)+"&callback="+callback);
}

function NKAppGetCurrentLocale() 
{
    return CallNKitAction("NKAppGetCurrentLocale?sync=yes");
}

function NKGetAppVersion()
{
	return CallNKitAction("NKGetAppVersion?sync=yes");
}

function NKExecuteJavascriptOnPage(js, pageName)
{
	CallNKitAction("NKExecuteJavascriptOnPage?value="+encodeURIComponent(js)+"&page="+pageName);
}

function NKLog(message)
{
	CallNKitAction("NKLog?value="+encodeURIComponent(message));
}

function NKNativeControlRotate(control, degrees)
{
	CallNKitAction("NKNativeControlRotate?id="+control.id+"&value="+degrees);
}

function NKNativeControlEnable(control, isEnabled)
{
	CallNKitAction("NKNativeControlEnable?id="+control.id+"&value="+isEnabled);
}

function NKNativeControlDispose(control)
{
	CallNKitAction("NKNativeControlDispose?id="+control.id);
}

function NKNativeControlSetAlpha(control, alpha)
{
	CallNKitAction("NKNativeControlSetAlpha?id="+control.id+"&value="+alpha);
}

function NKSetWebViewBackgroundColor(red, green, blue, alpha)
{
	CallNKitAction("NKSetWebViewBackgroundColor?r="+red+"&g="+green+"&b="+blue+"&alpha="+alpha);
}

function NKFileDownloader()
{
	this.openURL = NKOpenFileURLForDownload;
	this.start = NKStartFileURLDownload;
	this.stop = NKStopFileURLDownload;
	this.getProgress = NKFileDownloadGetProgress;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKFileDownloadGetProgress()
{
	return CallNKitAction("NKFileDownloadGetProgress?sync=yes&id="+this.id);
}

function NKOpenFileURLForDownload(url)
{
	CallNKitAction("NKOpenFileURLForDownload?url="+encodeURIComponent(url)+"&id="+this.id);
}

function NKStartFileURLDownload(destinationName)
{
	CallNKitAction("NKStartFileURLDownload?id="+this.id+"&fileName="+encodeURIComponent(destinationName));
}

function NKStopFileURLDownload()
{
	CallNKitAction("NKStopFileURLDownload?id="+this.id);
}

function NKPasteboardGetString()
{
	return CallNKitAction("NKPasteboardGetString?sync=yes");
}

function NKStartPreloadingPage(pageName)
{
	CallNKitAction("NKStartPreloadingPage?value="+pageName);
}

function NKReloadPage(pageName)
{
	CallNKitAction("NKReloadPage?value="+pageName);
}

function NKPasteboardSetString(value)
{
	CallNKitAction("NKPasteboardSetString?value="+encodeURIComponent(value)+"&sync=yes");
}

function NKPasteboardGetURL()
{
	return CallNKitAction("NKPasteboardGetURL?sync=yes");
}

function NKPasteboardSetURL(url)
{
	CallNKitAction("NKPasteboardSetURL?url="+encodeURIComponent(url)+"&sync=yes");
}

function NKGetDeviceType()
{
	return CallNKitAction("NKGetDeviceType?sync=yes");
}

function NKAppGetiPhoneOSVerion()
{
	return CallNKitAction("NKAppGetiPhoneOSVerion?sync=yes");
}

function NKAppSetBadgeCount(badgeCount)
{
	CallNKitAction("NKAppSetBadgeCount?count="+badgeCount);
}

function NKAppVibrate()
{
	CallNKitAction("NKVibrate");
}

function NKSetIdleTimerDisabled(isDisabled)
{
	if (isDisabled)
		CallNKitAction("NKSetIdleTimerDisabled?isDisabled=yes");
	else
		CallNKitAction("NKSetIdleTimerDisabled?isDisabled=no");
}

function NKSetStatusBarStyle(style)
{
	CallNKitAction("NKSetStatusBarStyle?style="+style);
}

function NKAppStore()
{
	this.getAvailableProducts = NKAppStoreGetAvailableProducts;
	this.requestInfoForProductAtIndex = NKAppStoreRequestInfoForProductAtIndex;
	this.buyProductWithID = NKAppStoreBuyProductWithID;
}

function NKAppStoreBuyProductWithID(identificator, callback)
{
	CallNKitAction("NKAppStoreBuyProductWithID?id="+identificator+"&callback="+callback);
}

function NKAppStoreRequestInfoForProductAtIndex(index, callback)
{
	CallNKitAction("NKAppStoreRequestInfoForProductAtIndex?callback="+callback+"&index="+index);
}

function NKAppStoreGetAvailableProducts(callback, productIDs)
{
	CallNKitAction("NKAppStoreGetAvailableProducts?callback="+callback+"&productIDs="+productIDs);
}

function NKTableView()
{
	this.init = NKTableViewInit;
	this.show = NKTableViewShow;
	this.hide = NKTableViewHide;
	this.setEditing = NKTableViewSetEditing;
	this.setUserCanEditRows = NKTableViewSetUserCanEditRows;
	this.insertCategoryNamed = NKTableViewInsertCategoryNamed;
	this.insertRecord = NKTableViewInsertRecord;	
	this.insertRecords = NKTableViewInsertRecords;
	this.bindToDataBase = NKTableViewBindToDataBase;
	this.commitDatabaseChanges = NKTableViewCommitDatabaseChanges;
	this.setRowHeight = NKTableViewSetRowHeight;
    this.setShowsIndex = NKTableViewSetIndexAllowed;
    this.setOnRowRemovedCallback = NKTableViewSetOnRowRemovedCallback;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKTableViewSetOnRowRemovedCallback(callback)
{
    CallNKitAction("NKTableViewSetOnRowRemovedCallback?id="+this.id+"&callback="+callback);
}

function NKTableViewSetUserCanEditRows(canEdit)
{
	CallNKitAction("NKTableViewSetUserCanEditRows?id="+this.id+"&value="+canEdit);
}

function NKTableViewSetIndexAllowed(indexAllowed)
{
    CallNKitAction("NKTableViewSetIndexAllowed?id="+this.id+"&value="+indexAllowed);
}

function NKTableViewCommitDatabaseChanges()
{
	CallNKitAction("NKTableViewCommitDatabaseChanges?id="+this.id);
}

function NKTableViewBindToDataBase(dbName, tableName, optionalQuery)
{
	CallNKitAction("NKTableViewBindToDataBase?id="+this.id+"&name="+dbName+"&value="+tableName+"&query="+optionalQuery);
}

function NKTableViewSetEditing(isEditing)
{
	CallNKitAction("NKTableViewSetEditing?value="+isEditing+"&id="+this.id);
}

function NKTableViewInsertRecord(title, subtitle, image, sectionNumber, rightImage, callback)
{
	CallNKitAction("NKTableViewInsertRecord?id="+this.id+"&title="+encodeURIComponent(title)+"&value="+encodeURIComponent(subtitle)+"&imageID="+image.id+"&section="+sectionNumber+"&rightImageID="+rightImage.id+"&callback="+callback);
}

function NKTableViewInsertRecords(records)
{
	CallNKitAction("NKTableViewInsertRecords?id="+this.id+"&records="+encodeURIComponent(json_encode(records)));
}

function NKTableViewInsertCategoryNamed(name)
{
	CallNKitAction("NKTableViewInsertCategoryNamed?id="+this.id+"&value="+encodeURIComponent(name));
}

function NKTableViewShow()
{
	CallNKitAction("NKTableViewShow?id="+this.id);
}

function NKTableViewHide()
{
	CallNKitAction("NKTableViewHide?id="+this.id);
}

function NKTableViewInit(x, y, w, h, style)
{
	CallNKitAction("NKTableViewInit?id="+this.id+"&x="+x+"&y="+y+"&width="+w+"&height="+h+"&style="+style);
}

function NKTableViewSetRowHeight(height)
{
	CallNKitAction("NKTableViewSetRowHeight?id="+this.id+"&height="+height);
}

function NKMapView(){
	this.init = NKMapViewInit;
	this.show = NKMapViewShow;
	this.hide = NKMapViewHide;
	this.setDelegateCallback = NKMapViewSetDelegateCallback;
	this.showUserLocation = NKMapViewShowUser;
	this.setMapType = NKMapViewSetMapType;
	this.getUserLocation = NKMapViewGetUserLocation;
	this.isUserLocationUpdating = NKMapViewIsUserlocationUpdating;
	this.setDisplayRegion = NKMapViewSetDisplayRegion;
	this.getDisplayRegion = NKMapViewGetDisplayRegion;
	this.setCenterCoordinate = NKMapViewSetCenterCoordinate;
	this.addAnnotation = NKMapViewAddAnotation;
	this.clearAnnotations = NKMapViewClearAnnotations;
	this.selectAnnotation = NKMapViewSelectAnnotation;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKMapViewSetCenterCoordinate(latitude, longitude, isAnimated)
{
	CallNKitAction("NKMapViewSetCenterCoordinate?latitude="+latitude+"&longitude="+longitude+"&value="+isAnimated+"&id="+this.id);
}

function NKMapViewGetDisplayRegion()
{
	return CallNKitAction("NKMapViewGetDisplayRegion?id="+this.id+"&sync=yes");
}

function NKMapViewClearAnnotations()
{
	CallNKitAction("NKMapViewClearAnnotations?id="+this.id);
}

function NKMapViewSetDelegateCallback(callback)
{
	CallNKitAction("NKMapViewSetDelegateCallback?callback="+callback+"&id="+this.id);
}

function NKMapViewSelectAnnotation(title)
{
	CallNKitAction("NKMapViewSelectAnnotation?internalName="+encodeURIComponent(title)+"&id="+this.id);
}

function NKMapViewAddAnotation(latitude, longitude, title, subtitle, image, colorNumber, callback)
{
	var imageVal = image;
    if (typeof image != "undefined")
	    if (typeof image['id'] != "undefined") imageVal = image.id;
	CallNKitAction("NKMapViewAddAnotation?id="+this.id+"&latitude="+latitude+"&longitude="+longitude+"&title="+encodeURIComponent(title)+"&subtitle="+encodeURIComponent(subtitle)+"&image="+imageVal+"&color="+colorNumber+"&callback="+callback);
}

function NKMapViewSetDisplayRegion(latitude, longitude, latitudeDelta, longitudeDelta)
{
	CallNKitAction("NKMapViewSetDisplayRegion?id="+this.id+"&latitude="+latitude+"&longitude="+longitude+"&latitudeDelta="+latitudeDelta+"&longitudeDelta="+longitudeDelta);
}

function NKMapViewIsUserlocationUpdating()
{
	return CallNKitAction("NKMapViewIsUserlocationUpdating?id="+this.id+"&sync=yes");
}

function NKMapViewSetMapType(mapType)
{
	CallNKitAction("NKMapViewSetMapType?id="+this.id+"&mapType="+mapType);
}

function NKMapViewGetUserLocation(callback)
{
	CallNKitAction("NKMapViewGetUserLocation?id="+this.id+"&callback="+callback);
}

function NKMapViewShowUser(isUserShown)
{
	CallNKitAction("NKMapViewShowUser?id="+this.id+"&userShownOnMap="+isUserShown);
}

function NKMapViewInit(x,y,width,height)
{
	CallNKitAction("NKMapViewInit?x="+x+"&y="+y+"&width="+width+"&height="+height+"&id="+this.id);
}

function NKMapViewShow()
{
	CallNKitAction("NKMapViewShow?id="+this.id);
}

function NKMapViewHide()
{
	CallNKitAction("NKMapViewHide?id="+this.id);
}

function NKTabBarController() {
	this.setTabBarForPage = AddTabBarItem;
	this.destroy = NKDestroyTabBar;
	this.setBadgeCountAtIndex = NKSetBadgeCountAtIndex;
	this.clearBadgesAtIndex = NKClearBadgeCountAtIndex;
	this.selectTabAtIndex = NKTabBarSelectTabAtIndex;
	this.getTabPositionsArray = NKTabBarGetTabPositions;
	this.getSelectedTab = NKTabBarGetSelectedTab;
	this.setMoreBarTintColor = NKTabBarSetMoreNavBarTint;
	this.setOnTapCallback = NKTabBarSetOnTapCallback;
	this.setTabForPageDisabled = NKTabBarSetTabForPageDisabled;
	CallNKitAction("ShowTabBarController");
}

function NKTabBarGetSelectedTab()
{
	return CallNKitAction("NKTabBarGetSelectedTab?sync=yes");
}

function NKTabBarSetOnTapCallback(callback)
{
	CallNKitAction("NKTabBarSetOnTapCallback?callback="+callback);
}

function NKTabBarSetMoreNavBarTint(red, green, blue)
{
	CallNKitAction("NKTabBarSetMoreNavBarTint?r="+red+"&g="+green+"&b="+blue);
}

function NKTabBarGetTabPositions()
{
	eval("var obj="+CallNKitAction("NKTabBarGetTabPositions?sync=yes"));
	return obj;
}

function NKTabBarSetTabForPageDisabled(page, disabled)
{
	CallNKitAction("NKTabBarSetTabForPageDisabled?page="+page+"&disabled="+disabled);
}

function NKClearBadgeCountAtIndex(index)
{
	CallNKitAction("NKClearBadgeCountAtIndex?index="+index);
}

function NKTabBarSelectTabAtIndex(index)
{
	CallNKitAction("NKTabBarSelectTabAtIndex?index="+index);
}

function NKSetBadgeCountAtIndex(badgeCount, index)
{
	CallNKitAction("NKSetBadgeCountAtIndex?count="+badgeCount+"&index="+index);
}

function NKDestroyTabBar()
{
	CallNKitAction("NKDestroyTabBar");
}

function AddTabBarItem(page, title, image)
{
	CallNKitAction("AddTabBarItem?page="+page+"&title="+encodeURIComponent(title)+"&image="+image);
}

function NKSystemVolumeControl()
{
	this.init = NKInitSystemSoundControl;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKInitSystemSoundControl(x, y, w)
{
	CallNKitAction("NKInitSystemSoundControl?x="+x+"&y="+y+"&width="+w+"&id="+this.id);
}

function NKNavigationController() 
{
	this.setTitle = SetNavigationControllerTitle;
	this.setImage = SetNavigationControllerImage;
	this.setTintColor = SetNavigationControllerTintColor;
	this.setTitleForPage = NKNavControllerSetTitleForPage;
	this.addNavigationItem = AddNavigationControllerItem;
	this.removeNavigationItem = NKNavControllerRemoveNavBarItem;
	this.gotoPage = GotoPage;
	this.setUsesPreloading = NKNavControllerSetUsesPreloading;
	this.goBack = NKNavigationControllerGoBack;
	this.setStyle = NKSetNavigationBarStyle;	
	this.hide = NKHideNavigationBar;
	this.show = NKShowNavigationBar;
	this.destroy = NKDestroyNavBar;	
	this.popToRootView = NKNavControllerPopToRootView;
	CallNKitAction("ShowNavigationController");
}

function NKNavControllerPopToRootView(animated)
{
	CallNKitAction("NKNavControllerPopToRootView?value="+animated);
}

function NKNavControllerSetUsesPreloading(usePreloading)
{
	CallNKitAction("NKNavControllerSetUsesPreloading?value="+usePreloading);
}

function NKNavControllerSetTitleForPage(title, pageName)
{
	CallNKitAction("NKNavControllerSetTitleForPage?page="+pageName+"&title="+encodeURIComponent(title));
}

function NKNavControllerRemoveNavBarItem()
{
	CallNKitAction("NKNavControllerRemoveNavBarItem");
}

function NKNavigationControllerGoBack()
{
	CallNKitAction("NKNavigationControllerGoBack");
}

function SetNavigationControllerTintColor(r, g, b)
{
	CallNKitAction("SetNavigationControllerTintColor?r="+r+"&g="+g+"&b="+b);
}

function SetNavigationControllerImage(imageName)
{
	CallNKitAction("SetNavigationControllerImage?image="+imageName);
}

function NKDestroyNavBar()
{
	CallNKitAction("NKDestroyNavBar");
}

function NKHideNavigationBar()
{
	CallNKitAction("NKHideNavigationBar");
}

function NKShowNavigationBar()
{
	CallNKitAction("NKShowNavigationBar");
}

function NKSetNavigationBarStyle(style)
{
	CallNKitAction("NKSetNavigationBarStyle?style="+style);
}

function NKAlertSheet()
{
	this.init = NKAlertSheetInit;
	this.addButtonWithTitle = NKAlertSheetAddButton;
	this.show = NKAlertSheetShow;
	this.setStyle = NKAlertSheetSetStyle;
	this.setTitle = NKAlertSheetSetTitle;
	this.setRedButtonIndex = NKAlertSheetSetDestructiveItemIndex;
	this.setBlackButtonIndex = NKAlertSheetSetBlackItemIndex;
	this.id = CallNKitAction("NKCreateAlertSheet?sync=yes");
}

function NKAlertSheetSetDestructiveItemIndex(index)
{
	CallNKitAction("NKAlertSheetSetDestructiveItemIndex?index="+index+"&id="+this.id);
}

function NKAlertSheetSetBlackItemIndex(index)
{
	CallNKitAction("NKAlertSheetSetBlackItemIndex?index="+index+"&id="+this.id);
}

function NKAlertSheetInit(callback)
{
	CallNKitAction("NKAlertSheetInit?callback="+callback+"&id="+this.id);
}

function NKAlertSheetAddButton(title)
{
	CallNKitAction("NKAlertSheetAddButton?id="+this.id+"&title="+encodeURIComponent(title));
}

function NKAlertSheetShow()
{
	CallNKitAction("NKAlertSheetShow?id="+this.id);
}

function NKAlertSheetSetStyle(style)
{
	CallNKitAction("NKAlertSheetSetStyle?style="+style+"&id="+this.id);
}

function NKAlertSheetSetTitle(title)
{
	CallNKitAction("NKAlertSheetSetTitle?id="+this.id+"&title="+title);
}

function NKInternetPlayer()
{
	this.playFromURL = NKPlayAudioStream;
	this.stop = NKStopAudioStream;
	this.mute = NKMuteAudioStream;
	this.seekToPosition = NKInternetPlayerSeek;
	this.getDurationInSeconds = NKInternetPlayerGetDuration;
	this.getCurrentPositionInSeconds = NKInternetPlayerGetPosition;
	this.setVolume = NKSetVolumeForAudioStream;
	this.notifyPlayingStarted = NKInternetPlayerNotifyPlayingStarted;
	this.notifyPlayingStopped = NKInternetPlayerNotifyPlayingStoppped;
	this.getCurrentMetaString = NKInternetPlayerGetMetaString;
	this.setMaximumBuffersCount = NKIPSetMaxBuffersCount;
	this.forceDecoderFormat = NKInternetPlayerForceDecoderFormat;
}

function NKIPSetMaxBuffersCount(count)
{
	CallNKitAction("NKIPSetMaxBuffersCount?buffersCount="+count);
}

function NKInternetPlayerForceDecoderFormat(format)
{
	CallNKitAction("NKInternetPlayerForceDecoderFormat?format="+format);
}

function NKInternetPlayerGetMetaString()
{
	return CallNKitAction("NKInternetPlayerGetMetaString?sync=yes");
}

function NKInternetPlayerGetDuration()
{
	return CallNKitAction("NKInternetPlayerGetDuration?sync=yes");
}

function NKOpenURLInSafari(url)
{
	CallNKitAction("NKOpenURLInSafari?url="+encodeURIComponent(url));
}

const NKBundle    = 0;
const NKDocuments = 1;
const NKURL       = 2;

function NKOpenDocument(name, source) 
{
    CallNKitAction("NKOpenDocument?name="+encodeURIComponent(name)+"&source="+source);
}

function NKInternetPlayerGetPosition()
{
	return CallNKitAction("NKInternetPlayerGetPosition?sync=yes");
}

function NKInternetPlayerSeek(seconds)
{
	CallNKitAction("NKInternetPlayerSeek?offset="+seconds);
}

function NKInternetPlayerNotifyPlayingStarted(callback)
{
	CallNKitAction("NKInternetPlayerNotifyPlayingStarted?callback="+callback);
}

function NKInternetPlayerNotifyPlayingStoppped(callback)
{
	CallNKitAction("NKInternetPlayerNotifyPlayingStoppped?callback="+callback);
}

function NKSetVolumeForAudioStream(volume)
{
	CallNKitAction("NKSetVolumeForAudioStream?volume="+volume);
}

function NKPlayAudioStream(url)
{
	CallNKitAction("PlayAudioStream?url="+encodeURIComponent(url));
}

function NKStopAudioStream()
{
	CallNKitAction("StopAudioStream");
}

function NKMuteAudioStream()
{
	CallNKitAction("MuteAudioStream");
}

function AddNavigationControllerItem(title, callback, image)
{
	CallNKitAction("AddNavigationControllerItem?title="+encodeURIComponent(title)+"&callback="+callback+"&image="+image);
}

function SetNavigationControllerTitle(title)
{
	CallNKitAction("SetNavigationControllerTitle?title="+encodeURIComponent(title));
}

function GotoPage(pageName)
{
	CallNKitAction("NavigationGotoPage?page="+encodeURIComponent(pageName));
}

function NKSlider()
{
	this.init = NKPlaceNativeSlider;
	this.show = NKShowNativeSlider;
	this.hide = NKHideNativeSlider;
	this.setValue = NKNativeSliderSetValue;
	this.id = CallNKitAction("NKCreateSlider?sync=yes");
}

function NKNativeSliderSetValue(value)
{
	CallNKitAction("NKNativeSliderSetValue?id="+this.id+"&value="+value);
}

function NKPlaceNativeSlider(x, y, width, callback)
{
	CallNKitAction("NKPlaceNativeSlider?x="+x+"&y="+y+"&width="+width+"&callback="+callback+"&id="+this.id);
}

function NKShowNativeSlider()
{
	CallNKitAction("NKShowNativeSlider?id="+this.id);
}
function NKHideNativeSlider()
{
	CallNKitAction("NKHideNativeSlider?id="+this.id);
}

function NKProgressBar()
{
	this.init = NKPlaceProgressBar;
	this.show = NKShowProgressBar;
	this.hide = NKHideProgressBar;
	this.setPosition = NKSetProgressBarValue;
	this.id = CallNKitAction("NKCreateProgressBar?sync=yes");
}

function NKPlaceProgressBar(x,y,width)
{
	CallNKitAction("NKPlaceProgressBar?x="+x+"&y="+y+"&width="+width+"&id="+this.id);
}

function NKShowProgressBar()
{
	CallNKitAction("NKShowProgressBar?id="+this.id);
}

function NKHideProgressBar()
{
	CallNKitAction("NKHideProgressBar?id="+this.id);
}

function NKSetProgressBarValue(value)
{
	CallNKitAction("NKSetProgressBarValue?id="+this.id+"&value="+value);
}

function NKToolBar()
{
	this.init = NKInitToolBar;
	this.show = NKShowToolBar;
	this.hide = NKHideToolBar;
	this.destroy = NKToolBarDestroy;
	this.addButton = NKToolBarAddButton;
	this.insertButtonAtIndex = NKToolBarIndertButtonAtIndex;
	this.addDoneButton = NKToolBarAddDoneButton;
	this.removeButtonAtIndex = NKToolBarRemoveButtonAtIndex;
	this.addFlexibleSpace = NKToolBarAddFlexibleSpace;
	this.setStyle = NKSetToolBarStyle;
	this.setTintColor = NKToolBarSetTintColor;
	this.id = CallNKitAction("NKCreateToolBar?sync=yes");
}

function NKToolBarSetTintColor(r, g, b)
{
	CallNKitAction("NKToolBarSetTintColor?r="+r+"&g="+g+"&b="+b+"&id="+this.id);
}

function NKToolBarRemoveButtonAtIndex(index)
{
	CallNKitAction("NKToolBarRemoveButtonAtIndex?id="+this.id+"&index="+index);
}

function NKToolBarIndertButtonAtIndex(index, title, image, callback)
{
	CallNKitAction("NKToolBarIndertButtonAtIndex?id="+this.id+"&index="+index+"&title="+encodeURIComponent(title)+"&callback="+callback+"&image="+image);
}

function NKToolBarDestroy()
{
	CallNKitAction("NKToolBarDestroy?id="+this.id);
}

function NKToolBarAddDoneButton(title, callback)
{
	CallNKitAction("NKToolBarAddDoneButton?id="+this.id+"&title="+encodeURIComponent(title)+"&callback="+callback);
}

function NKToolBarAddFlexibleSpace()
{
	CallNKitAction("NKToolBarAddFlexibleSpace?id="+this.id);
}

function NKInitToolBar(y)
{
	CallNKitAction("NKInitToolBar?y="+y+"&id="+this.id);
}

function NKShowToolBar()
{
	CallNKitAction("NKShowToolBar?id="+this.id);
}

function NKHideToolBar()
{
	CallNKitAction("NKHideToolBar?id="+this.id);
}

function NKToolBarAddButton(title, imageName, callback)
{
	CallNKitAction("NKToolBarAddButton?id="+this.id+"&title="+encodeURIComponent(title)+"&image="+imageName+"&callback="+callback);
}

function NKToolBarRemoveButtonWithTitle(title)
{
	CallNKitAction("NKToolBarRemoveButtonWithTitle?id="+this.id+"&title="+encodeURIComponent(title));
}

function NKSetToolBarStyle(style)
{
	CallNKitAction("NKSetToolBarStyle?id="+this.id+"&style="+style);
}

function NKSwitch()
{
	this.init = NKPlaceNativeSwitch;
	this.show = NKShowNativeSwitch;
	this.hide = NKHideNativeSwitch;
	this.getState = NKNativeSwitchGetState;
	this.setState = NKNativeSwitchSetState
	this.id = CallNKitAction("NKCreateSwitch?sync=yes");
}

function NKPlaceNativeSwitch(x, y, callback)
{
	CallNKitAction("NKPlaceNativeSwitch?x="+x+"&y="+y+"&callback="+callback+"&id="+this.id);
}

function NKShowNativeSwitch()
{
	CallNKitAction("NKShowNativeSwitch?id="+this.id);
}

function NKHideNativeSwitch()
{
	CallNKitAction("NKHideNativeSwitch?id="+this.id);
}

function NKNativeSwitchGetState()
{
	return parseInt(CallNKitAction("NKNativeSwitchGetState?sync=yes&id="+this.id));
}

function NKNativeSwitchSetState(state)
{
	CallNKitAction("NKNativeSwitchSetState?value="+state+"&id="+this.id);
}

function NKReleasePage(pageName)
{
    CallNKitAction("NKReleasePage?name="+pageName);
}

function NKTextField()
{
	this.init = NKPlaceNativeTextField;
	this.show = NKShowNativeTextField;
	this.hide = NKHideNativeTextField;
	this.setString = NKNativeTextFieldSetString;
	this.getString = NKNativeTextFieldGetString;
	this.setPlaceholder = NKNativeTextFieldSetPlaceholder;
	this.setKeyboardType = NKNativeTextFieldSetKeyboardType;
	this.dismissKeyboard = NKNativeTextFieldDismissKeyboard;
	this.showKeyboard = NKNativeTextFieldShowKeyboard;
	this.setSecure = NKTextFieldSetSecure;
	this.setTextChangeCallback = NKTextFieldSetTextChangeCallback;
	this.setBorderStyle = NKTextFieldSetBorderStyle;
	this.id = CallNKitAction("NKCreateTextField?sync=yes");
}

function NKTextView()
{
	this.init = NKTextViewInit;
	this.show = NKTextViewShow;
	this.hide = NKTextViewHide;
	this.setString = NKTextViewSetString;
	this.getString = NKTextViewGetString;
	this.setFontSize = NKTextViewSetFontSize;
	this.setEditable = NKTextViewSetEditable;
	this.dismissKeyboard = NKTextViewDismissKeyboard;
	this.showKeyboard = NKTextViewShowKeyboard;
	this.id = CallNKitAction("NKCreateTextView?sync=yes");
}

function NKTextViewShowKeyboard()
{
	CallNKitAction("NKTextViewShowKeyboard?id="+this.id);
}

function NKTextViewDismissKeyboard()
{
	CallNKitAction("NKTextViewDismissKeyboard?id="+this.id);
}

function NKTextViewInit(x, y, width, height)
{
	CallNKitAction("NKTextViewInit?x="+x+"&y="+y+"&width="+width+"&height="+height+"&id="+this.id);
}

function NKTextViewShow()
{
	CallNKitAction("NKTextViewShow?id="+this.id);
}

function NKTextViewHide()
{
	CallNKitAction("NKTextViewHide?id="+this.id);
}

function NKTextViewSetString(value)
{
	CallNKitAction("NKTextViewSetString?id="+this.id+"&value="+encodeURIComponent(value));
}

function NKTextViewGetString()
{
	return CallNKitAction("NKTextViewGetString?sync=yes&id="+this.id);
}

function NKTextViewSetFontSize(size)
{
	CallNKitAction("NKTextViewSetFontSize?value="+size+"&id="+this.id);
}

function NKTextViewSetEditable(value)
{
	CallNKitAction("NKTextViewSetEditable?value="+value+"&id="+this.id);
}

function NKNativeTextFieldSetPlaceholder(value)
{
	CallNKitAction("NKNativeTextFieldSetPlaceholder?id="+this.id+"&value="+encodeURIComponent(value));
}

function NKTextFieldSetSecure(value)
{
	CallNKitAction("NKTextFieldSetSecure?id="+this.id+"&value="+value);
}

function NKNativeTextFieldShowKeyboard()
{
	CallNKitAction("NKNativeTextFieldShowKeyboard?id="+this.id);
}

function NKTextFieldSetBorderStyle(style)
{
	CallNKitAction("NKTextFieldSetBorderStyle?sync=yes&style="+style+"&id="+this.id);
}

function NKTextFieldSetTextChangeCallback(callback)
{
	CallNKitAction("NKTextFieldSetTextChangeCallback?id="+this.id+"&callback="+callback);
}

function NKNativeTextFieldDismissKeyboard()
{
	CallNKitAction("NKNativeTextFieldDismissKeyboard?id="+this.id);
}

function NKPlaceNativeTextField(x, y, width, height)
{
	CallNKitAction("NKPlaceNativeTextField?x="+x+"&y="+y+"&width="+width+"&height="+height+"&id="+this.id);
}

function NKShowNativeTextField()
{
	CallNKitAction("NKShowNativeTextField?id="+this.id);
}

function NKHideNativeTextField()
{
	CallNKitAction("NKHideNativeTextField?id="+this.id);
}

function NKNativeTextFieldSetString(text)
{
	CallNKitAction("NKNativeTextFieldSetString?id="+this.id+"&value="+encodeURIComponent(text));
}

function NKNativeTextFieldGetString(text)
{
	return CallNKitAction("NKNativeTextFieldGetString?sync=yes&id="+this.id);
}

function NKNativeTextFieldSetKeyboardType(style)
{
	CallNKitAction("NKNativeTextFieldSetKeyboardType?id="+this.id+"&style="+style);
}

function NKLabel()
{
	this.init = NKLabelInit;
	this.show = NKLabelShow;
	this.setTextColor = NKLabelSetTextColor;
	this.setTextFontSize = NKLabelSetTextFontSize;
	this.hide = NKLabelHide;
	this.setString = NKLabelSetString;
	this.id = CallNKitAction("NKCreateLabel?sync=yes");
}

function NKLabelSetWordWrap(isWrap)
{
	CallNKitAction("NKLabelSetWordWrap?id="+this.id+"&value="+isWrap);
}

function NKLabelSetTextFontSize(fontSize)
{
	CallNKitAction("NKLabelSetTextFontSize?id="+this.id+"&value="+fontSize);
}

function NKLabelSetTextColor(r, g, b)
{
	CallNKitAction("NKLabelSetTextColor?id="+this.id+"&r="+r+"&g="+g+"&b="+b);
}

function NKLabelShow()
{
	CallNKitAction("NKLabelShow?id="+this.id);
}

function NKLabelHide()
{
	CallNKitAction("NKLabelHide?id="+this.id);
}

function NKLabelSetString(value)
{
	CallNKitAction("NKLabelSetString?id="+this.id+"&value="+encodeURIComponent(value));
}

function NKLabelInit(x, y, width, height, value)
{
	CallNKitAction("NKLabelInit?x="+x+"&y="+y+"&width="+width+"&height="+height+"&value="+encodeURIComponent(value)+"&id="+this.id);
}

function NKBanner()
{
	this.init = NKBannerInit;
	this.show = NKBannerShow;
	this.hide = NKBannerHide;
	
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKBannerInit(x, y, isLandscape)
{
	CallNKitAction("NKBannerInit?id="+this.id+"&x="+x+"&y="+y+"&adtype="+isLandscape);
}

function NKBannerShow()
{
	CallNKitAction("NKBannerShow?id="+this.id);
}

function NKBannerHide()
{
	CallNKitAction("NKBannerHide?id="+this.id);
}

function NKButton()
{
	this.init = NKPlaceNativeButton;
	this.show = NKShowNativeButton;
	this.hide = NKHideNativeButton;
	this.setTitle = NKSetNativeButtonTitle;
	this.setTitleColor = NKButtonSetTitleColor;
	this.setImage = NKSetNativeButtonImage;
	this.id = CallNKitAction("NKCreateButton?sync=yes");
}

function NKButtonSetTitleColor(r, g, b)
{
	CallNKitAction("NKButtonSetTitleColor?id="+this.id+"&r="+r+"&g="+g+"&b="+b);
}

function NKSetNativeButtonImage(imageName)
{
	CallNKitAction("NKSetNativeButtonImage?image="+imageName+"&id="+this.id);
}

function NKSetNativeButtonTitle(title)
{
	CallNKitAction("NKSetNativeButtonTitle?title="+encodeURIComponent(title)+"&id="+this.id);
}

function NKPlaceNativeButton(x, y, width, height, callback)
{
	CallNKitAction("NKPlaceNativeButton?x="+x+"&y="+y+"&width="+width+"&height="+height+"&callback="+callback+"&id="+this.id);
}

function NKShowNativeButton()
{
	CallNKitAction("NKShowNativeButton?id="+this.id);
}
function NKHideNativeButton()
{
	CallNKitAction("NKHideNativeButton?id="+this.id);
}

function NKImage(id)
{
	this.loadURL = NKImageLoadURL;
	this.loadFromDocuments = NKImageLoadFromDocuments;
	this.loadFromBundle = NKImageLoadFromBundle;
	this.loadFromBase64 = NKImageLoadFromBase64;
	this.getBase64 = NKImageGetBase64;	
	this.setSize = NKImageSetSize;
	this.getSize = NKImageGetSize;
	this.rotate = NKImageRotate;
	this.saveToLibrary = NKImageSaveToLibrary;
    this.saveToDocuments = NKImageSaveToDocuments;
	if (id) this.id = id; else this.id = CallNKitAction("NKGetFreeSpotInStorage?sync=yes");
}

function NKImageLoadFromBase64(base64)
{
	CallNKitAction("NKImageLoadFromBase64?id="+this.id+"&value="+encodeURIComponent(base64));
}

function NKImageRotate(degrees)
{
	CallNKitAction("NKImageRotate?id="+this.id+"&value="+degrees);
}

function NKImageGetSize()
{
	return CallNKitAction("NKImageGetSize?sync=yes"+"&id="+this.id);
}

function NKImageSaveToLibrary()
{
	CallNKitAction("NKImageSaveToLibrary?id="+this.id);
}

function NKImageSaveToDocuments(name)
{
    CallNKitAction("NKImageSaveToDocuments?id="+this.id+"&name="+name);
}

function NKImageSetSize(width, height)
{
	CallNKitAction("NKImageSetSize?id="+this.id+"&sync=yes&width="+width+"&height="+height);
}

function NKImageGetBase64(compression)
{
	return CallNKitAction("NKImageGetBase64?id="+this.id+"&sync=yes&value="+compression);
}

function NKImageLoadFromDocuments(fileName)
{
	CallNKitAction("NKImageLoadFromDocuments?id="+this.id+"&sync=yes"+"&value="+encodeURIComponent(fileName));
}

function NKImageLoadFromBundle(fileName)
{
	CallNKitAction("NKImageLoadFromBundle?id="+this.id+"&sync=yes"+"&value="+encodeURIComponent(fileName));
}

function NKImageLoadURL(URL)
{
	CallNKitAction("NKImageLoadURL?url="+encodeURIComponent(URL)+"&id="+this.id+"&sync=yes");
}

function NKWebView()
{
	this.init = NKWebViewInit;
	this.show = NKWebViewShow;
	this.hide = NKWebViewHide;
	this.loadURL = NKWebViewLoadURL;
	this.loadHTML = NKWebViewLoadHTML;
    this.loadFromBundle = NKWebViewLoadFromBundle;
    this.goBack = NKWebViewGoBack;
    this.goForward = NKWebViewGoForward;
    this.reload = NKWebViewReload;
	this.setScalesToFit = NKWebViewSetScalesToFit;
    this.setOnFinishCallback = NKWebViewSetOnFinishCallback;
    this.setDetectsPhoneNumbers = NKWebViewSetDetectsPhoneNumbers;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKWebViewSetDetectsPhoneNumbers(value) 
{
    CallNKitAction("NKWebViewSetDetectsPhoneNumbers?id="+this.id+"&value="+value);
}

function NKWebViewSetOnFinishCallback(callback)
{
    CallNKitAction("NKWebViewSetOnFinishCallback?id="+this.id+"&callback="+callback);
}

function NKWebViewReload()
{
    CallNKitAction("NKWebViewReload?id="+this.id);
}

function NKWebViewGoForward()
{
    CallNKitAction("NKWebViewGoForward?id="+this.id);
}

function NKWebViewGoBack()
{
    CallNKitAction("NKWebViewGoBack?id="+this.id);
}

function NKWebViewSetScalesToFit(value)
{
	CallNKitAction("NKWebViewSetScalesToFit?id="+this.id+"&value="+value);
}

function NKWebViewLoadHTML(value, baseURL)
{
	CallNKitAction("NKWebViewLoadHTML?id="+this.id+"&value="+encodeURIComponent(value)+"&url="+baseURL);
}

function NKWebViewInit(x, y, w, h)
{
	CallNKitAction("NKWebViewInit?id="+this.id+"&x="+x+"&y="+y+"&width="+w+"&height="+h);
}

function NKWebViewShow()
{
	CallNKitAction("NKWebViewShow?id="+this.id);
}

function NKWebViewHide()
{
	CallNKitAction("NKWebViewHide?id="+this.id);
}

function NKWebViewLoadURL(url)
{
	CallNKitAction("NKWebViewLoadURL?id="+this.id+"&url="+encodeURIComponent(url));
}

function NKWebViewLoadFromBundle(name)
{
    CallNKitAction("NKWebViewLoadFromBundle?id="+this.id+"&url="+encodeURIComponent(name));
}

function NKImageView()
{
	this.init = NKImageViewInit;
	this.setImage = NKImageViewSetImage;
	this.setImageObject = NKImageViewSetImageObject;
	this.show = NKImageViewShow;
	this.hide = NKImageViewHide;
	this.setOnClickCallback = NKImageViewSetOnClickCallback;
	this.id = CallNKitAction("NKCreateImageView?sync=yes");
}

function NKImageViewSetImageObject(imageObj)
{
	CallNKitAction("NKImageViewSetImageObject?id="+this.id+"&objID="+imageObj.id);
}

function NKImageViewSetOnClickCallback(callback)
{
	CallNKitAction("NKImageViewSetOnClickCallback?id="+this.id+"&callback="+callback);
}

function NKImageViewInit(x, y, width, height, imageName)
{
	CallNKitAction("NKImageViewInit?x="+x+"&y="+y+"&width="+width+"&height="+height+"&value="+encodeURIComponent(imageName)+"&id="+this.id);
}

function NKImageViewSetImage(imageName)
{
	CallNKitAction("NKImageViewSetImage?value="+encodeURIComponent(imageName)+"&id="+this.id);
}

function NKImageViewShow()
{
	CallNKitAction("NKImageViewShow?id="+this.id);
}

function NKImageViewHide()
{
	CallNKitAction("NKImageViewHide?id="+this.id);
}

function NKActivityIndicator()
{
	this.init = NKPlaceNativeActivityIndicator;
	this.show = NKShowNativeActivityIndicator;
	this.hide = NKHideNativeActivityIndicator;
	this.spin = NKNativeActivityIndicatorSpin;
	this.stop = NKNativeActivityIndicatorStop;
	this.id = CallNKitAction("NKCreateActivityIndicator?sync=yes");
}

function NKPlaceNativeActivityIndicator(x, y, size, style)
{
	CallNKitAction("NKPlaceNativeActivityIndicator?x="+x+"&y="+y+"&size="+size+"&style="+style+"&id="+this.id);
}

function NKNativeActivityIndicatorSpin()
{
	CallNKitAction("NKNativeActivityIndicatorSpin?id="+this.id);
}

function NKNativeActivityIndicatorStop()
{
	CallNKitAction("NKNativeActivityIndicatorStop?id="+this.id);
}

function NKShowNativeActivityIndicator()
{
	CallNKitAction("NKShowNativeActivityIndicator?id="+this.id);
}
function NKHideNativeActivityIndicator()
{
	CallNKitAction("NKHideNativeActivityIndicator?id="+this.id);
}

function NKContact()
{
	this.contacts = NKRetrieveContacts;
	this.searchContact = NKSearchContact;
	this.showPeoplePicker = NKShowPeoplePicker;
}

function NKShowPeoplePicker(callback)
{
	CallNKitAction("NKShowPeoplePicker?callback="+callback);
}

function NKRetrieveContacts()
{
	return CallNKitAction("NKRetrieveContacts?sync=yes");
}

function NKSearchContact(argument)
{
	return CallNKitAction("NKRetrieveContacts?sync=yes&argument="+encodeURIComponent(argument));
}

function NKIsInternetAvailableViaWifi()
{
	return CallNKitAction("NKIsInternetAvailableViaWifi?sync=yes");
}

function NKIsInternetAvailableViaCellularNetwork()
{
	return CallNKitAction("NKIsInternetAvailableViaCellularNetwork?sync=yes");
}

function NKMoveToPageAnimated(page, animation)
{
	CallNKitAction("NKMoveToPageAnimated?animation="+animation+"&page="+encodeURIComponent(page));
}

function NKSetPageOpaque(page, isOpaque)
{
	CallNKitAction("NKSetPageOpaque?value="+isOpaque+"&page="+encodeURIComponent(page));
}

function NKSetBackground(fileName) {
    CallNKitAction("NKSetBackground?value="+fileName);
}

function NKGetUniqueIdentifier()
{
	return CallNKitAction("NKGetUniqueIdentifier?sync=yes");
}

function NKTakePicture(callback, source)
{
	CallNKitAction("NKTakePicture?callback="+callback+"&source="+source);
}

function NKPickImageObject(callback, source, x, y, width, height)
{
	CallNKitAction("NKPickImageObject?callback="+callback+"&source="+source+"&x="+x+"&y="+y+"&width="+width+"&height="+height);
}

function NKAlert(title, message)
{
	CallNKitAction("NKAlert?title="+encodeURIComponent(title)+"&message="+encodeURIComponent(message));
}

function NKConfirm(title, message, bTitle1, bTitle2, callback)
{
	CallNKitAction("NKConfirm?title="+encodeURIComponent(title)+"&message="+encodeURIComponent(message)+"&bTitle1="+encodeURIComponent(bTitle1)+"&bTitle2="+bTitle2+"&callback="+callback);
}

function NKAudioPlayer()
{
	this.loadFile = NKAudioPlayerLoadFile;
	this.loadFileFromDocuments = NKAudioPlayerLoadFileFromDocuments;
	this.play = NKAudioPlayerPlay;
	this.stop = NKAudioPlayerStop;
	this.pause = NKAudioPlayerPause;
	this.resume = NKAudioPlayerResume;
	this.setLoopMode = NKAudioPlayerSetLoopMode;
	this.setVolume = NKAudioPlayerSetVolume;
	this.setPositionInSeconds = NKSetPositionInSeconds;
	this.getDurationInSeconds = NKAudioPlayerDuration;
	this.getCurrentPositionInSeconds = NKGetCurrentPositionInSeconds;
	this.setPlayingFinishedCallback = NKAudioPlayerSetPlayingFinishedCallback;
	this.setIgnoreLock = NKAudioPlayerSetIgnoreLock;
	this.dispose = NKAudioPlayerDispose;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKAudioPlayerSetIgnoreLock(value)
{
	CallNKitAction("NKAudioPlayerSetIgnoreLock?id="+this.id+"&value="+value);
}

function NKAudioPlayerDispose()
{
	CallNKitAction("NKAudioPlayerDispose?id="+this.id);
}

function NKAudioPlayerSetVolume(volume)
{
	CallNKitAction("NKAudioPlayerSetVolume?volume="+volume+"&id="+this.id);
}

function NKAudioPlayerSetLoopMode(isInLoop)
{
	CallNKitAction("NKAudioPlayerSetLoopMode?isInLoop="+isInLoop+"&id="+this.id);
}

function NKGetCurrentPositionInSeconds()
{
	return CallNKitAction("NKGetCurrentPositionInSeconds?sync=yes"+"&id="+this.id);
}

function NKSetPositionInSeconds(seconds)
{
	CallNKitAction("NKSetPositionInSeconds?seconds="+seconds+"&id="+this.id);
}

function NKAudioPlayerDuration()
{
	return CallNKitAction("NKAudioPlayerDuration?sync=yes"+"&id="+this.id);
}

function NKAudioPlayerSetPlayingFinishedCallback(callback)
{
	CallNKitAction("NKAudioPlayerSetPlayingFinishedCallback?callback="+callback+"&id="+this.id);
}

function NKAudioPlayerLoadFile(fileName)
{
	CallNKitAction("NKAudioPlayerLoadFile?fileName="+encodeURIComponent(fileName)+"&id="+this.id);
}

function NKAudioPlayerLoadFileFromDocuments(fileName)
{
	CallNKitAction("NKAudioPlayerLoadFileFromDocuments?fileName="+encodeURIComponent(fileName)+"&id="+this.id);
}

function NKAudioPlayerStop()
{
	CallNKitAction("NKAudioPlayerStop?id="+this.id);
}

function NKAudioPlayerPlay()
{
	CallNKitAction("NKAudioPlayerPlay?id="+this.id);
}

function NKAudioPlayerPause()
{
	CallNKitAction("NKAudioPlayerPause?id="+this.id);
}

function NKAudioPlayerResume()
{
	CallNKitAction("NKAudioPlayerResume?id="+this.id);
}

function NKFile()
{
	this.open = NKFileOpen;
	this.openFromDocuments = NKFileOpenFromDocuments;
	this.read = NKFileRead;
	this.close = NKFileClose;
	this.position = NKFilePosition;
	this.size = NKFileGetSize;
	this.deleteFile = NKFileDelete;
	this.id = CallNKitAction("NKCreateFile?sync=yes");
}

function NKFileDelete()
{
	CallNKitAction("NKFileDelete?id="+this.id);
}

function NKFileGetSize()
{
	return CallNKitAction("NKFileGetSize?id="+this.id+"&sync=yes");
}

function NKFileOpenFromDocuments(fileName)
{
	return CallNKitAction("NKFileOpenFromDocuments?id="+this.id+"&sync=yes&fileName="+encodeURIComponent(fileName));
}

function NKFileOpen(fileName)
{
	return CallNKitAction("NKFileOpen?id="+this.id+"&sync=yes&fileName="+encodeURIComponent(fileName));
}

function NKFileRead(position, length)
{
	return CallNKitAction("NKFileRead?id="+this.id+"&sync=yes&length="+length+"&position="+position);
}

function NKFileClose()
{
	CallNKitAction("NKFileClose?id="+this.id+"&sync=yes");
}

function NKFilePosition()
{
	return CallNKitAction("NKFilePosition?id="+this.id+"&sync=yes");
}

function NKSettings()
{
	this.getValueForKey = NKSettingsGetValueForKey;
	this.setValueForKey = NKSettingsSetValueForKey;
}

function NKSettingsSetValueForKey(value, key)
{
	return CallNKitAction("NKSettingsSetValueForKey?key="+key+"&value="+encodeURIComponent(json_encode(value))+"&sync=yes");
}

function NKSettingsGetValueForKey(key)
{
	var resultString = CallNKitAction("NKSettingsGetValueForKey?key="+key+"&sync=yes");
	var obj=null;
	try
	{
		eval("obj="+resultString);
	}
	catch ( identifier ) {}
	if (obj) return obj;
	else return resultString;
}

function NKUpdateLocation(callback)
{
	CallNKitAction("NKUpdateLocation?callback="+callback);
}

function NKSQLite()
{
	this.openDatabase=NKSQLiteOpenDatabase; 
	this.closeDatabase=NKSQLiteCloseDatabase;
	this.executeSQL=NKSQLiteExecute;
	this.getResults=NKSQLiteGetResultsAfterLastQuery;
}

function NKSQLiteGetResultsAfterLastQuery()
{
	eval("var obj="+CallNKitAction("NKSQLiteGetResultsAfterLastQuery?sync=yes"));
	return obj;
}

function NKSQLiteOpenDatabase(name, rewrite)
{
	return CallNKitAction("NKSQLiteOpenDatabase?name="+encodeURIComponent(name)+"&sync=yes"+"&rewrite="+rewrite);
}

function NKSQLiteCloseDatabase()
{
	return CallNKitAction("NKSQLiteCloseDatabase?sync=yes");
}

function NKSQLiteExecute(query)
{
	return CallNKitAction("NKSQLiteExecute?sync=yes&query="+encodeURIComponent(query));
}

function CallNKitAction(action)
{
	var pathArray = window.location.pathname.split('/');
	var request = new XMLHttpRequest();
	request.open('POST','http://localhost:30001/', false);
	request.send(pathArray[pathArray.length - 1] + '/' + action);
//	document.location = "nk://"+pathArray[pathArray.length - 1] + '/' + action;
	if(request.status == 200)
	{
		return request.responseText;
	}
	else
	{
		return -1;
	}
}

function NKVideoPlayer()
{
	this.openURL=NKVideoPlayerOpenURL; 
	this.openFileName=NKVideoPlayerOpenFileName;
	this.play=NKVideoPlayerPlay;
	this.stop=NKVideoPlayerStop;
}

function NKVideoPlayerOpenURL(url)
{
	return CallNKitAction("NKVideoPlayerOpenURL?url="+encodeURIComponent(url));
}

function NKVideoPlayerOpenFileName(fileName)
{
	return CallNKitAction("NKVideoPlayerOpenFileName?fileName="+encodeURIComponent(fileName));
}

function NKVideoPlayerPlay()
{
	CallNKitAction("NKVideoPlayerPlay");
}

function NKVideoPlayerStop()
{
	CallNKitAction("NKVideoPlayerStop");
}

function NKRegisterClass(className)
{
	CallNKitAction("NKRegisterClass?sync=yes"+"&className="+className);
}

function NKSplitViewController()
{
	this.init = NKSplitViewControllerInit;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKSplitViewControllerInit(leftpage, rightpage)
{
	CallNKitAction("NKSplitViewControllerInit?id="+this.id+"&name="+leftpage+"&value="+rightpage);
}

const NKControlAutoresizingNone                 = 0;
const NKControlAutoresizingFlexibleLeftMargin   = 1;
const NKControlAutoresizingFlexibleWidth        = 2;
const NKControlAutoresizingFlexibleRightMargin  = 4;
const NKControlAutoresizingFlexibleTopMargin    = 8;
const NKControlAutoresizingFlexibleHeight       = 16;
const NKControlAutoresizingFlexibleBottomMargin = 32;

function NKSetControlAutoresizingMask(control, mask)
{
	CallNKitAction("NKSetControlAutoresizingMask?id="+control.id+"&mask="+mask);
}

function NKControlSetBackgroundColor(control, red, green, blue, alpha)
{
    CallNKitAction("NKControlSetBackgroundColor?id="+control.id+"&r="+red+"&g="+green+"&b="+blue+"&alpha="+alpha);
}

// -- iPad only -- //						  

function NKPopoverController() 
{
	this.init = NKPopoverControllerInit;
	this.show = NKPopoverControllerShow;
	this.hide = NKPopoverControllerHide;
	this.setContentSize = NKPopoverControllerSetPopoverContentSize;
	this.id = CallNKitAction("NKNextFreeID?sync=yes");
}

function NKPopoverControllerHide()
{
	CallNKitAction("NKPopoverControllerHide?id="+this.id);
}

function NKPopoverControllerInit(contentPage)
{
	CallNKitAction("NKPopoverControllerInit?id="+this.id+"&page="+contentPage);
}

function NKPopoverControllerShow(x, y, width, height)
{
	CallNKitAction("NKPopoverControllerShow?id="+this.id+"&x="+x+"&y="+y+"&width="+width+"&height="+height);
}

function NKPopoverControllerSetPopoverContentSize(width, height)
{
	CallNKitAction("NKPopoverControllerSetPopoverContentSize?id="+this.id+"&width="+width+"&height="+height);
}

// Utility						  

function NKGetParameter( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
	  return "";
	else
	  return results[1];
	return 0;
}
						  						  

function json_encode(inVal) { return _json_encode(inVal).join(''); }
function _json_encode(inVal, out) 
 {
 out = out || new Array();
 var undef;
 switch (typeof inVal)
 {
  case 'object':
  if (!inVal) 
  {
	out.push('null');
  } else {
  if (inVal.constructor == Array)
  {
    var testVal = inVal.length;
    var compVal = 0;
    for (var key in inVal) compVal++;
	  if (testVal != compVal)
	  {
    	  out.push('{');
		  i = 0;
		  for (var key in inVal)
		  {
	    	  if (i++ > 0) out.push(',\n');
			  out.push('"');
			  out.push(key);
			  out.push('":');
			  _json_encode(inVal[key], out);
		  }
		  out.push('}');
		} else {
		  out.push('[');					
		  for (var i = 0; i < inVal.length; ++i) 
		  {
		     if (i > 0) out.push(',\n');
			 _json_encode(inVal[i], out);
		  }
		  out.push(']');
    	}
   } else if (typeof inVal.toString != 'undefined') {
   out.push('{');
   var first = true;
   for (var i in inVal) 
   {
	  var curr = out.length;
	  if (!first) out.push(',\n');
	  _json_encode(i, out);
	  out.push(':');                    
	  _json_encode(inVal[i], out);
	  if (out[out.length - 1] == undef)
	  {
    	  out.splice(curr, out.length - curr);
	  } else {
		first = false;
	  }
	}
						  out.push('}');
						  }
						  }
						  return out;
						  case 'unknown':
						  case 'undefined':
						  case 'function':
						  out.push(undef);
						  return out;
						  
						  case 'string':
						  out.push('"');
						  out.push(inVal.replace(/(["\\])/g, '\$1').replace(/\r/g, '').replace(/\n/g, '\n'));
													out.push('"');
													return out;
													
													default:
													out.push(String(inVal));
													return out;
													}
													}


