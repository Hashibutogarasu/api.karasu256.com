//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_import

import 'package:one_of_serializer/any_of_serializer.dart';
import 'package:one_of_serializer/one_of_serializer.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/json_object.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart';
import 'package:built_value/iso_8601_date_time_serializer.dart';
import 'package:karasu_lab_admin_client/src/date_serializer.dart';
import 'package:karasu_lab_admin_client/src/model/date.dart';

import 'package:karasu_lab_admin_client/src/model/artifact_sets.dart';
import 'package:karasu_lab_admin_client/src/model/artifact_sets_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/artifact_sets_controller_update_request.dart';
import 'package:karasu_lab_admin_client/src/model/artifacts.dart';
import 'package:karasu_lab_admin_client/src/model/artifacts_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/artifacts_controller_update_request.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_from_hoyo_lab_query_parameter.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_ext.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_ext_post_ext.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property_key.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property_value_types_inner.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_modules_inner.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_modules_inner_components_inner.dart';
import 'package:karasu_lab_admin_client/src/model/countries_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/countries_controller_update_request.dart';
import 'package:karasu_lab_admin_client/src/model/country.dart';
import 'package:karasu_lab_admin_client/src/model/create_character_request.dart';
import 'package:karasu_lab_admin_client/src/model/gi_character.dart';
import 'package:karasu_lab_admin_client/src/model/galleries_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/gallery.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_skills_entity.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_stigmatas_entity.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_weapons_entity.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_create_request_skills_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_create_request_weapons_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_update_request.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_update_request_skills_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_update_request_stigmatas_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_update_request_weapons_inner.dart';
import 'package:karasu_lab_admin_client/src/model/update_character_request.dart';
import 'package:karasu_lab_admin_client/src/model/versions_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/versions_controller_update_request.dart';
import 'package:karasu_lab_admin_client/src/model/versions_entity.dart';
import 'package:karasu_lab_admin_client/src/model/weapon.dart';
import 'package:karasu_lab_admin_client/src/model/weapons_controller_create_request.dart';
import 'package:karasu_lab_admin_client/src/model/weapons_controller_update_request.dart';

part 'serializers.g.dart';

@SerializersFor([
  ArtifactSets,
  ArtifactSetsControllerCreateRequest,
  ArtifactSetsControllerUpdateRequest,
  Artifacts,
  ArtifactsControllerCreateRequest,
  ArtifactsControllerUpdateRequest,
  CharactersControllerImportFromHoyoLabQueryParameter,
  CharactersControllerImportRequest,
  CharactersControllerImportRequestExt,
  CharactersControllerImportRequestExtPostExt,
  CharactersControllerImportRequestFilterValues,
  CharactersControllerImportRequestFilterValuesCharacterProperty,
  CharactersControllerImportRequestFilterValuesCharacterPropertyKey,
  CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner,
  CharactersControllerImportRequestModulesInner,
  CharactersControllerImportRequestModulesInnerComponentsInner,
  CountriesControllerCreateRequest,
  CountriesControllerUpdateRequest,
  Country,
  CreateCharacterRequest,
  GICharacter,
  GalleriesControllerCreateRequest,
  Gallery,
  HI3Characters,
  HI3SkillsEntity,
  HI3StigmatasEntity,
  HI3WeaponsEntity,
  Hi3CharactersControllerCreateRequest,
  Hi3CharactersControllerCreateRequestSkillsInner,
  Hi3CharactersControllerCreateRequestWeaponsInner,
  Hi3CharactersControllerUpdateRequest,
  Hi3CharactersControllerUpdateRequestSkillsInner,
  Hi3CharactersControllerUpdateRequestStigmatasInner,
  Hi3CharactersControllerUpdateRequestWeaponsInner,
  UpdateCharacterRequest,
  VersionsControllerCreateRequest,
  VersionsControllerUpdateRequest,
  VersionsEntity,
  Weapon,
  WeaponsControllerCreateRequest,
  WeaponsControllerUpdateRequest,
])
Serializers serializers = (_$serializers.toBuilder()
      ..add(const OneOfSerializer())
      ..add(const AnyOfSerializer())
      ..add(const DateSerializer())
      ..add(Iso8601DateTimeSerializer()))
    .build();

Serializers standardSerializers =
    (serializers.toBuilder()..addPlugin(StandardJsonPlugin())).build();
