//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters_controller_create_request_skills_inner.g.dart';

/// Hi3CharactersControllerCreateRequestSkillsInner
///
/// Properties:
/// * [name] 
/// * [description] 
/// * [type] 
/// * [maxLevel] 
/// * [iconUrl] 
@BuiltValue()
abstract class Hi3CharactersControllerCreateRequestSkillsInner implements Built<Hi3CharactersControllerCreateRequestSkillsInner, Hi3CharactersControllerCreateRequestSkillsInnerBuilder> {
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

  Hi3CharactersControllerCreateRequestSkillsInner._();

  factory Hi3CharactersControllerCreateRequestSkillsInner([void updates(Hi3CharactersControllerCreateRequestSkillsInnerBuilder b)]) = _$Hi3CharactersControllerCreateRequestSkillsInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(Hi3CharactersControllerCreateRequestSkillsInnerBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hi3CharactersControllerCreateRequestSkillsInner> get serializer => _$Hi3CharactersControllerCreateRequestSkillsInnerSerializer();
}

class _$Hi3CharactersControllerCreateRequestSkillsInnerSerializer implements PrimitiveSerializer<Hi3CharactersControllerCreateRequestSkillsInner> {
  @override
  final Iterable<Type> types = const [Hi3CharactersControllerCreateRequestSkillsInner, _$Hi3CharactersControllerCreateRequestSkillsInner];

  @override
  final String wireName = r'Hi3CharactersControllerCreateRequestSkillsInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hi3CharactersControllerCreateRequestSkillsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
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
    Hi3CharactersControllerCreateRequestSkillsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required Hi3CharactersControllerCreateRequestSkillsInnerBuilder result,
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
  Hi3CharactersControllerCreateRequestSkillsInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = Hi3CharactersControllerCreateRequestSkillsInnerBuilder();
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

