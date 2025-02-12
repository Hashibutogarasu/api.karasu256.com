//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_modules_inner_components_inner.g.dart';

/// CharactersControllerImportRequestModulesInnerComponentsInner
///
/// Properties:
/// * [componentId] 
/// * [layout] 
/// * [data] 
/// * [style] 
@BuiltValue()
abstract class CharactersControllerImportRequestModulesInnerComponentsInner implements Built<CharactersControllerImportRequestModulesInnerComponentsInner, CharactersControllerImportRequestModulesInnerComponentsInnerBuilder> {
  @BuiltValueField(wireName: r'component_id')
  String get componentId;

  @BuiltValueField(wireName: r'layout')
  String get layout;

  @BuiltValueField(wireName: r'data')
  String? get data;

  @BuiltValueField(wireName: r'style')
  String get style;

  CharactersControllerImportRequestModulesInnerComponentsInner._();

  factory CharactersControllerImportRequestModulesInnerComponentsInner([void updates(CharactersControllerImportRequestModulesInnerComponentsInnerBuilder b)]) = _$CharactersControllerImportRequestModulesInnerComponentsInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestModulesInnerComponentsInnerBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestModulesInnerComponentsInner> get serializer => _$CharactersControllerImportRequestModulesInnerComponentsInnerSerializer();
}

class _$CharactersControllerImportRequestModulesInnerComponentsInnerSerializer implements PrimitiveSerializer<CharactersControllerImportRequestModulesInnerComponentsInner> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestModulesInnerComponentsInner, _$CharactersControllerImportRequestModulesInnerComponentsInner];

  @override
  final String wireName = r'CharactersControllerImportRequestModulesInnerComponentsInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestModulesInnerComponentsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'component_id';
    yield serializers.serialize(
      object.componentId,
      specifiedType: const FullType(String),
    );
    yield r'layout';
    yield serializers.serialize(
      object.layout,
      specifiedType: const FullType(String),
    );
    if (object.data != null) {
      yield r'data';
      yield serializers.serialize(
        object.data,
        specifiedType: const FullType(String),
      );
    }
    yield r'style';
    yield serializers.serialize(
      object.style,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestModulesInnerComponentsInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestModulesInnerComponentsInnerBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'component_id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.componentId = valueDes;
          break;
        case r'layout':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.layout = valueDes;
          break;
        case r'data':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.data = valueDes;
          break;
        case r'style':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.style = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestModulesInnerComponentsInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestModulesInnerComponentsInnerBuilder();
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

