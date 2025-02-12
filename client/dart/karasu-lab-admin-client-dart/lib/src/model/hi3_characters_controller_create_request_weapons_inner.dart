//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters_controller_create_request_weapons_inner.g.dart';

/// Hi3CharactersControllerCreateRequestWeaponsInner
///
/// Properties:
/// * [name] 
/// * [skill] 
/// * [description] 
/// * [type] 
/// * [maxLevel] 
/// * [iconUrl] 
/// * [thumbnailUrl] 
/// * [rarity] 
/// * [baseAtk] 
/// * [crit] 
@BuiltValue()
abstract class Hi3CharactersControllerCreateRequestWeaponsInner implements Built<Hi3CharactersControllerCreateRequestWeaponsInner, Hi3CharactersControllerCreateRequestWeaponsInnerBuilder> {
  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'skill')
  String? get skill;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'type')
  String? get type;

  @BuiltValueField(wireName: r'max_level')
  num? get maxLevel;

  @BuiltValueField(wireName: r'icon_url')
  String? get iconUrl;

  @BuiltValueField(wireName: r'thumbnail_url')
  String? get thumbnailUrl;

  @BuiltValueField(wireName: r'rarity')
  num? get rarity;

  @BuiltValueField(wireName: r'base_atk')
  num? get baseAtk;

  @BuiltValueField(wireName: r'crit')
  num? get crit;

  Hi3CharactersControllerCreateRequestWeaponsInner._();

  factory Hi3CharactersControllerCreateRequestWeaponsInner([void updates(Hi3CharactersControllerCreateRequestWeaponsInnerBuilder b)]) = _$Hi3CharactersControllerCreateRequestWeaponsInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(Hi3CharactersControllerCreateRequestWeaponsInnerBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hi3CharactersControllerCreateRequestWeaponsInner> get serializer => _$Hi3CharactersControllerCreateRequestWeaponsInnerSerializer();
}

class _$Hi3CharactersControllerCreateRequestWeaponsInnerSerializer implements PrimitiveSerializer<Hi3CharactersControllerCreateRequestWeaponsInner> {
  @override
  final Iterable<Type> types = const [Hi3CharactersControllerCreateRequestWeaponsInner, _$Hi3CharactersControllerCreateRequestWeaponsInner];

  @override
  final String wireName = r'Hi3CharactersControllerCreateRequestWeaponsInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hi3CharactersControllerCreateRequestWeaponsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.skill != null) {
      yield r'skill';
      yield serializers.serialize(
        object.skill,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.description != null) {
      yield r'description';
      yield serializers.serialize(
        object.description,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.type != null) {
      yield r'type';
      yield serializers.serialize(
        object.type,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.maxLevel != null) {
      yield r'max_level';
      yield serializers.serialize(
        object.maxLevel,
        specifiedType: const FullType.nullable(num),
      );
    }
    if (object.iconUrl != null) {
      yield r'icon_url';
      yield serializers.serialize(
        object.iconUrl,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.thumbnailUrl != null) {
      yield r'thumbnail_url';
      yield serializers.serialize(
        object.thumbnailUrl,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.rarity != null) {
      yield r'rarity';
      yield serializers.serialize(
        object.rarity,
        specifiedType: const FullType.nullable(num),
      );
    }
    if (object.baseAtk != null) {
      yield r'base_atk';
      yield serializers.serialize(
        object.baseAtk,
        specifiedType: const FullType.nullable(num),
      );
    }
    if (object.crit != null) {
      yield r'crit';
      yield serializers.serialize(
        object.crit,
        specifiedType: const FullType.nullable(num),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    Hi3CharactersControllerCreateRequestWeaponsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required Hi3CharactersControllerCreateRequestWeaponsInnerBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'skill':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.skill = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
          break;
        case r'type':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.type = valueDes;
          break;
        case r'max_level':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(num),
          ) as num?;
          if (valueDes == null) continue;
          result.maxLevel = valueDes;
          break;
        case r'icon_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.iconUrl = valueDes;
          break;
        case r'thumbnail_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.thumbnailUrl = valueDes;
          break;
        case r'rarity':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(num),
          ) as num?;
          if (valueDes == null) continue;
          result.rarity = valueDes;
          break;
        case r'base_atk':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(num),
          ) as num?;
          if (valueDes == null) continue;
          result.baseAtk = valueDes;
          break;
        case r'crit':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(num),
          ) as num?;
          if (valueDes == null) continue;
          result.crit = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Hi3CharactersControllerCreateRequestWeaponsInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = Hi3CharactersControllerCreateRequestWeaponsInnerBuilder();
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

