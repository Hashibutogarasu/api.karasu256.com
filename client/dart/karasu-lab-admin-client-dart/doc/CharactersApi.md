# karasu_lab_admin_client.api.CharactersApi

## Load the API package
```dart
import 'package:karasu_lab_admin_client/api.dart';
```

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charactersControllerImport**](CharactersApi.md#characterscontrollerimport) | **POST** /wiki/genshin/admin/characters/import | 
[**charactersControllerImportFromHoyoLab**](CharactersApi.md#characterscontrollerimportfromhoyolab) | **POST** /wiki/genshin/admin/characters/importFromHoyoLab | 
[**createCharacter**](CharactersApi.md#createcharacter) | **POST** /wiki/genshin/admin/characters | Create character
[**deleteCharacter**](CharactersApi.md#deletecharacter) | **DELETE** /wiki/genshin/admin/characters/{id} | Delete character
[**updateCharacter**](CharactersApi.md#updatecharacter) | **PUT** /wiki/genshin/admin/characters | Update character


# **charactersControllerImport**
> GICharacter charactersControllerImport(charactersControllerImportRequest)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCharactersApi();
final CharactersControllerImportRequest charactersControllerImportRequest = ; // CharactersControllerImportRequest | 

try {
    final response = api.charactersControllerImport(charactersControllerImportRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CharactersApi->charactersControllerImport: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charactersControllerImportRequest** | [**CharactersControllerImportRequest**](CharactersControllerImportRequest.md)|  | 

### Return type

[**GICharacter**](GICharacter.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **charactersControllerImportFromHoyoLab**
> GICharacter charactersControllerImportFromHoyoLab(query)



### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCharactersApi();
final CharactersControllerImportFromHoyoLabQueryParameter query = ; // CharactersControllerImportFromHoyoLabQueryParameter | 

try {
    final response = api.charactersControllerImportFromHoyoLab(query);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CharactersApi->charactersControllerImportFromHoyoLab: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**CharactersControllerImportFromHoyoLabQueryParameter**](.md)|  | 

### Return type

[**GICharacter**](GICharacter.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCharacter**
> GICharacter createCharacter(createCharacterRequest)

Create character

### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCharactersApi();
final CreateCharacterRequest createCharacterRequest = ; // CreateCharacterRequest | 

try {
    final response = api.createCharacter(createCharacterRequest);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CharactersApi->createCharacter: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCharacterRequest** | [**CreateCharacterRequest**](CreateCharacterRequest.md)|  | 

### Return type

[**GICharacter**](GICharacter.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCharacter**
> deleteCharacter(id)

Delete character

### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCharactersApi();
final String id = id_example; // String | 

try {
    api.deleteCharacter(id);
} catch on DioException (e) {
    print('Exception when calling CharactersApi->deleteCharacter: $e\n');
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

# **updateCharacter**
> updateCharacter(updateCharacterRequest)

Update character

### Example
```dart
import 'package:karasu_lab_admin_client/api.dart';

final api = KarasuLabAdminClient().getCharactersApi();
final UpdateCharacterRequest updateCharacterRequest = ; // UpdateCharacterRequest | 

try {
    api.updateCharacter(updateCharacterRequest);
} catch on DioException (e) {
    print('Exception when calling CharactersApi->updateCharacter: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCharacterRequest** | [**UpdateCharacterRequest**](UpdateCharacterRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

