# karasu_lab_admin_client.api.WeaponsApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weaponsControllerCreate**](WeaponsApi.md#weaponscontrollercreate) | **POST** /wiki/genshin/admin/weapons | 
[**weaponsControllerDelete**](WeaponsApi.md#weaponscontrollerdelete) | **DELETE** /wiki/genshin/admin/weapons/{id} | 
[**weaponsControllerUpdate**](WeaponsApi.md#weaponscontrollerupdate) | **PUT** /wiki/genshin/admin/weapons | 


# **weaponsControllerCreate**
> Weapon weaponsControllerCreate(weaponsControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getWeaponsApi();
final WeaponsControllerCreateRequest weaponsControllerCreateRequest = ; // WeaponsControllerCreateRequest | 

try {
    final response = api.weaponsControllerCreate(weaponsControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling WeaponsApi->weaponsControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weaponsControllerCreateRequest** | [**WeaponsControllerCreateRequest**](WeaponsControllerCreateRequest.md)|  | 

### Return type

[**Weapon**](Weapon.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weaponsControllerDelete**
> weaponsControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getWeaponsApi();
final String id = id_example; // String | 

try {
    api.weaponsControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling WeaponsApi->weaponsControllerDelete: $e\n');
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

# **weaponsControllerUpdate**
> weaponsControllerUpdate(weaponsControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getWeaponsApi();
final WeaponsControllerUpdateRequest weaponsControllerUpdateRequest = ; // WeaponsControllerUpdateRequest | 

try {
    api.weaponsControllerUpdate(weaponsControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling WeaponsApi->weaponsControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weaponsControllerUpdateRequest** | [**WeaponsControllerUpdateRequest**](WeaponsControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

