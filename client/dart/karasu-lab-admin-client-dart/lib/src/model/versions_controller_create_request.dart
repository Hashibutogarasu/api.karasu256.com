//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'versions_controller_create_request.g.dart';

/// VersionsControllerCreateRequest
///
/// Properties:
/// * [name] 
/// * [versionString] 
/// * [released] 
@BuiltValue()
abstract class VersionsControllerCreateRequest implements Built<VersionsControllerCreateRequest, VersionsControllerCreateRequestBuilder> {
  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'version_string')
  String get versionString;

  @BuiltValueField(wireName: r'released')
  bool? get released;

  VersionsControllerCreateRequest._();

  factory VersionsControllerCreateRequest([void updates(VersionsControllerCreateRequestBuilder b)]) = _$VersionsControllerCreateRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(VersionsControllerCreateRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<VersionsControllerCreateRequest> get serializer => _$VersionsControllerCreateRequestSerializer();
}

class _$VersionsControllerCreateRequestSerializer implements PrimitiveSerializer<VersionsControllerCreateRequest> {
  @override
  final Iterable<Type> types = const [VersionsControllerCreateRequest, _$VersionsControllerCreateRequest];

  @override
  final String wireName = r'VersionsControllerCreateRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    VersionsControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType(String),
      );
    }
    yield r'version_string';
    yield serializers.serialize(
      object.versionString,
      specifiedType: const FullType(String),
    );
    if (object.released != null) {
      yield r'released';
      yield serializers.serialize(
        object.released,
        specifiedType: const FullType(bool),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    VersionsControllerCreateRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required VersionsControllerCreateRequestBuilder result,
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
        case r'version_string':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.versionString = valueDes;
          break;
        case r'released':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.released = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  VersionsControllerCreateRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = VersionsControllerCreateRequestBuilder();
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

