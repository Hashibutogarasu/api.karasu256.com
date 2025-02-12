# karasu_lab_admin_client.api.ArtifactsApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactsControllerCreate**](ArtifactsApi.md#artifactscontrollercreate) | **POST** /wiki/genshin/admin/artifacts | 
[**artifactsControllerDelete**](ArtifactsApi.md#artifactscontrollerdelete) | **DELETE** /wiki/genshin/admin/artifacts/{id} | 
[**artifactsControllerUpdate**](ArtifactsApi.md#artifactscontrollerupdate) | **PUT** /wiki/genshin/admin/artifacts | 


# **artifactsControllerCreate**
> Artifacts artifactsControllerCreate(artifactsControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactsApi();
final ArtifactsControllerCreateRequest artifactsControllerCreateRequest = ; // ArtifactsControllerCreateRequest | 

try {
    final response = api.artifactsControllerCreate(artifactsControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling ArtifactsApi->artifactsControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactsControllerCreateRequest** | [**ArtifactsControllerCreateRequest**](ArtifactsControllerCreateRequest.md)|  | 

### Return type

[**Artifacts**](Artifacts.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifactsControllerDelete**
> artifactsControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactsApi();
final String id = id_example; // String | 

try {
    api.artifactsControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling ArtifactsApi->artifactsControllerDelete: $e\n');
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

# **artifactsControllerUpdate**
> artifactsControllerUpdate(artifactsControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactsApi();
final ArtifactsControllerUpdateRequest artifactsControllerUpdateRequest = ; // ArtifactsControllerUpdateRequest | 

try {
    api.artifactsControllerUpdate(artifactsControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling ArtifactsApi->artifactsControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactsControllerUpdateRequest** | [**ArtifactsControllerUpdateRequest**](ArtifactsControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

