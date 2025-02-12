# karasu_lab_admin_client.api.Hi3CharactersApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hi3CharactersControllerCreate**](Hi3CharactersApi.md#hi3characterscontrollercreate) | **POST** /wiki/honkai_impact_3rd/admin/hi3_characters | 
[**hi3CharactersControllerDelete**](Hi3CharactersApi.md#hi3characterscontrollerdelete) | **DELETE** /wiki/honkai_impact_3rd/admin/hi3_characters/{id} | 
[**hi3CharactersControllerUpdate**](Hi3CharactersApi.md#hi3characterscontrollerupdate) | **PUT** /wiki/honkai_impact_3rd/admin/hi3_characters | 


# **hi3CharactersControllerCreate**
> HI3Characters hi3CharactersControllerCreate(hi3CharactersControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getHi3CharactersApi();
final Hi3CharactersControllerCreateRequest hi3CharactersControllerCreateRequest = ; // Hi3CharactersControllerCreateRequest | 

try {
    final response = api.hi3CharactersControllerCreate(hi3CharactersControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling Hi3CharactersApi->hi3CharactersControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hi3CharactersControllerCreateRequest** | [**Hi3CharactersControllerCreateRequest**](Hi3CharactersControllerCreateRequest.md)|  | 

### Return type

[**HI3Characters**](HI3Characters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hi3CharactersControllerDelete**
> hi3CharactersControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getHi3CharactersApi();
final String id = id_example; // String | 

try {
    api.hi3CharactersControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling Hi3CharactersApi->hi3CharactersControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hi3CharactersControllerUpdate**
> hi3CharactersControllerUpdate(hi3CharactersControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getHi3CharactersApi();
final Hi3CharactersControllerUpdateRequest hi3CharactersControllerUpdateRequest = ; // Hi3CharactersControllerUpdateRequest | 

try {
    api.hi3CharactersControllerUpdate(hi3CharactersControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling Hi3CharactersApi->hi3CharactersControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hi3CharactersControllerUpdateRequest** | [**Hi3CharactersControllerUpdateRequest**](Hi3CharactersControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

