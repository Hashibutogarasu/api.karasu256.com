//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property_key.dart';
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property_value_types_inner.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_filter_values_character_property.g.dart';

/// CharactersControllerImportRequestFilterValuesCharacterProperty
///
/// Properties:
/// * [values] 
/// * [valueTypes] 
/// * [key] 
@BuiltValue()
abstract class CharactersControllerImportRequestFilterValuesCharacterProperty implements Built<CharactersControllerImportRequestFilterValuesCharacterProperty, CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder> {
  @BuiltValueField(wireName: r'values')
  BuiltList<String>? get values;

  @BuiltValueField(wireName: r'value_types')
  BuiltList<CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>? get valueTypes;

  @BuiltValueField(wireName: r'key')
  CharactersControllerImportRequestFilterValuesCharacterPropertyKey? get key;

  CharactersControllerImportRequestFilterValuesCharacterProperty._();

  factory CharactersControllerImportRequestFilterValuesCharacterProperty([void updates(CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder b)]) = _$CharactersControllerImportRequestFilterValuesCharacterProperty;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder b) => b
      ..values = ListBuilder()
      ..valueTypes = ListBuilder();

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestFilterValuesCharacterProperty> get serializer => _$CharactersControllerImportRequestFilterValuesCharacterPropertySerializer();
}

class _$CharactersControllerImportRequestFilterValuesCharacterPropertySerializer implements PrimitiveSerializer<CharactersControllerImportRequestFilterValuesCharacterProperty> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestFilterValuesCharacterProperty, _$CharactersControllerImportRequestFilterValuesCharacterProperty];

  @override
  final String wireName = r'CharactersControllerImportRequestFilterValuesCharacterProperty';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestFilterValuesCharacterProperty object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.values != null) {
      yield r'values';
      yield serializers.serialize(
        object.values,
        specifiedType: const FullType(BuiltList, [FullType(String)]),
      );
    }
    if (object.valueTypes != null) {
      yield r'value_types';
      yield serializers.serialize(
        object.valueTypes,
        specifiedType: const FullType(BuiltList, [FullType(CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner)]),
      );
    }
    yield r'key';
    yield object.key == null ? null : serializers.serialize(
      object.key,
      specifiedType: const FullType.nullable(CharactersControllerImportRequestFilterValuesCharacterPropertyKey),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestFilterValuesCharacterProperty object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'values':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(String)]),
          ) as BuiltList<String>;
          result.values.replace(valueDes);
          break;
        case r'value_types':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner)]),
          ) as BuiltList<CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>;
          result.valueTypes.replace(valueDes);
          break;
        case r'key':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(CharactersControllerImportRequestFilterValuesCharacterPropertyKey),
          ) as CharactersControllerImportRequestFilterValuesCharacterPropertyKey?;
          if (valueDes == null) continue;
          result.key.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestFilterValuesCharacterProperty deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

