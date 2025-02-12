//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'artifacts_controller_create_request.g.dart';

/// ArtifactsControllerCreateRequest
///
/// Properties:
/// * [name] 
/// * [description] 
/// * [iconUrl] 
/// * [oneSetEffect] 
/// * [twoSetEffect] 
/// * [fourSetEffect] 
/// * [version] 
@BuiltValue()
abstract class ArtifactsControllerCreateRequest implements Built<ArtifactsControllerCreateRequest, ArtifactsControllerCreateRequestBuilder> {
  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'icon_url')
  String? get iconUrl;

  @BuiltValueField(wireName: r'one_set_effect')
  String? get oneSetEffect;

  @BuiltValueField(wireName: r'two_set_effect')
  String? get twoSetEffect;

  @BuiltValueField(wireName: r'four_set_effect')
  String? get fourSetEffect;

  @BuiltValueField(wireName: r'version')
  String get version;

  ArtifactsControllerCreateRequest._();

  factory ArtifactsControllerCreateRequest([void updates(ArtifactsControllerCreateRequestBuilder b)]) = _$ArtifactsControllerCreateRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ArtifactsControllerCreateRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ArtifactsControllerCreateRequest> get serializer => _$ArtifactsControllerCreateRequestSerializer();
}

class _$ArtifactsControllerCreateRequestSerializer implements PrimitiveSerializer<ArtifactsControllerCreateRequest> {
  @override
  final Iterable<Type> types = const [ArtifactsControllerCreateRequest, _$ArtifactsControllerCreateRequest];

  @override
  final String wireName = r'ArtifactsControllerCreateRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ArtifactsControllerCreateRequest object, {
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
        specifiedType: const FullType(String),
      );
    }
    if (object.iconUrl != null) {
      yield r'icon_url';
      yield serializers.serialize(
        object.iconUrl,
        specifiedType: const FullType(String),
      );
    }
    if (object.oneSetEffect != null) {
      yield r'one_set_effect';
      yield serializers.serialize(
        object.oneSetEffect,
        specifiedType: const FullType(String),
      );
    }
    if (object.twoSetEffect != null) {
      yield r'two_set_effect';
      yield serializers.serialize(
        object.twoSetEffect,
        specifiedType: const FullType(String),
      );
    }
    if (object.fourSetEffect != null) {
      yield r'four_set_effect';
      yield serializers.serialize(
        object.fourSetEffect,
        specifiedType: const FullType(String),
      );
    }
    yield r'version';
    yield serializers.serialize(
      object.version,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ArtifactsControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ArtifactsControllerCreateRequestBuilder result,
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
            specifiedType: const FullType(String),
          ) as String;
          result.description = valueDes;
          break;
        case r'icon_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.iconUrl = valueDes;
          break;
        case r'one_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.oneSetEffect = valueDes;
          break;
        case r'two_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.twoSetEffect = valueDes;
          break;
        case r'four_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.fourSetEffect = valueDes;
          break;
        case r'version':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.version = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ArtifactsControllerCreateRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ArtifactsControllerCreateRequestBuilder();
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

