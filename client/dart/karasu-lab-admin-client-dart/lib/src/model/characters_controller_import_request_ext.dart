//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_ext_post_ext.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_ext.g.dart';

/// CharactersControllerImportRequestExt
///
/// Properties:
/// * [feExt] 
/// * [postExt] 
/// * [serverExt] 
/// * [personalizedColor] 
/// * [scrollingText] 
/// * [cornerMark] 
@BuiltValue()
abstract class CharactersControllerImportRequestExt implements Built<CharactersControllerImportRequestExt, CharactersControllerImportRequestExtBuilder> {
  @BuiltValueField(wireName: r'fe_ext')
  String get feExt;

  @BuiltValueField(wireName: r'post_ext')
  CharactersControllerImportRequestExtPostExt get postExt;

  @BuiltValueField(wireName: r'server_ext')
  String get serverExt;

  @BuiltValueField(wireName: r'personalized_color')
  String get personalizedColor;

  @BuiltValueField(wireName: r'scrolling_text')
  String get scrollingText;

  @BuiltValueField(wireName: r'corner_mark')
  String get cornerMark;

  CharactersControllerImportRequestExt._();

  factory CharactersControllerImportRequestExt([void updates(CharactersControllerImportRequestExtBuilder b)]) = _$CharactersControllerImportRequestExt;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestExtBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestExt> get serializer => _$CharactersControllerImportRequestExtSerializer();
}

class _$CharactersControllerImportRequestExtSerializer implements PrimitiveSerializer<CharactersControllerImportRequestExt> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestExt, _$CharactersControllerImportRequestExt];

  @override
  final String wireName = r'CharactersControllerImportRequestExt';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestExt object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'fe_ext';
    yield serializers.serialize(
      object.feExt,
      specifiedType: const FullType(String),
    );
    yield r'post_ext';
    yield serializers.serialize(
      object.postExt,
      specifiedType: const FullType(CharactersControllerImportRequestExtPostExt),
    );
    yield r'server_ext';
    yield serializers.serialize(
      object.serverExt,
      specifiedType: const FullType(String),
    );
    yield r'personalized_color';
    yield serializers.serialize(
      object.personalizedColor,
      specifiedType: const FullType(String),
    );
    yield r'scrolling_text';
    yield serializers.serialize(
      object.scrollingText,
      specifiedType: const FullType(String),
    );
    yield r'corner_mark';
    yield serializers.serialize(
      object.cornerMark,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestExt object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestExtBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'fe_ext':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.feExt = valueDes;
          break;
        case r'post_ext':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CharactersControllerImportRequestExtPostExt),
          ) as CharactersControllerImportRequestExtPostExt;
          result.postExt.replace(valueDes);
          break;
        case r'server_ext':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.serverExt = valueDes;
          break;
        case r'personalized_color':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.personalizedColor = valueDes;
          break;
        case r'scrolling_text':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.scrollingText = valueDes;
          break;
        case r'corner_mark':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.cornerMark = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestExt deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestExtBuilder();
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

