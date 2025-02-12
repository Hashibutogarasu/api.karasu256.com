//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_filter_values_character_property_key.g.dart';

/// CharactersControllerImportRequestFilterValuesCharacterPropertyKey
///
/// Properties:
/// * [key] 
/// * [text] 
/// * [values] 
/// * [mi18nKey] 
/// * [isMultiSelect] 
/// * [id] 
/// * [isHidden] 
/// * [updatedAt] 
@BuiltValue()
abstract class CharactersControllerImportRequestFilterValuesCharacterPropertyKey implements Built<CharactersControllerImportRequestFilterValuesCharacterPropertyKey, CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder> {
  @BuiltValueField(wireName: r'key')
  String get key;

  @BuiltValueField(wireName: r'text')
  String get text;

  @BuiltValueField(wireName: r'values')
  BuiltList<String>? get values;

  @BuiltValueField(wireName: r'mi18n_key')
  String get mi18nKey;

  @BuiltValueField(wireName: r'is_multi_select')
  bool? get isMultiSelect;

  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'is_hidden')
  bool? get isHidden;

  @BuiltValueField(wireName: r'updated_at')
  String get updatedAt;

  CharactersControllerImportRequestFilterValuesCharacterPropertyKey._();

  factory CharactersControllerImportRequestFilterValuesCharacterPropertyKey([void updates(CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder b)]) = _$CharactersControllerImportRequestFilterValuesCharacterPropertyKey;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder b) => b
      ..values = ListBuilder()
      ..isMultiSelect = false
      ..isHidden = false;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestFilterValuesCharacterPropertyKey> get serializer => _$CharactersControllerImportRequestFilterValuesCharacterPropertyKeySerializer();
}

class _$CharactersControllerImportRequestFilterValuesCharacterPropertyKeySerializer implements PrimitiveSerializer<CharactersControllerImportRequestFilterValuesCharacterPropertyKey> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestFilterValuesCharacterPropertyKey, _$CharactersControllerImportRequestFilterValuesCharacterPropertyKey];

  @override
  final String wireName = r'CharactersControllerImportRequestFilterValuesCharacterPropertyKey';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestFilterValuesCharacterPropertyKey object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'key';
    yield serializers.serialize(
      object.key,
      specifiedType: const FullType(String),
    );
    yield r'text';
    yield serializers.serialize(
      object.text,
      specifiedType: const FullType(String),
    );
    if (object.values != null) {
      yield r'values';
      yield serializers.serialize(
        object.values,
        specifiedType: const FullType(BuiltList, [FullType(String)]),
      );
    }
    yield r'mi18n_key';
    yield serializers.serialize(
      object.mi18nKey,
      specifiedType: const FullType(String),
    );
    if (object.isMultiSelect != null) {
      yield r'is_multi_select';
      yield serializers.serialize(
        object.isMultiSelect,
        specifiedType: const FullType(bool),
      );
    }
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    if (object.isHidden != null) {
      yield r'is_hidden';
      yield serializers.serialize(
        object.isHidden,
        specifiedType: const FullType(bool),
      );
    }
    yield r'updated_at';
    yield serializers.serialize(
      object.updatedAt,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestFilterValuesCharacterPropertyKey object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'key':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.key = valueDes;
          break;
        case r'text':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.text = valueDes;
          break;
        case r'values':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(String)]),
          ) as BuiltList<String>;
          result.values.replace(valueDes);
          break;
        case r'mi18n_key':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.mi18nKey = valueDes;
          break;
        case r'is_multi_select':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isMultiSelect = valueDes;
          break;
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.id = valueDes;
          break;
        case r'is_hidden':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isHidden = valueDes;
          break;
        case r'updated_at':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.updatedAt = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestFilterValuesCharacterPropertyKey deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder();
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

