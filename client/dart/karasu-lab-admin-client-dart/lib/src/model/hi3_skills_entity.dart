//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/hi3_characters.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_skills_entity.g.dart';

/// HI3SkillsEntity
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [description] 
/// * [type] 
/// * [maxLevel] 
/// * [iconUrl] 
/// * [characters] 
@BuiltValue()
abstract class HI3SkillsEntity implements Built<HI3SkillsEntity, HI3SkillsEntityBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'type')
  String? get type;

  @BuiltValueField(wireName: r'max_level')
  num? get maxLevel;

  @BuiltValueField(wireName: r'icon_url')
  String? get iconUrl;

  @BuiltValueField(wireName: r'characters')
  HI3Characters? get characters;

  HI3SkillsEntity._();

  factory HI3SkillsEntity([void updates(HI3SkillsEntityBuilder b)]) = _$HI3SkillsEntity;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(HI3SkillsEntityBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<HI3SkillsEntity> get serializer => _$HI3SkillsEntitySerializer();
}

class _$HI3SkillsEntitySerializer implements PrimitiveSerializer<HI3SkillsEntity> {
  @override
  final Iterable<Type> types = const [HI3SkillsEntity, _$HI3SkillsEntity];

  @override
  final String wireName = r'HI3SkillsEntity';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    HI3SkillsEntity object, {
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
    HI3SkillsEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required HI3SkillsEntityBuilder result,
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
  HI3SkillsEntity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = HI3SkillsEntityBuilder();
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

