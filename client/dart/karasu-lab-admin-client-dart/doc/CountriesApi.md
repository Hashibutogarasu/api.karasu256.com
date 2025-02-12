# karasu_lab_admin_client.api.CountriesApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesControllerCreate**](CountriesApi.md#countriescontrollercreate) | **POST** /wiki/genshin/admin/regions | 
[**countriesControllerDelete**](CountriesApi.md#countriescontrollerdelete) | **DELETE** /wiki/genshin/admin/regions/{id} | 
[**countriesControllerUpdate**](CountriesApi.md#countriescontrollerupdate) | **PUT** /wiki/genshin/admin/regions | 


# **countriesControllerCreate**
> Country countriesControllerCreate(countriesControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCountriesApi();
final CountriesControllerCreateRequest countriesControllerCreateRequest = ; // CountriesControllerCreateRequest | 

try {
    final response = api.countriesControllerCreate(countriesControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CountriesApi->countriesControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countriesControllerCreateRequest** | [**CountriesControllerCreateRequest**](CountriesControllerCreateRequest.md)|  | 

### Return type

[**Country**](Country.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countriesControllerDelete**
> countriesControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCountriesApi();
final String id = id_example; // String | 

try {
    api.countriesControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling CountriesApi->countriesControllerDelete: $e\n');
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

# **countriesControllerUpdate**
> countriesControllerUpdate(countriesControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCountriesApi();
final CountriesControllerUpdateRequest countriesControllerUpdateRequest = ; // CountriesControllerUpdateRequest | 

try {
    api.countriesControllerUpdate(countriesControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling CountriesApi->countriesControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countriesControllerUpdateRequest** | [**CountriesControllerUpdateRequest**](CountriesControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

