# karasu_lab_admin_client.api.ArtifactSetsApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactSetsControllerCreate**](ArtifactSetsApi.md#artifactsetscontrollercreate) | **POST** /wiki/genshin/admin/artifact-sets | 
[**artifactSetsControllerDelete**](ArtifactSetsApi.md#artifactsetscontrollerdelete) | **DELETE** /wiki/genshin/admin/artifact-sets/{id} | 
[**artifactSetsControllerUpdate**](ArtifactSetsApi.md#artifactsetscontrollerupdate) | **PUT** /wiki/genshin/admin/artifact-sets | 


# **artifactSetsControllerCreate**
> ArtifactSets artifactSetsControllerCreate(artifactSetsControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactSetsApi();
final ArtifactSetsControllerCreateRequest artifactSetsControllerCreateRequest = ; // ArtifactSetsControllerCreateRequest | 

try {
    final response = api.artifactSetsControllerCreate(artifactSetsControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling ArtifactSetsApi->artifactSetsControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactSetsControllerCreateRequest** | [**ArtifactSetsControllerCreateRequest**](ArtifactSetsControllerCreateRequest.md)|  | 

### Return type

[**ArtifactSets**](ArtifactSets.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifactSetsControllerDelete**
> artifactSetsControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactSetsApi();
final String id = id_example; // String | 

try {
    api.artifactSetsControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling ArtifactSetsApi->artifactSetsControllerDelete: $e\n');
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

# **artifactSetsControllerUpdate**
> artifactSetsControllerUpdate(artifactSetsControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getArtifactSetsApi();
final ArtifactSetsControllerUpdateRequest artifactSetsControllerUpdateRequest = ; // ArtifactSetsControllerUpdateRequest | 

try {
    api.artifactSetsControllerUpdate(artifactSetsControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling ArtifactSetsApi->artifactSetsControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactSetsControllerUpdateRequest** | [**ArtifactSetsControllerUpdateRequest**](ArtifactSetsControllerUpdateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

