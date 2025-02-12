//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_update_request_stigmatas_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_create_request_weapons_inner.dart';
import 'package:karasu_lab_admin_client/src/model/hi3_characters_controller_create_request_skills_inner.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters_controller_create_request.g.dart';

/// Hi3CharactersControllerCreateRequest
///
/// Properties:
/// * [name] 
/// * [description] 
/// * [subName] 
/// * [skills] 
/// * [weapons] 
/// * [stigmatas] 
@BuiltValue()
abstract class Hi3CharactersControllerCreateRequest implements Built<Hi3CharactersControllerCreateRequest, Hi3CharactersControllerCreateRequestBuilder> {
  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'sub_name')
  String? get subName;

  @BuiltValueField(wireName: r'skills')
  BuiltList<Hi3CharactersControllerCreateRequestSkillsInner?>? get skills;

  @BuiltValueField(wireName: r'weapons')
  BuiltList<Hi3CharactersControllerCreateRequestWeaponsInner>? get weapons;

  @BuiltValueField(wireName: r'stigmatas')
  BuiltList<Hi3CharactersControllerUpdateRequestStigmatasInner>? get stigmatas;

  Hi3CharactersControllerCreateRequest._();

  factory Hi3CharactersControllerCreateRequest([void updates(Hi3CharactersControllerCreateRequestBuilder b)]) = _$Hi3CharactersControllerCreateRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(Hi3CharactersControllerCreateRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hi3CharactersControllerCreateRequest> get serializer => _$Hi3CharactersControllerCreateRequestSerializer();
}

class _$Hi3CharactersControllerCreateRequestSerializer implements PrimitiveSerializer<Hi3CharactersControllerCreateRequest> {
  @override
  final Iterable<Type> types = const [Hi3CharactersControllerCreateRequest, _$Hi3CharactersControllerCreateRequest];

  @override
  final String wireName = r'Hi3CharactersControllerCreateRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hi3CharactersControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    if (object.description != null) {
      yield r'description';
      yield serializers.serialize(
        object.description,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.subName != null) {
      yield r'sub_name';
      yield serializers.serialize(
        object.subName,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.skills != null) {
      yield r'skills';
      yield serializers.serialize(
        object.skills,
        specifiedType: const FullType.nullable(BuiltList, [FullType.nullable(Hi3CharactersControllerCreateRequestSkillsInner)]),
      );
    }
    if (object.weapons != null) {
      yield r'weapons';
      yield serializers.serialize(
        object.weapons,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Hi3CharactersControllerCreateRequestWeaponsInner)]),
      );
    }
    if (object.stigmatas != null) {
      yield r'stigmatas';
      yield serializers.serialize(
        object.stigmatas,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Hi3CharactersControllerUpdateRequestStigmatasInner)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    Hi3CharactersControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required Hi3CharactersControllerCreateRequestBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
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
        case r'sub_name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.subName = valueDes;
          break;
        case r'skills':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType.nullable(Hi3CharactersControllerCreateRequestSkillsInner)]),
          ) as BuiltList<Hi3CharactersControllerCreateRequestSkillsInner?>?;
          if (valueDes == null) continue;
          result.skills.replace(valueDes);
          break;
        case r'weapons':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Hi3CharactersControllerCreateRequestWeaponsInner)]),
          ) as BuiltList<Hi3CharactersControllerCreateRequestWeaponsInner>?;
          if (valueDes == null) continue;
          result.weapons.replace(valueDes);
          break;
        case r'stigmatas':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Hi3CharactersControllerUpdateRequestStigmatasInner)]),
          ) as BuiltList<Hi3CharactersControllerUpdateRequestStigmatasInner>?;
          if (valueDes == null) continue;
          result.stigmatas.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Hi3CharactersControllerCreateRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = Hi3CharactersControllerCreateRequestBuilder();
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

