//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_from_hoyo_lab_query_parameter.g.dart';

/// CharactersControllerImportFromHoyoLabQueryParameter
///
/// Properties:
/// * [entryPageId] 
@BuiltValue()
abstract class CharactersControllerImportFromHoyoLabQueryParameter implements Built<CharactersControllerImportFromHoyoLabQueryParameter, CharactersControllerImportFromHoyoLabQueryParameterBuilder> {
  @BuiltValueField(wireName: r'entry_page_id')
  String get entryPageId;

  CharactersControllerImportFromHoyoLabQueryParameter._();

  factory CharactersControllerImportFromHoyoLabQueryParameter([void updates(CharactersControllerImportFromHoyoLabQueryParameterBuilder b)]) = _$CharactersControllerImportFromHoyoLabQueryParameter;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportFromHoyoLabQueryParameterBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportFromHoyoLabQueryParameter> get serializer => _$CharactersControllerImportFromHoyoLabQueryParameterSerializer();
}

class _$CharactersControllerImportFromHoyoLabQueryParameterSerializer implements PrimitiveSerializer<CharactersControllerImportFromHoyoLabQueryParameter> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportFromHoyoLabQueryParameter, _$CharactersControllerImportFromHoyoLabQueryParameter];

  @override
  final String wireName = r'CharactersControllerImportFromHoyoLabQueryParameter';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportFromHoyoLabQueryParameter object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'entry_page_id';
    yield serializers.serialize(
      object.entryPageId,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportFromHoyoLabQueryParameter object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportFromHoyoLabQueryParameterBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'entry_page_id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.entryPageId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportFromHoyoLabQueryParameter deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportFromHoyoLabQueryParameterBuilder();
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

