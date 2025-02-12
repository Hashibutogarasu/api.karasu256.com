//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/hi3_characters.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_stigmatas_entity.g.dart';

/// HI3StigmatasEntity
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [description] 
/// * [skill] 
/// * [type] 
/// * [twoSetSkill] 
/// * [threeSetSkill] 
/// * [maxLevel] 
/// * [iconUrl] 
/// * [thumbnailUrl] 
/// * [createdAt] 
/// * [updatedAt] 
/// * [characters] 
@BuiltValue()
abstract class HI3StigmatasEntity implements Built<HI3StigmatasEntity, HI3StigmatasEntityBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'skill')
  String? get skill;

  @BuiltValueField(wireName: r'type')
  String? get type;

  @BuiltValueField(wireName: r'two_set_skill')
  String? get twoSetSkill;

  @BuiltValueField(wireName: r'three_set_skill')
  String? get threeSetSkill;

  @BuiltValueField(wireName: r'max_level')
  num? get maxLevel;

  @BuiltValueField(wireName: r'icon_url')
  String? get iconUrl;

  @BuiltValueField(wireName: r'thumbnail_url')
  String? get thumbnailUrl;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueField(wireName: r'characters')
  HI3Characters? get characters;

  HI3StigmatasEntity._();

  factory HI3StigmatasEntity([void updates(HI3StigmatasEntityBuilder b)]) = _$HI3StigmatasEntity;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(HI3StigmatasEntityBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<HI3StigmatasEntity> get serializer => _$HI3StigmatasEntitySerializer();
}

class _$HI3StigmatasEntitySerializer implements PrimitiveSerializer<HI3StigmatasEntity> {
  @override
  final Iterable<Type> types = const [HI3StigmatasEntity, _$HI3StigmatasEntity];

  @override
  final String wireName = r'HI3StigmatasEntity';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    HI3StigmatasEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
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
    if (object.skill != null) {
      yield r'skill';
      yield serializers.serialize(
        object.skill,
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
    if (object.twoSetSkill != null) {
      yield r'two_set_skill';
      yield serializers.serialize(
        object.twoSetSkill,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.threeSetSkill != null) {
      yield r'three_set_skill';
      yield serializers.serialize(
        object.threeSetSkill,
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
    yield r'createdAt';
    yield serializers.serialize(
      object.createdAt,
      specifiedType: const FullType(DateTime),
    );
    yield r'updatedAt';
    yield serializers.serialize(
      object.updatedAt,
      specifiedType: const FullType(DateTime),
    );
    if (object.characters != null) {
      yield r'characters';
      yield serializers.serialize(
        object.characters,
        specifiedType: const FullType.nullable(HI3Characters),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    HI3StigmatasEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required HI3StigmatasEntityBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.id = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
          break;
        case r'skill':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.skill = valueDes;
          break;
        case r'type':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.type = valueDes;
          break;
        case r'two_set_skill':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.twoSetSkill = valueDes;
          break;
        case r'three_set_skill':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.threeSetSkill = valueDes;
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
        case r'createdAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.createdAt = valueDes;
          break;
        case r'updatedAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.updatedAt = valueDes;
          break;
        case r'characters':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(HI3Characters),
          ) as HI3Characters?;
          if (valueDes == null) continue;
          result.characters.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  HI3StigmatasEntity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = HI3StigmatasEntityBuilder();
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

