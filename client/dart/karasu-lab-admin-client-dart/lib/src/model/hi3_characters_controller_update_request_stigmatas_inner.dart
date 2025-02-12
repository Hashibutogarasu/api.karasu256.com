//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hi3_characters_controller_update_request_stigmatas_inner.g.dart';

/// Hi3CharactersControllerUpdateRequestStigmatasInner
///
/// Properties:
/// * [name] 
/// * [description] 
/// * [skill] 
/// * [type] 
/// * [twoSetSkill] 
/// * [threeSetSkill] 
/// * [maxLevel] 
/// * [iconUrl] 
/// * [thumbnailUrl] 
@BuiltValue()
abstract class Hi3CharactersControllerUpdateRequestStigmatasInner implements Built<Hi3CharactersControllerUpdateRequestStigmatasInner, Hi3CharactersControllerUpdateRequestStigmatasInnerBuilder> {
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

  Hi3CharactersControllerUpdateRequestStigmatasInner._();

  factory Hi3CharactersControllerUpdateRequestStigmatasInner([void updates(Hi3CharactersControllerUpdateRequestStigmatasInnerBuilder b)]) = _$Hi3CharactersControllerUpdateRequestStigmatasInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(Hi3CharactersControllerUpdateRequestStigmatasInnerBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hi3CharactersControllerUpdateRequestStigmatasInner> get serializer => _$Hi3CharactersControllerUpdateRequestStigmatasInnerSerializer();
}

class _$Hi3CharactersControllerUpdateRequestStigmatasInnerSerializer implements PrimitiveSerializer<Hi3CharactersControllerUpdateRequestStigmatasInner> {
  @override
  final Iterable<Type> types = const [Hi3CharactersControllerUpdateRequestStigmatasInner, _$Hi3CharactersControllerUpdateRequestStigmatasInner];

  @override
  final String wireName = r'Hi3CharactersControllerUpdateRequestStigmatasInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hi3CharactersControllerUpdateRequestStigmatasInner object, {
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
  }

  @override
  Object serialize(
    Serializers serializers,
    Hi3CharactersControllerUpdateRequestStigmatasInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required Hi3CharactersControllerUpdateRequestStigmatasInnerBuilder result,
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
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Hi3CharactersControllerUpdateRequestStigmatasInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = Hi3CharactersControllerUpdateRequestStigmatasInnerBuilder();
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

