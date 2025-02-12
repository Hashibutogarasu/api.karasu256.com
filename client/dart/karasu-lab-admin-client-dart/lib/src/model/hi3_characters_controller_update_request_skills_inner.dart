//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters_controller_update_request_skills_inner.g.dart';

/// Hi3CharactersControllerUpdateRequestSkillsInner
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [description] 
/// * [type] 
/// * [maxLevel] 
/// * [iconUrl] 
@BuiltValue()
abstract class Hi3CharactersControllerUpdateRequestSkillsInner implements Built<Hi3CharactersControllerUpdateRequestSkillsInner, Hi3CharactersControllerUpdateRequestSkillsInnerBuilder> {
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

  Hi3CharactersControllerUpdateRequestSkillsInner._();

  factory Hi3CharactersControllerUpdateRequestSkillsInner([void updates(Hi3CharactersControllerUpdateRequestSkillsInnerBuilder b)]) = _$Hi3CharactersControllerUpdateRequestSkillsInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(Hi3CharactersControllerUpdateRequestSkillsInnerBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hi3CharactersControllerUpdateRequestSkillsInner> get serializer => _$Hi3CharactersControllerUpdateRequestSkillsInnerSerializer();
}

class _$Hi3CharactersControllerUpdateRequestSkillsInnerSerializer implements PrimitiveSerializer<Hi3CharactersControllerUpdateRequestSkillsInner> {
  @override
  final Iterable<Type> types = const [Hi3CharactersControllerUpdateRequestSkillsInner, _$Hi3CharactersControllerUpdateRequestSkillsInner];

  @override
  final String wireName = r'Hi3CharactersControllerUpdateRequestSkillsInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hi3CharactersControllerUpdateRequestSkillsInner object, {
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
  }

  @override
  Object serialize(
    Serializers serializers,
    Hi3CharactersControllerUpdateRequestSkillsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required Hi3CharactersControllerUpdateRequestSkillsInnerBuilder result,
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
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Hi3CharactersControllerUpdateRequestSkillsInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = Hi3CharactersControllerUpdateRequestSkillsInnerBuilder();
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

