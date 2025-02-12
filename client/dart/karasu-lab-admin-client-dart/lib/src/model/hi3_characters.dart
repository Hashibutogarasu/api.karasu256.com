//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/hi3_skills_entity.dart';
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_weapons_entity.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_stigmatas_entity.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters.g.dart';

/// HI3Characters
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [subName] 
/// * [description] 
/// * [createdAt] 
/// * [updatedAt] 
/// * [skills] 
/// * [stigmatas] 
/// * [weapons] 
@BuiltValue()
abstract class HI3Characters implements Built<HI3Characters, HI3CharactersBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'sub_name')
  String? get subName;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueField(wireName: r'skills')
  BuiltList<HI3SkillsEntity>? get skills;

  @BuiltValueField(wireName: r'stigmatas')
  BuiltList<HI3StigmatasEntity>? get stigmatas;

  @BuiltValueField(wireName: r'weapons')
  BuiltList<HI3WeaponsEntity>? get weapons;

  HI3Characters._();

  factory HI3Characters([void updates(HI3CharactersBuilder b)]) = _$HI3Characters;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(HI3CharactersBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<HI3Characters> get serializer => _$HI3CharactersSerializer();
}

class _$HI3CharactersSerializer implements PrimitiveSerializer<HI3Characters> {
  @override
  final Iterable<Type> types = const [HI3Characters, _$HI3Characters];

  @override
  final String wireName = r'HI3Characters';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    HI3Characters object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    if (object.subName != null) {
      yield r'sub_name';
      yield serializers.serialize(
        object.subName,
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
    if (object.skills != null) {
      yield r'skills';
      yield serializers.serialize(
        object.skills,
        specifiedType: const FullType.nullable(BuiltList, [FullType(HI3SkillsEntity)]),
      );
    }
    if (object.stigmatas != null) {
      yield r'stigmatas';
      yield serializers.serialize(
        object.stigmatas,
        specifiedType: const FullType.nullable(BuiltList, [FullType(HI3StigmatasEntity)]),
      );
    }
    if (object.weapons != null) {
      yield r'weapons';
      yield serializers.serialize(
        object.weapons,
        specifiedType: const FullType.nullable(BuiltList, [FullType(HI3WeaponsEntity)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    HI3Characters object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required HI3CharactersBuilder result,
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
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'sub_name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.subName = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
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
        case r'skills':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(HI3SkillsEntity)]),
          ) as BuiltList<HI3SkillsEntity>?;
          if (valueDes == null) continue;
          result.skills.replace(valueDes);
          break;
        case r'stigmatas':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(HI3StigmatasEntity)]),
          ) as BuiltList<HI3StigmatasEntity>?;
          if (valueDes == null) continue;
          result.stigmatas.replace(valueDes);
          break;
        case r'weapons':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(HI3WeaponsEntity)]),
          ) as BuiltList<HI3WeaponsEntity>?;
          if (valueDes == null) continue;
          result.weapons.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  HI3Characters deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = HI3CharactersBuilder();
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

