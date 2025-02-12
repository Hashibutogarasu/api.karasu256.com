//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'galleries_controller_create_request.g.dart';

/// GalleriesControllerCreateRequest
///
/// Properties:
/// * [url] 
/// * [alt] 
/// * [key] 
/// * [character] 
@BuiltValue()
abstract class GalleriesControllerCreateRequest implements Built<GalleriesControllerCreateRequest, GalleriesControllerCreateRequestBuilder> {
  @BuiltValueField(wireName: r'url')
  String get url;

  @BuiltValueField(wireName: r'alt')
  String get alt;

  @BuiltValueField(wireName: r'key')
  String? get key;

  @BuiltValueField(wireName: r'character')
  String? get character;

  GalleriesControllerCreateRequest._();

  factory GalleriesControllerCreateRequest([void updates(GalleriesControllerCreateRequestBuilder b)]) = _$GalleriesControllerCreateRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(GalleriesControllerCreateRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<GalleriesControllerCreateRequest> get serializer => _$GalleriesControllerCreateRequestSerializer();
}

class _$GalleriesControllerCreateRequestSerializer implements PrimitiveSerializer<GalleriesControllerCreateRequest> {
  @override
  final Iterable<Type> types = const [GalleriesControllerCreateRequest, _$GalleriesControllerCreateRequest];

  @override
  final String wireName = r'GalleriesControllerCreateRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    GalleriesControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'url';
    yield serializers.serialize(
      object.url,
      specifiedType: const FullType(String),
    );
    yield r'alt';
    yield serializers.serialize(
      object.alt,
      specifiedType: const FullType(String),
    );
    if (object.key != null) {
      yield r'key';
      yield serializers.serialize(
        object.key,
        specifiedType: const FullType(String),
      );
    }
    if (object.character != null) {
      yield r'character';
      yield serializers.serialize(
        object.character,
        specifiedType: const FullType(String),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    GalleriesControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required GalleriesControllerCreateRequestBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.url = valueDes;
          break;
        case r'alt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.alt = valueDes;
          break;
        case r'key':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.key = valueDes;
          break;
        case r'character':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.character = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  GalleriesControllerCreateRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = GalleriesControllerCreateRequestBuilder();
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

