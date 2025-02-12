//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_ext_post_ext.g.dart';

/// CharactersControllerImportRequestExtPostExt
///
/// Properties:
/// * [postId] 
/// * [postUserName] 
/// * [postTime] 
/// * [postAvaterUrl] 
/// * [url] 
@BuiltValue()
abstract class CharactersControllerImportRequestExtPostExt implements Built<CharactersControllerImportRequestExtPostExt, CharactersControllerImportRequestExtPostExtBuilder> {
  @BuiltValueField(wireName: r'post_id')
  String get postId;

  @BuiltValueField(wireName: r'post_user_name')
  String get postUserName;

  @BuiltValueField(wireName: r'post_time')
  String get postTime;

  @BuiltValueField(wireName: r'post_avater_url')
  String? get postAvaterUrl;

  @BuiltValueField(wireName: r'url')
  String get url;

  CharactersControllerImportRequestExtPostExt._();

  factory CharactersControllerImportRequestExtPostExt([void updates(CharactersControllerImportRequestExtPostExtBuilder b)]) = _$CharactersControllerImportRequestExtPostExt;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestExtPostExtBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestExtPostExt> get serializer => _$CharactersControllerImportRequestExtPostExtSerializer();
}

class _$CharactersControllerImportRequestExtPostExtSerializer implements PrimitiveSerializer<CharactersControllerImportRequestExtPostExt> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestExtPostExt, _$CharactersControllerImportRequestExtPostExt];

  @override
  final String wireName = r'CharactersControllerImportRequestExtPostExt';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestExtPostExt object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'post_id';
    yield serializers.serialize(
      object.postId,
      specifiedType: const FullType(String),
    );
    yield r'post_user_name';
    yield serializers.serialize(
      object.postUserName,
      specifiedType: const FullType(String),
    );
    yield r'post_time';
    yield serializers.serialize(
      object.postTime,
      specifiedType: const FullType(String),
    );
    if (object.postAvaterUrl != null) {
      yield r'post_avater_url';
      yield serializers.serialize(
        object.postAvaterUrl,
        specifiedType: const FullType(String),
      );
    }
    yield r'url';
    yield serializers.serialize(
      object.url,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestExtPostExt object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestExtPostExtBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'post_id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.postId = valueDes;
          break;
        case r'post_user_name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.postUserName = valueDes;
          break;
        case r'post_time':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.postTime = valueDes;
          break;
        case r'post_avater_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.postAvaterUrl = valueDes;
          break;
        case r'url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.url = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestExtPostExt deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestExtPostExtBuilder();
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

