//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_filter_values_character_property.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_filter_values.g.dart';

/// CharactersControllerImportRequestFilterValues
///
/// Properties:
/// * [characterProperty] 
/// * [characterWeapon] 
/// * [characterRarity] 
/// * [characterVision] 
/// * [characterRegion] 
@BuiltValue()
abstract class CharactersControllerImportRequestFilterValues implements Built<CharactersControllerImportRequestFilterValues, CharactersControllerImportRequestFilterValuesBuilder> {
  @BuiltValueField(wireName: r'character_property')
  CharactersControllerImportRequestFilterValuesCharacterProperty? get characterProperty;

  @BuiltValueField(wireName: r'character_weapon')
  CharactersControllerImportRequestFilterValuesCharacterProperty? get characterWeapon;

  @BuiltValueField(wireName: r'character_rarity')
  CharactersControllerImportRequestFilterValuesCharacterProperty? get characterRarity;

  @BuiltValueField(wireName: r'character_vision')
  CharactersControllerImportRequestFilterValuesCharacterProperty? get characterVision;

  @BuiltValueField(wireName: r'character_region')
  CharactersControllerImportRequestFilterValuesCharacterProperty? get characterRegion;

  CharactersControllerImportRequestFilterValues._();

  factory CharactersControllerImportRequestFilterValues([void updates(CharactersControllerImportRequestFilterValuesBuilder b)]) = _$CharactersControllerImportRequestFilterValues;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestFilterValuesBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestFilterValues> get serializer => _$CharactersControllerImportRequestFilterValuesSerializer();
}

class _$CharactersControllerImportRequestFilterValuesSerializer implements PrimitiveSerializer<CharactersControllerImportRequestFilterValues> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestFilterValues, _$CharactersControllerImportRequestFilterValues];

  @override
  final String wireName = r'CharactersControllerImportRequestFilterValues';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestFilterValues object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.characterProperty != null) {
      yield r'character_property';
      yield serializers.serialize(
        object.characterProperty,
        specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
      );
    }
    if (object.characterWeapon != null) {
      yield r'character_weapon';
      yield serializers.serialize(
        object.characterWeapon,
        specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
      );
    }
    if (object.characterRarity != null) {
      yield r'character_rarity';
      yield serializers.serialize(
        object.characterRarity,
        specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
      );
    }
    if (object.characterVision != null) {
      yield r'character_vision';
      yield serializers.serialize(
        object.characterVision,
        specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
      );
    }
    if (object.characterRegion != null) {
      yield r'character_region';
      yield serializers.serialize(
        object.characterRegion,
        specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestFilterValues object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestFilterValuesBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'character_property':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
          ) as CharactersControllerImportRequestFilterValuesCharacterProperty;
          result.characterProperty.replace(valueDes);
          break;
        case r'character_weapon':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
          ) as CharactersControllerImportRequestFilterValuesCharacterProperty;
          result.characterWeapon.replace(valueDes);
          break;
        case r'character_rarity':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
          ) as CharactersControllerImportRequestFilterValuesCharacterProperty;
          result.characterRarity.replace(valueDes);
          break;
        case r'character_vision':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
          ) as CharactersControllerImportRequestFilterValuesCharacterProperty;
          result.characterVision.replace(valueDes);
          break;
        case r'character_region':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestFilterValuesCharacterProperty),
          ) as CharactersControllerImportRequestFilterValuesCharacterProperty;
          result.characterRegion.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestFilterValues deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestFilterValuesBuilder();
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

