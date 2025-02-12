# karasu_lab_admin_client.api.VersionsApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionsControllerCreate**](VersionsApi.md#versionscontrollercreate) | **POST** /wiki/genshin/admin/versions | 
[**versionsControllerDelete**](VersionsApi.md#versionscontrollerdelete) | **DELETE** /wiki/genshin/admin/versions/{id} | 
[**versionsControllerUpdate**](VersionsApi.md#versionscontrollerupdate) | **PUT** /wiki/genshin/admin/versions | 


# **versionsControllerCreate**
> VersionsEntity versionsControllerCreate(versionsControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getVersionsApi();
final VersionsControllerCreateRequest versionsControllerCreateRequest = ; // VersionsControllerCreateRequest | 

try {
    final response = api.versionsControllerCreate(versionsControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling VersionsApi->versionsControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionsControllerCreateRequest** | [**VersionsControllerCreateRequest**](VersionsControllerCreateRequest.md)|  | 

### Return type

[**VersionsEntity**](VersionsEntity.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versionsControllerDelete**
> versionsControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getVersionsApi();
final String id = id_example; // String | 

try {
    api.versionsControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling VersionsApi->versionsControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versionsControllerUpdate**
> versionsControllerUpdate(versionsControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getVersionsApi();
final VersionsControllerUpdateRequest versionsControllerUpdateRequest = ; // VersionsControllerUpdateRequest | 

try {
    api.versionsControllerUpdate(versionsControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling VersionsApi->versionsControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionsControllerUpdateRequest** | [**VersionsControllerUpdateRequest**](VersionsControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

