# karasu_lab_admin_client.api.GalleriesApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**galleriesControllerCreate**](GalleriesApi.md#galleriescontrollercreate) | **POST** /wiki/admin/galleries | 
[**galleriesControllerDelete**](GalleriesApi.md#galleriescontrollerdelete) | **DELETE** /wiki/admin/galleries/{id} | 
[**galleriesControllerUpdate**](GalleriesApi.md#galleriescontrollerupdate) | **PUT** /wiki/admin/galleries | 
[**galleriesControllerUploadFile**](GalleriesApi.md#galleriescontrolleruploadfile) | **POST** /wiki/admin/galleries/upload | 


# **galleriesControllerCreate**
> Gallery galleriesControllerCreate(galleriesControllerCreateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getGalleriesApi();
final GalleriesControllerCreateRequest galleriesControllerCreateRequest = ; // GalleriesControllerCreateRequest | 

try {
    final response = api.galleriesControllerCreate(galleriesControllerCreateRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GalleriesApi->galleriesControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galleriesControllerCreateRequest** | [**GalleriesControllerCreateRequest**](GalleriesControllerCreateRequest.md)|  | 

### Return type

[**Gallery**](Gallery.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **galleriesControllerDelete**
> galleriesControllerDelete(id)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getGalleriesApi();
final String id = id_example; // String | 

try {
    api.galleriesControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling GalleriesApi->galleriesControllerDelete: $e\n');
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

# **galleriesControllerUpdate**
> galleriesControllerUpdate(artifactSetsControllerUpdateRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getGalleriesApi();
final ArtifactSetsControllerUpdateRequest artifactSetsControllerUpdateRequest = ; // ArtifactSetsControllerUpdateRequest | 

try {
    api.galleriesControllerUpdate(artifactSetsControllerUpdateRequest);
} catch on DioException (e) {
    print('Exception when calling GalleriesApi->galleriesControllerUpdate: $e\n');
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

# **galleriesControllerUploadFile**
> galleriesControllerUploadFile(comment, outletId, file)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getGalleriesApi();
final String comment = comment_example; // String | 
final int outletId = 56; // int | 
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    api.galleriesControllerUploadFile(comment, outletId, file);
} catch on DioException (e) {
    print('Exception when calling GalleriesApi->galleriesControllerUploadFile: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment** | **String**|  | [optional] 
 **outletId** | **int**|  | [optional] 
 **file** | **MultipartFile**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

